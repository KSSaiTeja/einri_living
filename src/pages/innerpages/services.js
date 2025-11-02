import React from 'react';
import Loader from '../../components/common/Loader';
import SEOHead from '../../components/common/SEOHead';
import Footer from '../../components/innerpage/Footer';
import Navbar from '../../components/home1/Navbar';
import StartButton from '../../components/home1/StartButton';
import Header from '../../components/innerpage/services/Header';
import Services from '../../components/innerpage/services/Services';
import Process from '../../components/innerpage/services/Process';
import Testimonials from '../../components/innerpage/services/Testimonials';
import { Helmet } from 'react-helmet';

function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Interior Design Services in Hyderabad | Residential & Commercial Design by Einri Living"
        description="Comprehensive interior design services in Hyderabad: Residential (2BHK, 3BHK, 4BHK, Villa), Commercial (Office, Retail, Hospitality), Complete Turnkey Solutions, 3D Design Visualization, Bespoke Furniture, Space Planning. Get free consultation from Einri Living."
        keywords="interior design services Hyderabad, residential interior design, commercial interior design, office interior design, home design services, turnkey interior solutions, 3D design visualization, bespoke furniture Hyderabad, space planning, interior renovation, home makeover Hyderabad"
        canonicalUrl="https://einriliving.com/services"
      />
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/home1/assets/css/home_1_style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet>
      <body className="inner-pages-style1 services-pg-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <Services />
            <Process />
            <Testimonials />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default ServicesPage;
