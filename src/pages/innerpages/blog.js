import React from 'react';
import Loader from '../../components/common/Loader';
import Footer from '../../components/innerpage/Footer';
import Navbar from '../../components/home1/Navbar';
import Header from '../../components/innerpage/blog/Header';
import Slider from '../../components/innerpage/blog/Slider';
import LatestPosts from '../../components/innerpage/blog/LatestPosts';
import FilterPosts from '../../components/innerpage/blog/FilterPosts';
import StartButton from '../../components/home1/StartButton';
import { Helmet } from 'react-helmet';

function BlogPage() {
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
        <script src="/common/assets/js/lib/mixitup.min.js"></script>
      </Helmet>
      <body className="inner-pages-style1 blog-pg-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar useLogoDark={true} />
          <Header />
          <main>
            <Slider />
            <LatestPosts />
            <FilterPosts />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default BlogPage;
