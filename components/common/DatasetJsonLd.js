import React from "react";
import Head from "next/head";
import Script from "next/script";

const DatasetJsonLd = ({ id, name = "", description = "", url = "" }) => (
  <>
    <Script
      id="data_set"
      type="application/ld+json"
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
