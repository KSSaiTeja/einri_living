import React from "react";
import data from "../../data/home1/header-slider";

function Header() {
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Use GSAP ScrollSmoother if available
      if (window.smoother && window.smoother.scrollTo) {
        try {
          const offset = targetElement.offsetTop - 100; // Account for navbar height
          window.smoother.scrollTo(offset, true);
        } catch(e) {
          // Fallback to native scroll
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Fallback to native smooth scroll
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <header className="tc-header-style1">
      <div className="header-slider">
        <div className="swiper-wrapper">
          {data.map((item, i) => (
            <div key={i} className="swiper-slide">
              <div className="slider-card">
                <div className="img">
                  <img src={item.img} alt="" className="img-cover" />
                </div>
                <div className="info section-padding-x pb-70">
                  <div className="row align-items-end gx-5">
                    <div className="col-lg-6 offset-lg-2">
                      <h1 data-swiper-parallax="-2000" className="js-title">
                        {item.title}
                      </h1>
                      <h5>{item.subTitle}</h5>
                    </div>
                    <div className="col-lg-3 mt-4">
                      <div className="cont pb-30">
                        <div className="text fsz-17 fw-300 lh-4">
                          {item.desc}
                        </div>
                        <a
                          href="#our-services"
                          className="butn border rounded-pill mt-60 hover-bg-white"
                          onClick={(e) => handleAnchorClick(e, '#our-services')}
                        >
                          <span>
                            Our Services
                            <i className="small ms-1 ti-arrow-top-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
