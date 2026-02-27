import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

export function SEO({ title, description, schema }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | Pacesetter Personnel Services</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Pacesetter Personnel Services`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
