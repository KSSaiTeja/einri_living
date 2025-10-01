import React from 'react';
import Loader from '../components/common/Loader';
import Menu from '../components/home1/Menu';
import Navbar from '../components/home1/Navbar';
import Header from '../components/home1/Header';
import Experience from '../components/home1/Experience';
import Services from '../components/home1/Services';
import Process from '../components/home1/Process';
import Awards from '../components/home1/Awards';
import Projects from '../components/home1/Projects';
import Testimonials from '../components/home1/Testimonials';
import Team from '../components/home1/Team';
import Blog from '../components/home1/Blog';
import Chat from '../components/home1/Chat';
import Footer from '../components/home1/Footer';
import { Helmet } from 'react-helmet';

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
  return (
    <>
      <Helmet>
        <title>Einri Living - Interior Design Studio | Art in the Heart of Your Abode</title>
        <meta name="description" content="Einri Living transforms spaces into living, breathing masterpieces with our signature fusion of modern contemporary design and subtle classic undertones. Based in Hyderabad, serving Telangana, Andhra Pradesh, Goa & Bangalore." />
        <meta name="keywords" content="interior design, home design, art integration, biophilic design, bespoke furniture, Hyderabad, Telangana, Andhra Pradesh, Goa, Bangalore, Einri Living" />
        <meta name="author" content="KSSAITEJA" />
        <meta property="og:title" content="Einri Living - Interior Design Studio" />
        <meta property="og:description" content="Art in the heart of your abode. Transform your space with timeless elegance and artistic vision." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://einriliving.com" />
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
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <Experience />
            <Services />
            <Process />
            <Projects />
            <Testimonials />
            <Awards />
            <Team />
            <Blog />
            <Chat />
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default EinriLiving;
