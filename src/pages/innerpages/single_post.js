import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/common/Loader';
import Footer from '../../components/innerpage/Footer';
import Navbar from '../../components/home1/Navbar';
import StartButton from '../../components/home1/StartButton';
import Slider from '../../components/innerpage/single_post/Slider';
import Content from '../../components/innerpage/single_post/Content';
import { Helmet } from 'react-helmet';
import blogsData from '../../data/home1/blogs';

function SinglePost() {
  const { id } = useParams();
  const article = blogsData.find(item => item.id === parseInt(id)) || blogsData[0];
  
  return (
    <>
      <Helmet>
        <title>{article.title} - Einri Living Blog</title>
        <meta name="description" content={article.shortDescription} />
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
      <body className="inner-pages-style1 post-pg-style1">
        <Loader />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar useLogoDark={true} />
          <main>
            <Slider article={article} />
            <Content article={article} />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default SinglePost;
