import React from 'react';
import data from '../../data/home1/blogs';
import { Link } from 'react-router-dom';

function Blog() {
  // Show only first 6 articles on homepage
  const displayData = data.slice(0, 6);
  
  return (
    <section className="tc-blog-style1">
      <div className="container">
        <div className="title mb-80 text-center">
          <h3 className="fsz-45 fw-600 mb-30 wow">Stay Updated with Trending Home Interior Designs!</h3>
          <div className="text-center">
            <Link
              to="/blog"
              className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
            >
              <span>
                View All Articles <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="blog-slider position-relative overflow-hidden">
          <div className="swiper-wrapper">
            {displayData.map((item, i) => (
              <div key={i} className="swiper-slide">
                <div className="blog-card">
                  <div className="img">
                    <img src={item.img} alt={item.title} className="img-cover" />
                  </div>
                  <div className="info">
                    <div className="date">
                      <div className="num fsz-45 mb-2"> {item.num} </div>
                      <small className="fsz-12 text-uppercase color-666">
                        {item.history.split('<br />')[0]} <br />{' '}
                        {item.history.split('<br />')[1]}
                      </small>
                    </div>
                    <div className="cont">
                      <Link
                        to={`/blog/single-post/${item.id}`}
                        className="title d-block fsz-24 hover-orange1 mb-15 fw-600"
                      >
                        {item.title}
                      </Link>
                      <small className="fsz-12 color-orange1">
                        {item.subTitle}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </section>
  );
}

export default Blog;
