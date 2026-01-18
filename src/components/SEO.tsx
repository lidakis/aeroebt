import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  structuredData?: object | object[]
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://aeroebt.skydynamics.aero/og-image.jpg',
  ogType = 'website',
  structuredData
}: SEOProps) {
  const siteUrl = 'https://aeroebt.skydynamics.aero'
  const fullTitle = title.includes('AeroEBT') ? title : `${title} | AeroEBT - SkyDynamics`
  const fullCanonical = canonical ? `${siteUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}` : siteUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AeroEBT by SkyDynamics" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <>
          {Array.isArray(structuredData) ? (
            structuredData.map((data, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          ) : (
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          )}
        </>
      )}
    </Helmet>
  )
}
