import React from 'react';

function Testimonials() {
  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-18 text-uppercase lh-4">
              what clients say <br /> about us
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        "Einri Interiors brings a fresh, visionary approach to design—combining timeless elegance with bold creativity. They're not just designing spaces; they're redefining how we experience interiors. I truly believe they're set to change the interiors game altogether."
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Mr. Vijayanand & Mrs. Manohar
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Swagath Bliss, Nallagandla
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        "What sets Einri apart is their unique ability to balance art, functionality, and nature seamlessly. Their innovative style feels both contemporary and timeless, making them one of the most exciting upcoming design firms to watch."
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Mr. Anil & Mrs. Swathi
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Arcedo Imperio, Madinaguda
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        "Einri Interiors brings a fresh, visionary approach to design—combining timeless elegance with bold creativity. They're not just designing spaces; they're redefining how we experience interiors. I truly believe they're set to change the interiors game altogether."
                      </div>
                      <div className="author">
                        <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div>
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Luxury Homeowner
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Hyderabad
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marq-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#"> Timeless </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Elegant </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Ever-evolving </a>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
