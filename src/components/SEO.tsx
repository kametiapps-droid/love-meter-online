import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  keywords?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: BreadcrumbItem[];
  articleSchema?: boolean;
  faqSchema?: { question: string; answer: string }[];
}

const SEO = ({ 
  title, 
  description, 
  path, 
  type = "website",
  keywords = "",
  datePublished,
  dateModified,
  breadcrumbs,
  articleSchema = false,
  faqSchema,
}: SEOProps) => {
  const baseUrl = "https://lovecalculator.space";
  const url = `${baseUrl}${path}`;
  const image = `${baseUrl}/og-image.png`;
  const siteName = "Love Calculator";

  const defaultBreadcrumbs: BreadcrumbItem[] = breadcrumbs || [
    { name: "Home", url: baseUrl },
    { name: title.split(" - ")[0].split(" | ")[0], url },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": defaultBreadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": articleSchema ? "Article" : "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "image": image,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": baseUrl,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
      },
    },
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified }),
    ...(articleSchema && {
      "author": {
        "@type": "Organization",
        "name": siteName,
        "url": baseUrl,
      },
      "headline": title,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url,
      },
    }),
  };

  const faqStructuredData = faqSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchema.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  const defaultKeywords = "love calculator, love test, compatibility test, love percentage, relationship test, zodiac compatibility, couple name generator, love quiz, daily horoscope";
  const fullKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="Love Calculator" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      {faqStructuredData && (
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
