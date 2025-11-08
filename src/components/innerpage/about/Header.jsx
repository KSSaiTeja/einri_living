import React from 'react';

function Header() {
  const handleConsultationClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && typeof window.openEinriConsultationModal === 'function') {
      window.openEinriConsultationModal();
    }
  };

  return (
    <header className="tc-header-preview">
      <div className="slider-card">
        <div className="img">
          <img
            src="/innerpages/assets/img/about/header1.jpg"
            alt=""
            className="img-cover"
          />
        </div>
        <div className="info">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-6">
                <div className="rotate-box" data-speed="1" data-lag="0.4">
                  <a
                    href="/#our-services"
                    className="rotate-circle fsz-35 rotate-text d-inline-block text-uppercase"
                  >
                    <svg className="textcircle" viewBox="0 0 500 500">
                      <defs>
                        <path
                          id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                        ></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#textcircle" textLength="900">
                          • Years of experience • since 1991
                        </textPath>
                      </text>
                    </svg>
                  </a>
                  <span className="num"> 25 </span>
                </div>
              </div>
            </div>
            <div className="row ps-lg-5">
              <div className="col-lg-6">
                <h5 className="fsz-30 mt-30 fw-400">
                  Architecture and Interior <br /> Html Theme
                </h5>
                <h1> About us </h1>
              </div>
            </div>
            <ul className="features-txt ps-lg-5">
              <li> Architecture Studio </li>
              <li> Interior design </li>
              <li> 3D modeling & Animation </li>
              <li> Decoration & Furniture </li>
              <li> High Performance </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="float-social-links">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/einri_living?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/einriliving"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/einri-living/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="http://www.youtube.com/@EinriLiving-Interiors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="float-icons">
        <ul>
          <li>
            <a href="/#transformations" aria-label="View transformations">
              <i className="fal fa-desktop"></i>
            </a>
          </li>
          <li>
            <a href="/#our-services" aria-label="Explore our services">
              <i className="fal fa-comments-alt"></i>
            </a>
          </li>
          <li>
            <a href="/#blog" aria-label="Read our blog">
              <i className="fal fa-file-alt"></i>
            </a>
          </li>
          <li>
            <a href="/#testimonials" aria-label="Read client testimonials">
              <i className="fal fa-comment-lines"></i>
            </a>
          </li>
          <li>
            <a href="/#consultation" onClick={handleConsultationClick} aria-label="Book a consultation">
              <i className="fal fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
