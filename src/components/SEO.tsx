
import React from "react";
import { Helmet } from "react-helmet-async";
import { urlFor } from "@/lib/sanityImageUrl";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: any;
  slug?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  ogImage,
  slug,
}) => {
  const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || "https://your-site.com";
  const fullUrl = slug ? `${siteUrl.replace(/\/$/, "")}/${slug}` : siteUrl;
  let imageUrl = "";
  if (ogImage) {
    imageUrl =
      typeof ogImage === "string"
        ? ogImage
        : urlFor(ogImage);
  } else {
    imageUrl = `${siteUrl}/default-og.jpg`;
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;

