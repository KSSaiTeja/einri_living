import React from 'react';
import Loader from '../../components/common/Loader';
import Footer from '../../components/innerpage/Footer';
import Navbar from '../../components/home1/Navbar';
import StartButton from '../../components/home1/StartButton';
import Project from '../../components/innerpage/single_project/Project';
import Testimonials from '../../components/innerpage/single_project/Testimonials';
import RelatedProjects from '../../components/innerpage/single_project/RelatedProjects';
import Chat from '../../components/innerpage/single_project/Chat';
import { Helmet } from 'react-helmet';

function SingleProject() {
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
      <body className="inner-pages-style1 s-project-pg-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <main>
            <Project />
            <Testimonials />
            <RelatedProjects />
            <Chat />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default SingleProject;
