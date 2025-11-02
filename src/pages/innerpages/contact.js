import React from 'react';
import Loader from '../../components/common/Loader';
import SEOHead from '../../components/common/SEOHead';
import Footer from '../../components/innerpage/Footer';
import Navbar from '../../components/home1/Navbar';
import StartButton from '../../components/home1/StartButton';
import Header from '../../components/innerpage/contact/Header';
import ContactInfo from '../../components/innerpage/contact/ContactInfo';
import Map from '../../components/innerpage/contact/Map';
import ContactForm from '../../components/innerpage/contact/ContactForm';
import { Helmet } from 'react-helmet';

function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Einri Living - Best Interior Designers in Hyderabad | Free Consultation"
        description="Contact Einri Living for a free interior design consultation in Hyderabad. Visit us at Banjara Hills or call +91-40-1234-5678. Email hello@einriliving.com. Open Mon-Sat 10AM-7PM. Serving Telangana, AP, Bangalore & Goa."
        keywords="contact Einri Living, interior designer contact Hyderabad, free home design consultation, Banjara Hills interior designers, schedule interior design consultation, contact best interior designers Hyderabad"
        canonicalUrl="https://einriliving.com/contact"
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
      <body className="inner-pages-style1 contact-pg-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />

          <main>
            <ContactInfo />
            <Map />
            <ContactForm />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default ContactPage;
