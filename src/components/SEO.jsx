import React from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_TITLE = 'Budlee AI | AI Learning Companion & Tutor for CBSE & State Boards';
const DEFAULT_DESCRIPTION = 'Budlee AI helps students in Grades 6-10 master Science, Physics, Chemistry, and Biology. Aligned with CBSE and State syllabuses with personalized AI tutoring and step-by-step guidance.';
const BASE_URL = 'https://budlee.ai';
const DEFAULT_IMAGE = `${BASE_URL}/images/hero.webp`;

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema = null,
}) => {
  const fullTitle = title ? (title.includes('Budlee AI') ? title : `${title} | Budlee AI`) : DEFAULT_TITLE;
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${BASE_URL}${canonical}`
    : BASE_URL;

  const imageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}/${ogImage.replace(/^\//, '')}`;

  return (
    <Helmet>
      {/* Title & Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data if provided */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
