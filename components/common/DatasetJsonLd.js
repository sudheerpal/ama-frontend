import React from "react";
import Head from "next/head";
import Script from "next/script";

const DatasetJsonLd = ({
  name = "",
  description = "",
  url = "",
  breadcrumb,
  FAQS,
}) => (
  <>
    {/* BreadcrumbList */}
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumb,
        }),
      }}
    />

    {/* FAQ  */}

    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS,
        }),
      }}
    />

    {/* Dataset schema  */}
    <Script
      id="dataset-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Dataset",
          name: name,
          description: description,
          url: url,
        }),
      }}
    />
  </>
);

export default DatasetJsonLd;
