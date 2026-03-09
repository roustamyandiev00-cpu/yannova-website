import { company } from "./company";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  path: string;
  imageUrl?: string;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yannova.be";
  const url = `${baseUrl}${props.path}`;
  const imageUrl = props.imageUrl || `${baseUrl}/og-image.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    image: imageUrl,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    author: {
      "@type": "Organization",
      name: props.authorName,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
