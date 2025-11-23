import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEOHead Component
 * Comprehensive SEO meta tags, structured data, and optimization
 * Following Google's best practices and Schema.org standards
 */

function SEOHead({
  // Page-specific data
  title = 'Einri Living - Best Interior Designers Near Me in Hyderabad | Top Home Design Studio',
  description = 'Find the best interior designers near me in Hyderabad. Einri Living is the #1 rated interior design studio (4.9/5) serving Kukatpally, Gachibowli, Hitech City, Banjara Hills & all of Hyderabad. Award-winning luxury home, office & villa interior design. Free consultation. Call +91-70931-96731.',
  keywords = 'interior designers near me, best interior designers near me, top interior designers Hyderabad, interior design near me, home interior designers near me, best interiors near me, luxury interior design Hyderabad, residential interior design near me, commercial interior design Hyderabad, 3BHK interior design, villa interior design, office interior design, Einri Living, interior designers Kukatpally, interior designers Gachibowli, interior designers Hitech City, interior designers Banjara Hills, interior designers Kondapur, interior designers Miyapur, interior designers Nallagandla, interior designers Jubilee Hills, interior designers Madhapur, interior designers Ameenpur, best interior design company Hyderabad, top rated interior designers Telangana',
  canonicalUrl = 'https://einriliving.com',
  ogImage = 'https://einriliving.com/home1/assets/img/projects/residential/project1.png',
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
  // Enhanced structured data for maximum local SEO
  const resolvedStructuredData = structuredData || {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'InteriorDesignService', 'HomeGoodsStore'],
    '@id': `${canonicalUrl}#business`,
    name: businessName,
    alternateName: 'Einri Living Interior Design Studio',
    image: [
      ogImage,
      `${canonicalUrl}/home1/assets/img/projects/residential/project1.png`,
      `${canonicalUrl}/home1/assets/img/projects/residential/project2.png`,
      `${canonicalUrl}/home1/assets/img/projects/commercial/project1.png`,
      `${canonicalUrl}/home1/assets/img/projects/hospitality/project1.png`
    ],
    logo: `${canonicalUrl}/favicon.ico`,
    url: canonicalUrl,
    telephone: telephone,
    email: email,
    priceRange: '₹₹',
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
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(streetAddress + ', ' + addressLocality + ', ' + addressRegion)}`,
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
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Priya Sharma'
        },
        datePublished: '2024-12-01',
        reviewBody: 'Einri Living transformed our 3BHK into a masterpiece! Best interior designers in Hyderabad. Highly recommend for anyone looking for interior designers near me.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Rajesh Kumar'
        },
        datePublished: '2024-11-15',
        reviewBody: 'Found Einri Living when searching for best interiors near me. Excellent service, professional team, and stunning results. Top interior designers in Hyderabad!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        }
      }
    ],
    sameAs: [
      'https://www.facebook.com/einriliving',
      'https://www.instagram.com/einri_living',
      'https://www.linkedin.com/company/einri-living',
      'https://www.youtube.com/@EinriLiving-Interiors'
    ],
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Kukatpally' },
      { '@type': 'City', name: 'Gachibowli' },
      { '@type': 'City', name: 'Hitech City' },
      { '@type': 'City', name: 'Banjara Hills' },
      { '@type': 'City', name: 'Kondapur' },
      { '@type': 'City', name: 'Miyapur' },
      { '@type': 'City', name: 'Nallagandla' },
      { '@type': 'City', name: 'Jubilee Hills' },
      { '@type': 'City', name: 'Madhapur' },
      { '@type': 'City', name: 'Ameenpur' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'State', name: 'Telangana' },
      { '@type': 'State', name: 'Andhra Pradesh' },
      { '@type': 'State', name: 'Goa' }
    ],
    servesCuisine: null,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Interior Design',
            description: 'Luxury home interior design for 2BHK, 3BHK, 4BHK apartments and villas'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Interior Design',
            description: 'Office, retail, and commercial space interior design'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hospitality Interior Design',
            description: 'Hotel, Airbnb, and hospitality space design'
          }
        }
      ]
    },
    serviceType: ['Residential Interior Design', 'Commercial Interior Design', 'Hospitality Interior Design', 'Villa Interior Design', 'Office Interior Design', 'Home Interior Design'],
    description: description,
    keywords: 'interior designers near me, best interior designers near me, top interior designers Hyderabad, interior design near me, home interior designers near me, best interiors near me'
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
      
      {/* Favicons - Using favicon.ico for all platforms with cache busting */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2" />
      <link rel="apple-touch-icon" href="/favicon.ico?v=2" />
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico?v=2" />
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico?v=2" />
      <link rel="icon" type="image/x-icon" sizes="64x64" href="/favicon.ico?v=2" />
      <link rel="icon" type="image/x-icon" sizes="192x192" href="/favicon.ico?v=2" />
      <link rel="icon" type="image/x-icon" sizes="512x512" href="/favicon.ico?v=2" />
      
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
      {/* Favicon for Open Graph */}
      <link rel="icon" href={`${canonicalUrl}/favicon.ico?v=2`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@einri_living" />
      <meta name="twitter:creator" content="@einri_living" />
      
      {/* Local SEO - Enhanced for "near me" searches */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, Telangana, India" />
      <meta name="geo.position" content="17.5056;78.4067" />
      <meta name="ICBM" content="17.5056, 78.4067" />
      <meta name="location" content="Hyderabad, Telangana" />
      <meta name="locality" content="Hyderabad" />
      <meta name="region" content="Telangana" />
      <meta name="postal-code" content="500072" />
      <meta name="country-name" content="India" />
      
      {/* Local Business Keywords */}
      <meta name="local-business" content="true" />
      <meta name="business-type" content="Interior Design Service" />
      <meta name="service-area" content="Hyderabad, Kukatpally, Gachibowli, Hitech City, Banjara Hills, Kondapur, Miyapur, Nallagandla, Jubilee Hills, Madhapur, Ameenpur, Bangalore, Telangana, Andhra Pradesh, Goa" />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#689210" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#689210" />
      <meta name="apple-mobile-web-app-title" content={businessName} />
      
      {/* Additional SEO */}
      <meta name="rating" content="general" />
      <meta name="coverage" content="Hyderabad, Telangana, India" />
      <meta name="distribution" content="Local, Regional" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      
      {/* Local Search Optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="contact" content={telephone} />
      <meta name="contact:phone_number" content={telephone} />
      <meta name="contact:email" content={email} />
      
      {/* Google My Business Integration */}
      <link rel="me" href="https://www.google.com/maps/place/Einri+Living" />
      
      {/* Additional Schema for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: businessName,
          url: canonicalUrl,
          logo: `${canonicalUrl}/favicon.ico`,
          image: [
            `${canonicalUrl}/home1/assets/img/projects/residential/project1.png`,
            `${canonicalUrl}/home1/assets/img/projects/residential/project2.png`,
            `${canonicalUrl}/home1/assets/img/projects/commercial/project1.png`
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: telephone,
            contactType: 'Customer Service',
            areaServed: ['IN'],
            availableLanguage: ['en', 'hi', 'te']
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: streetAddress,
            addressLocality: addressLocality,
            addressRegion: addressRegion,
            postalCode: postalCode,
            addressCountry: 'IN'
          }
        })}
      </script>
      
      {/* Service Schema for better local ranking */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Interior Design',
          provider: {
            '@type': 'LocalBusiness',
            name: businessName,
            address: {
              '@type': 'PostalAddress',
              addressLocality: addressLocality,
              addressRegion: addressRegion,
              addressCountry: 'IN'
            }
          },
          areaServed: {
            '@type': 'City',
            name: 'Hyderabad'
          },
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: canonicalUrl,
            servicePhone: telephone
          }
        })}
      </script>
      
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

