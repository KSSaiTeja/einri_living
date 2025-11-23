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
import ConsultationFormModal from "../components/home1/ConsultationFormModal";

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
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Show offer modal after 3 seconds on every page load/refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOfferCTAClick = () => {
    setShowOffer(false);
    // Open consultation form modal
    setIsConsultationModalOpen(true);
  };

  return (
    <>
      <SEOHead
        title="Interior Designers Near Me in Hyderabad | Best Interior Design Studio - Einri Living"
        description="Looking for interior designers near me in Hyderabad? Einri Living is the #1 rated (4.9/5) interior design studio serving Kukatpally, Gachibowli, Hitech City, Banjara Hills, Kondapur, Miyapur & all of Hyderabad. Award-winning luxury home, office & villa interior design. Free consultation. Call +91-70931-96731. Best interiors near me - trusted by 127+ clients."
        keywords="interior designers near me, best interior designers near me, top interior designers Hyderabad, interior design near me, home interior designers near me, best interiors near me, luxury interior design Hyderabad, residential interior design near me, commercial interior design Hyderabad, 3BHK interior design, villa interior design, office interior design, Einri Living, interior designers Kukatpally, interior designers Gachibowli, interior designers Hitech City, interior designers Banjara Hills, interior designers Kondapur, interior designers Miyapur, interior designers Nallagandla, interior designers Jubilee Hills, interior designers Madhapur, interior designers Ameenpur, best interior design company Hyderabad, top rated interior designers Telangana, interior design studio near me, home decorators near me, interior decorators near me Hyderabad"
        canonicalUrl="https://einriliving.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'InteriorDesignService',
          name: 'Einri Living - Interior Design Studio',
          image: 'https://einriliving.com/home1/assets/img/projects/residential/project1.png',
          url: 'https://einriliving.com',
          telephone: '+91-70931-96731',
          email: 'einricare@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Plot No. 126, Gokul Plots, Road No. 3, Kukatpally, KPHB Phase 9',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500072',
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
            <Services onOpenConsultationForm={() => setIsConsultationModalOpen(true)} />
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

        {/* Consultation Form Modal */}
        <ConsultationFormModal 
          isOpen={isConsultationModalOpen}
          onClose={() => setIsConsultationModalOpen(false)}
        />
      </body>
    </>
  );
}

export default EinriLiving;
