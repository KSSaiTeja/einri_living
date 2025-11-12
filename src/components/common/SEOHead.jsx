import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEOHead Component
 * Comprehensive SEO meta tags, structured data, and optimization
 * Following Google's best practices and Schema.org standards
 */

function SEOHead({
  // Page-specific data
  title = 'Einri Living - Best Interior Designers in Hyderabad | Luxury Home Design',
  description = 'Einri Living is the #1 interior design studio in Hyderabad. Transform your home with award-winning designers. Book your consultation today for luxury 2BHK, 3BHK, 4BHK & villa interior design.',
  keywords = 'best interior designers in Hyderabad, interior design Hyderabad, home interior designers Hyderabad, luxury interior design, modern home design Hyderabad, residential interior design, commercial interior design, Einri Living',
  canonicalUrl = 'https://einriliving.com',
  ogImage = 'https://einriliving.com/home1/assets/img/head_slide1.jpg',
  ogType = 'website',
  structuredData = null,
  twitterCard = 'summary_large_image',
  
  // Business specific data
  businessName = 'Einri Living',
  businessType = 'InteriorDesignService',
  addressLocality = 'Hyderabad',
  addressRegion = 'Telangana',
  postalCode = '500072',
  streetAddress = 'Plot No. 126, Gokul Plots, Road No. 3, Kukatpally, KPHB Phase 9',
  telephone = '+91-70931-96731',
  email = 'einricare@gmail.com',
  
  // SEO specific
  noindex = false,
  nofollow = false
}) {
  // Default structured data for LocalBusiness
  const resolvedStructuredData = structuredData || {
    '@context': 'https://schema.org',
    '@type': businessType,
    name: businessName,
    image: ogImage,
    url: canonicalUrl,
    telephone: telephone,
    email: email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: streetAddress,
      addressLocality: addressLocality,
      addressRegion: addressRegion,
      postalCode: postalCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.5056',
      longitude: '78.4067'
    },
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      'https://www.facebook.com/einriliving',
      'https://www.instagram.com/einri_living',
      'https://www.linkedin.com/company/einri-living',
      'https://www.youtube.com/@EinriLiving-Interiors'
    ],
    areaServed: [
      {
        '@type': 'State',
        name: 'Telangana'
      },
      {
        '@type': 'State',
        name: 'Andhra Pradesh'
      },
      {
        '@type': 'City',
        name: 'Bangalore'
      },
      {
        '@type': 'State',
        name: 'Goa'
      }
    ],
    serviceType: 'Interior Design Services',
    description: description
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Einri Living" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`} />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      
      {/* Language */}
      <html lang="en" />
      <meta httpEquiv="content-language" content="en" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${businessName} - ${title}`} />
      <meta property="og:site_name" content={businessName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Business specific */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.5056;78.4067" />
      <meta name="ICBM" content="17.5056, 78.4067" />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#689210" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#689210" />
      <meta name="apple-mobile-web-app-title" content={businessName} />
      
      {/* Additional SEO */}
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      
      {/* Structured Data */}
      {resolvedStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(resolvedStructuredData)}
        </script>
      )}
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://script.google.com" />
    </Helmet>
  );
}

export default SEOHead;

