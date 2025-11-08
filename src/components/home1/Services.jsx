import React from 'react';

function Services({ onOpenConsultationForm }) {
  return (
    <section id="our-services" className="tc-services-style1">
      <div className="content section-padding section-padding-x">
        <div className="container">
          <div className="title mb-40 text-center">
            <h3 className="fsz-45 fw-600 mb-30 wow">Our Services</h3>
          </div>
          <div className="services">
            <div className="row">
              <div className="col-lg-3">
                <div
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="la la-hard-hat"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">3D Visualizations That Bring Ideas to Life</h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser1.png"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Experience your space before it's built with detailed 3D renders that capture light, texture, and emotion perfectly.
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <i className="la la-bezier-curve"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">Residential Turnkey Design & Execution</h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser2.png"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    From concept to completion, we design and deliver homes that reflect your story effortlessly managed, beautifully finished.
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="service-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="la la-bed"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">Furniture & Furnishing Solutions</h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser3.png"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    Beyond design, we curate and customize furniture, décor, and styling to complete your space with harmony and detail.
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="service-card mt-150 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon">
                    <i className="la la-comments"></i>
                  </div>
                  <h5 className="fsz-24 mb-20">
                    Commercial Space Design
                  </h5>
                  <div className="img">
                    <img
                      src="/home1/assets/img/services/ser4.png"
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="text color-666 mt-50">
                    We craft functional yet inspiring commercial environments — from offices to studios blending aesthetics with purpose.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={onOpenConsultationForm}
              className="butn rounded-pill mt-50 hover-bg-black bg-orange1 text-white"
              type="button"
            >
              <span>
                Start Your Journey
                <i className="small ms-1 ti-arrow-top-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="ser-img">
        <img src="/home1/assets/img/services/ser.png" alt="" />
      </div>
    </section>
  );
}

export default Services;
