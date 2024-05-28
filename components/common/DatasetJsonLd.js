import React from "react";
import Head from "next/head";
import Script from "next/script";

const DatasetJsonLd = ({
  id = "",
  name = "",
  description = "",
  url = "",
  breadcrumb,
  FAQS,
  price,
  region,
  keywords = "Global Market Research , Latest industry analysis , in-Depth Market Study , customized market research study, Syndicate Market Research , market research analyst , market survey report , Company profile industry report , Market outlook report",
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
          keywords: keywords,
          creator: {
            "@type": "Organization",
            name: "AMA Research & Media LLP", //
          },
          temporalCoverage: `${new Date().getFullYear()}-${
            new Date().getFullYear() + 8
          }`,
          spatialCoverage: region,
          license: `${process.env.BASE_URL}/privacy-policy`,
          dataset: {
            "@type": "Table",
            name: `${name} REPORT HIGHLIGHTS`,
            about: description,
            url: `${url}#rd_table`,
          },
        }),
      }}
    />

    {/* Product Schema  */}
    <Script
      id="product-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: name,
          description: description,
          sku: `MRF-${id}`,
          offers: {
            "@type": "Offer",
            url: url,
            priceCurrency: "USD",
            price: price,
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.8,
            reviewCount: 1980,
          },
        }),
      }}
    />
  </>
);

export default DatasetJsonLd;
