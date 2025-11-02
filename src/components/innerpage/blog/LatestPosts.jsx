import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../../../data/home1/blogs';

function LatestPosts() {
  // Show latest 3 articles
  const latestArticles = blogsData.slice(0, 3);
  
  return (
    <section className="tc-latest-posts-style1">
      <div className="container">
        <div className="content">
          <div className="title mb-70 wow fadeInUp slow" data-wow-delay="0.2s">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="fsz-45 text-capitalize"> Latest Articles </h3>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="arrows me-lg-0 ms-lg-auto">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="posts-slider wow fadeInUp slow" data-wow-delay="0.2s">
            <div className="swiper-wrapper">
              {latestArticles.map((article, i) => (
                <div key={i} className="swiper-slide">
                  <div className="post-card">
                    <Link
                      to={`/blog/single-post/${article.id}`}
                      className="img radius-7 overflow-hidden th-400 d-block"
                    >
                      <img src={article.img} alt={article.title} className="img-cover" />
                    </Link>
                    <div className="info pt-50">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="date">
                            <h2 className="num fsz-45 fw-400 mb-10"> {article.num} </h2>
                            <p className="txt fsz-12 color-666 text-uppercase">
                              {article.history.split('<br />')[0]} <br />{' '}
                              {article.history.split('<br />')[1]}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="cont">
                            <h3 className="fsz-24">
                              <Link to={`/blog/single-post/${article.id}`} className="hover-orange1">
                                {article.title}
                              </Link>
                            </h3>
                            <div className="tags fsz-12 color-orange1 text-uppercase mt-20">
                              <span> {article.category} </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
