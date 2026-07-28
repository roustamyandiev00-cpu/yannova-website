import os
import sys

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

def main():
    print("Loading Google Ads credentials from .env.local...")
    env = load_env_local()
    client_id = env.get('GOOGLE_ADS_CLIENT_ID')
    client_secret = env.get('GOOGLE_ADS_CLIENT_SECRET')

    if not client_id or not client_secret:
        print("ERROR: GOOGLE_ADS_CLIENT_ID or GOOGLE_ADS_CLIENT_SECRET not found in .env.local.")
        print("Please ensure you have saved them in the .env.local file.")
        sys.exit(1)

    print("Checking dependencies...")
    try:
        from google_auth_oauthlib.flow import InstalledAppFlow
    except ImportError:
        print("ERROR: 'google-auth-oauthlib' package is not installed.")
        print("Please install it using: pip install google-auth-oauthlib")
        sys.exit(1)

    # Google Ads API OAuth Scope
    SCOPES = ["https://www.googleapis.com/auth/adwords"]

    # Since the user created desktop credentials, we use the 'installed' key
    client_config = {
        "installed": {
            "client_id": client_id,
            "client_secret": client_secret,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
        }
    }

    try:
        print("\nStarting OAuth 2.0 flow...")
        print("This will open a browser window for you to log in and authorize Google Ads access.")
        flow = InstalledAppFlow.from_client_config(client_config, scopes=SCOPES)
        try:
            credentials = flow.run_local_server(
                host="localhost",
                port=0,
                authorization_prompt_message="Go to the following URL to authorize the app: {url}",
                success_message="Authorization complete! You can close this window."
            )
        except KeyboardInterrupt:
            # Fallback to console flow when a browser cannot be opened or the user interrupts.
            print("\nRunning console based OAuth flow (copy-paste URL into a browser)...")
            credentials = flow.run_console()


        refresh_token = credentials.refresh_token
        print("\n==================================================")
        print("SUCCESSFULLY AUTHENTICATED!")
        print(f"Refresh Token: {refresh_token}")
        print("==================================================\n")

        yaml_content = f"""# Google Ads API client library configuration
# Reference: https://developers.google.com/google-ads/api/docs/client-libs/python/configuration
developer_token: "YOUR_DEVELOPER_TOKEN_HERE"
client_id: "{client_id}"
client_secret: "{client_secret}"
refresh_token: "{refresh_token}"
# login_customer_id: "YOUR_MANAGER_CUSTOMER_ID_HERE"
"""

        yaml_path = 'google-ads.yaml'
        with open(yaml_path, 'w') as f:
            f.write(yaml_content)

        print(f"Created configuration file: {os.path.abspath(yaml_path)}")
        print("\nNext steps:")
        print("1. Open the 'google-ads.yaml' file.")
        print("2. Replace 'YOUR_DEVELOPER_TOKEN_HERE' with your actual Google Ads Developer Token.")
        print("3. (Optional) If you use a Manager Account (MCC), set 'login_customer_id' to your Manager Customer ID.")
        print("4. You are now ready to generate campaigns with AI!")

    except Exception as e:
        print(f"\nAn error occurred during authentication: {e}")
        print("\nIf you get a 'redirect_uri_mismatch' error, make sure the Client ID you created in Google Cloud Console is of type 'Desktop application' (and not 'Web application').")
        sys.exit(1)

if __name__ == '__main__':
    main()
