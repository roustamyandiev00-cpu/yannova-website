import os
import sys
import json
import argparse

# Simple helper to load variables from .env.local without external dependencies
def load_env_local():
    env = {}
    paths = ['.env.local', '../.env.local', '../../.env.local']
    for p in paths:
        if os.path.exists(p):
            with open(p, 'r') as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#') and '=' in line:
                        k, v = line.split('=', 1)
                        env[k.strip()] = v.strip().strip('"').strip("'")
            return env
    return env

def generate_ad_data_with_gemini(api_key, service_type):
    try:
        import google.generativeai as genai
    except ImportError:
        print("ERROR: 'google-generativeai' package is not installed.")
        print("Please install it using: pip install google-generativeai")
        sys.exit(1)

    print(f"Initializing Gemini API for service: {service_type}...")
    genai.configure(api_key=api_key)
    
    # We use gemini-1.5-flash as it is fast and supports JSON output mode
    model = genai.GenerativeModel('gemini-1.5-flash')

    prompt = f"""
    You are an expert Google Ads copywriter and strategist for a premium renovation company in Belgium called 'Yannova' (website: https://www.yannova.be).
    Generate a complete Google Ads campaign structure for the service: '{service_type}'.
    
    The response MUST be a valid JSON object matching the following structure:
    {{
      "campaign_name": "string (professional campaign name, e.g. 'Yannova - Service - Region')",
      "budget_amount_micros": integer (daily budget in micros, e.g. 20000000 for 20 EUR),
      "ad_group_name": "string (logical ad group name)",
      "headlines": [
        "string (at least 5 and up to 10 headlines, each MUST be 30 characters or fewer. Focus on call to action, premium quality, 15+ years experience, free quotation, and service keywords)"
      ],
      "descriptions": [
        "string (at least 3 and up to 4 descriptions, each MUST be 90 characters or fewer. Highlight energy savings, EPC improvements, premium materials, and region of Geraardsbergen/Vlaamse Ardennen)"
      ],
      "keywords": [
        {{
          "text": "string (the search keyword phrase, in Dutch)",
          "match_type": "string (MUST be one of: 'BROAD', 'PHRASE', 'EXACT')"
        }}
      ]
    }}

    Rules:
    - All headlines must be under 30 characters.
    - All descriptions must be under 90 characters.
    - All texts must be in professional Dutch (Nederlands).
    - Provide at least 15 highly relevant local keywords.
    - Do NOT include markdown code blocks (e.g. ```json) in your response, return ONLY the raw JSON string.
    """

    try:
        response = model.generate_content(
            prompt,
            generation_config={"response_mime_type": "application/json"}
        )
        data = json.loads(response.text)
        
        # Validate headline/description lengths
        for h in data.get('headlines', []):
            if len(h) > 30:
                print(f"Warning: Headline exceeds 30 chars: '{h}' ({len(h)} chars). Truncating...")
                data['headlines'][data['headlines'].index(h)] = h[:30]
        for d in data.get('descriptions', []):
            if len(d) > 90:
                print(f"Warning: Description exceeds 90 chars: '{d}' ({len(d)} chars). Truncating...")
                data['descriptions'][data['descriptions'].index(d)] = d[:90]

        return data
    except Exception as e:
        print(f"Error generating content from Gemini: {e}")
        sys.exit(1)

