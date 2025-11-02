import React from 'react';
import Loader from '../../components/common/Loader';
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
