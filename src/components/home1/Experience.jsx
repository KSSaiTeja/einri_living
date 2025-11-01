import React from 'react';

function Experience() {
  return (
    <section className="tc-experience-style1 section-padding-x">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> artistry
              </h5>
              <h2 className="num"> 8 </h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img wow">
              <img
                src="/home1/assets/img/exp.png"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30">About Us</h3>
              <div className="text fsz-15 color-666">
              Einri Living studio is where art meets function to create timeless elegant interiors. Founded by people passionate about the transformative power of design, we bring your space to life through modern biophilic and class inspired spaces.Based in Hyderabad with Projects in Goa and Bangalore, we're growing day by day,Redefining the face of interiors with every move that we make.
              </div>
              <a
                href="/studio"
                className="butn rounded-pill mt-50 hover-bg-black bg-white"
              >
                <span>
                  Our Studio <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="rotate-txt justify-content-lg-end">
              <ul>
                <li>
                  <a href="mailto:hello@einriliving.com"> hello@einriliving.com </a>
                </li>
                <li>
                  <a href="tel:+919876543210"> +91 98765 43210 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line.png" alt="" className="c-line wow"/>
    </section>
  );
}

export default Experience;
