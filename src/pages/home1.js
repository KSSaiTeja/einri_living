import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../components/common/Loader";
import SEOHead from "../components/common/SEOHead";
import Navbar from "../components/home1/Navbar";
import Header from "../components/home1/Header";
import Experience from "../components/home1/Experience";
import Services from "../components/home1/Services";
import Process from "../components/home1/Process";
import FAQ from "../components/home1/FAQ";
import Projects from "../components/home1/Projects";
import Testimonials from "../components/home1/Testimonials";
import Team from "../components/home1/Team";
import Blog from "../components/home1/Blog";
import Chat from "../components/home1/Chat";
import Footer from "../components/home1/Footer";
import YearEndOfferModal from "../components/home1/YearEndOfferModal";

/**
 * Einri Living - Main Website
 *
 * Developed by: KSSAITEJA
 * Designer: KSSAITEJA
 *
 * Interior Design Studio Website
 * "Art in the heart of your abode"
 *
 * Based in: Hyderabad
 * Serving: Telangana, Andhra Pradesh, Goa & Bangalore
 */

function EinriLiving() {
  const [showOffer, setShowOffer] = useState(false);

  // Show offer modal after 3 seconds on every page load/refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOfferCTAClick = () => {
    setShowOffer(false);
    // Will implement later based on user requirements
  };

  return (
    <>
      <SEOHead
        title="Einri Living - Best Interior Designers in Hyderabad | Award-Winning Luxury Home Design Studio"
        description="Einri Living is the #1 interior design studio in Hyderabad. Transform your 2BHK, 3BHK, 4BHK, villa & office spaces with award-winning designers. Book your free consultation today for luxury modern contemporary interiors. Rated 4.9/5 by 127+ clients across Telangana, AP, Bangalore & Goa."
        keywords="best interior designers in Hyderabad, luxury interior design Hyderabad, home interior designers, modern home design, residential interior design Hyderabad, commercial interior design, 3BHK interior design, villa interior design Hyderabad, Einri Living, top interior designers Bangalore, interior design Goa, award-winning interior designers Telangana"
        canonicalUrl="https://einriliving.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'InteriorDesignService',
          name: 'Einri Living - Interior Design Studio',
          image: 'https://einriliving.com/home1/assets/img/head_slide1.jpg',
          url: 'https://einriliving.com',
          telephone: '+91-40-1234-5678',
          email: 'hello@einriliving.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Plot No. 12, Road No. 1, Banjara Hills',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500034',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '17.4254',
            longitude: '78.4495'
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
          review: [
            {
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: 'Priya Sharma'
              },
              datePublished: '2024-12-01',
              reviewBody: 'Einri Living transformed our 3BHK into a masterpiece! Best interior designers in Hyderabad.',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              }
            }
          ],
          areaServed: [
            { '@type': 'State', name: 'Telangana' },
            { '@type': 'State', name: 'Andhra Pradesh' },
            { '@type': 'City', name: 'Bangalore' },
            { '@type': 'State', name: 'Goa' }
          ],
          serviceType: 'Residential & Commercial Interior Design',
          description: 'Einri Living is the best interior design studio in Hyderabad offering luxury home design, office interiors, and bespoke furniture solutions.'
        }}
      />
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/home1/assets/css/home_1_style.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/home1/assets/js/home_1_scripts.js"></script>
      </Helmet>
      <body className="home-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <Experience />
            <Services />
            <Process />
            <Projects />
            <Testimonials />
            <FAQ />
            <Team />
            <Blog />
            <Chat />
          </main>
          <Footer />
        </div>

        {/* Year-End Offer Modal */}
        <YearEndOfferModal 
          isOpen={showOffer} 
          onClose={() => setShowOffer(false)}
          onCTAClick={handleOfferCTAClick}
        />
      </body>
    </>
  );
}

export default EinriLiving;