def create_google_ads_campaign(client, customer_id, ad_data):
    try:
        from google.ads.googleads.client import GoogleAdsClient
        from google.ads.googleads.errors import GoogleAdsException
    except ImportError:
        print("ERROR: 'google-ads' client library is not installed.")
        print("Please install it using: pip install google-ads")
        sys.exit(1)

    print("\nConnecting to Google Ads API...")
    
    # 1. Create Budget
    campaign_budget_service = client.get_service("CampaignBudgetService")
    campaign_budget_operation = client.get_type("CampaignBudgetOperation")
    budget = campaign_budget_operation.create
    budget.name = f"Daily Budget - {ad_data['campaign_name']}"
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    budget.amount_micros = ad_data['budget_amount_micros']
    
    try:
        budget_response = campaign_budget_service.mutate_campaign_budgets(
            customer_id=customer_id, operations=[campaign_budget_operation]
        )
        budget_id = budget_response.results[0].resource_name
        print(f"Created budget: {budget_id}")
    except GoogleAdsException as ex:
        handle_googleads_exception(ex)
        return

    # 2. Create Campaign
    campaign_service = client.get_service("CampaignService")
    campaign_operation = client.get_type("CampaignOperation")
    campaign = campaign_operation.create
    campaign.name = ad_data['campaign_name']
    campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    campaign.status = client.enums.CampaignStatusEnum.PAUSED
    campaign.campaign_budget = budget_id
    
    # Target Google Search network
    campaign.network_settings.target_google_search = True
    campaign.network_settings.target_search_network = True
    
    try:
        campaign_response = campaign_service.mutate_campaigns(
            customer_id=customer_id, operations=[campaign_operation]
        )
        campaign_id = campaign_response.results[0].resource_name
        print(f"Created campaign: {campaign_id}")
    except GoogleAdsException as ex:
        handle_googleads_exception(ex)
        return

    # 3. Create Ad Group
    ad_group_service = client.get_service("AdGroupService")
    ad_group_operation = client.get_type("AdGroupOperation")
    ad_group = ad_group_operation.create
    ad_group.name = ad_data['ad_group_name']
    ad_group.campaign = campaign_id
    ad_group.status = client.enums.AdGroupStatusEnum.ENABLED
    ad_group.type = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    
    try:
        ad_group_response = ad_group_service.mutate_ad_groups(
            customer_id=customer_id, operations=[ad_group_operation]
        )
        ad_group_id = ad_group_response.results[0].resource_name
        print(f"Created ad group: {ad_group_id}")
    except GoogleAdsException as ex:
        handle_googleads_exception(ex)
        return

    # 4. Create Responsive Search Ad
    ad_group_ad_service = client.get_service("AdGroupAdService")
    ad_group_ad_operation = client.get_type("AdGroupAdOperation")
    ad_group_ad = ad_group_ad_operation.create
    ad_group_ad.ad_group = ad_group_id
    ad_group_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED
    
    ad = ad_group_ad.ad
    ad.final_urls.append("https://www.yannova.be")
    
    # Set headlines
    for headline_text in ad_data['headlines']:
        headline = client.get_type("AdTextAsset")
        headline.text = headline_text
        ad.responsive_search_ad.headlines.append(headline)
        
    # Set descriptions
    for desc_text in ad_data['descriptions']:
        description = client.get_type("AdTextAsset")
        description.text = desc_text
        ad.responsive_search_ad.descriptions.append(description)
        
    try:
        ad_response = ad_group_ad_service.mutate_ad_group_ads(
            customer_id=customer_id, operations=[ad_group_ad_operation]
        )
        print(f"Created responsive search ad: {ad_response.results[0].resource_name}")
    except GoogleAdsException as ex:
        handle_googleads_exception(ex)
        return

    # 5. Create Keywords
    ad_group_criterion_service = client.get_service("AdGroupCriterionService")
    keyword_operations = []
    
    for kw in ad_data['keywords']:
        operation = client.get_type("AdGroupCriterionOperation")
        criterion = operation.create
        criterion.ad_group = ad_group_id
        criterion.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        
        criterion.keyword.text = kw['text']
        match_type = kw['match_type']
        if match_type == 'BROAD':
            criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        elif match_type == 'PHRASE':
            criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.PHRASE
        elif match_type == 'EXACT':
            criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.EXACT
            
        keyword_operations.append(operation)
        
    try:
        keyword_response = ad_group_criterion_service.mutate_ad_group_criteria(
            customer_id=customer_id, operations=keyword_operations
        )
        print(f"Successfully added {len(keyword_response.results)} keywords to the ad group.")
    except GoogleAdsException as ex:
        handle_googleads_exception(ex)
        return

    print("\nCAMPAIGN GENERATION COMPLETED SUCCESSFULLY! Campaign is currently PAUSED so you can review it first in Google Ads.")

def handle_googleads_exception(ex):
    print(f"Request with ID '{ex.request_id}' failed with status '{ex.error.code}' and includes the following errors:")
    for error in ex.failure.errors:
        print(f"\tError with message: {error.message}")
        if error.location:
            for field_path_element in error.location.field_path_elements:
                print(f"\t\tOn field: {field_path_element.field_name}")

def main():
    parser = argparse.ArgumentParser(description="Generate and upload Google Ads campaigns using Google Gemini AI.")
    parser.add_argument("--service", type=str, default="Gevelrenovatie en Crepi", help="The type of service to target (e.g. Crepi, Ramen, Gevelrenovatie)")
    parser.add_argument("--dry-run", action="store_true", help="Generate campaign data with AI and print it, but do not upload to Google Ads")
    parser.add_argument("--config", type=str, default="google-ads.yaml", help="Path to your google-ads.yaml config file")
    parser.add_argument("--customer-id", type=str, help="Your Google Ads Customer ID (without hyphens)")
    
    args = parser.parse_args()

    # Load environment variables
    env = load_env_local()
    gemini_key = env.get('GOOGLE_GENERATIVE_AI_API_KEY')

    if not gemini_key:
        print("ERROR: GOOGLE_GENERATIVE_AI_API_KEY not found in env. Please add it to your .env.local file.")
        sys.exit(1)

    # 1. Generate Ads & Keywords with AI
    ad_data = generate_ad_data_with_gemini(gemini_key, args.service)
    
    print("\n==================================================")
    print("AI GENERATED CAMPAIGN DATA STRUCTURE:")
    print("==================================================")
    print(json.dumps(ad_data, indent=2, ensure_ascii=False))
    print("==================================================\n")

    if args.dry_run:
        print("DRY-RUN completed. Exiting without uploading to Google Ads.")
        sys.exit(0)

    # 2. Check for Google Ads credentials
    if not os.path.exists(args.config):
        print(f"ERROR: Google Ads configuration file '{args.config}' not found.")
        print("Please run scripts/google-ads/authenticate.py first to authenticate and create this file.")
        sys.exit(1)

    # Load Google Ads Client
    try:
        from google.ads.googleads.client import GoogleAdsClient
        ads_client = GoogleAdsClient.load_from_storage(args.config)
    except Exception as e:
        print(f"ERROR loading Google Ads Client: {e}")
        sys.exit(1)

    # Get Customer ID
    customer_id = args.customer_id
    if not customer_id:
        # Try to read login_customer_id from yaml as fallback
        with open(args.config, 'r') as f:
            for line in f:
                if 'login_customer_id' in line and not line.startswith('#'):
                    customer_id = line.split(':', 1)[1].strip().strip('"').strip("'")
                    break

    if not customer_id or customer_id == "YOUR_MANAGER_CUSTOMER_ID_HERE":
        print("ERROR: Google Ads Customer ID not specified.")
        print("Please specify it using '--customer-id 1234567890' or define it in google-ads.yaml.")
        sys.exit(1)

    # Clean customer ID (remove hyphens)
    customer_id = customer_id.replace("-", "")

    # 3. Create Campaign via API
    create_google_ads_campaign(ads_client, customer_id, ad_data)

if __name__ == '__main__':
    main()
