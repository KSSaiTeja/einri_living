import React from 'react';
import Loader from '../../components/common/Loader';
import SEOHead from '../../components/common/SEOHead';
import Header from '../../components/innerpage/about/Header';
import Navbar from '../../components/home1/Navbar';
import About from '../../components/innerpage/about/About';
import Process from '../../components/innerpage/about/Process';
import Projects from '../../components/innerpage/about/Projects';
import Awards from '../../components/innerpage/about/Awards';
import Footer from '../../components/innerpage/Footer';
import { Helmet } from 'react-helmet';

function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Einri Living - Award-Winning Interior Design Studio in Hyderabad | Our Story"
        description="Discover Einri Living's journey as Hyderabad's leading interior design studio. Meet our award-winning designers, explore our design philosophy, and learn why 127+ clients trust us for luxury home interiors. Based in Banjara Hills, serving Telangana, AP, Bangalore & Goa."
        keywords="about Einri Living, interior design studio Hyderabad, award-winning designers, design philosophy, home design team, luxury interior designers, residential design experts, Einri Living designers, interior design company Hyderabad"
        canonicalUrl="https://einriliving.com/about"
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
      <body className="inner-pages-style1 about-pg-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <About />
            <Process />
            <Projects />
            <Awards />
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AboutPage;
