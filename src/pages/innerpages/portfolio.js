import React from 'react';
import Loader from '../../components/common/Loader';
import SEOHead from '../../components/common/SEOHead';
import Footer from '../../components/innerpage/Footer';
import Navbar from '../../components/home1/Navbar';
import StartButton from '../../components/home1/StartButton';
import Header from '../../components/innerpage/portfolio/Header';
import Cases from '../../components/innerpage/portfolio/Cases';
import LatestCases from '../../components/innerpage/portfolio/LatestCases';
import { Helmet } from 'react-helmet';

function PortfolioPage() {
  return (
    <>
      <SEOHead
        title="Interior Design Portfolio - Our Best Projects in Hyderabad | Einri Living"
        description="View Einri Living's award-winning interior design portfolio. Explore luxury residential projects, commercial spaces, and stunning home transformations in Hyderabad. 2BHK, 3BHK, 4BHK, villas & office interiors designed by top designers."
        keywords="interior design portfolio Hyderabad, home design examples, residential interior projects, commercial interior design portfolio, luxury home designs, before after home makeover, Einri Living projects, interior design case studies Hyderabad, best interior design photos"
        canonicalUrl="https://einriliving.com/portfolio"
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
      <body className="inner-pages-style1 portfolio-pg-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <Cases />
            <LatestCases />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default PortfolioPage;
