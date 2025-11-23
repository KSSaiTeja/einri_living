import React from 'react';
import residentialData from '../../data/home1/projects/residential';
import commercialData from '../../data/home1/projects/commercial';
import hospitalityData from '../../data/home1/projects/hospitality';
function Projects() {
  const portfolioPdfUrl = "/home1/assets/Einri Living Portfolio Sept 25_20250428_141108_0000.pdf.pdf";
  return (
    <section id="transformations" className="tc-projects-style1">
      <div className="container">
        <div className="title mb-30 text-center">
          <h3 className="fsz-45 fw-600 mb-20 wow">Get a glimpse of <span className="block-mobile">Einri Living Homes</span></h3>
        </div>
        <div className="tabs-links mb-30">
          <div className="row align-items-center">
            <div className="col-lg-9" id="categories-tabs">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-proj1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj1"
                    type="button"
                  >
                    Residential Homes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-proj2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj2"
                    type="button"
                  >
                    Commercial Spaces
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-proj3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-proj3"
                    type="button"
                  >
                    Hospitality & Airbnb
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end" id="cta-button">
              <a
                href={portfolioPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="butn rounded-pill hover-bg-black bg-orange1 text-white"
              >
                <span>
                  View All Transformations
                  <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="projects" id="projects-images">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-proj1"
              role="tabpanel"
              aria-labelledby="pills-proj1-tab"
            >
              <div className="projects-content float_box_container">
                <div className="projects-slider">
                  <div className="swiper-wrapper">
                    {residentialData.map((item, i) => (
                      <div key={i} className="swiper-slide">
                        <div className="project-card">
                          <div className="img" role="presentation">
                            <img src={item.img} alt="" className="img-cover" draggable="false" />
                          </div>
                          <div className="info">
                            <div className="tags">
                              <span> {item.sub1} </span>
                              <span> {item.sub2} </span>
                            </div>
                            <h3 className="title"> {item.title} </h3>
                            <div className="text">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="float-cursor float_box">
                  Hold <br /> and Drag
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-proj2"
              role="tabpanel"
              aria-labelledby="pills-proj2-tab"
            >
              <div className="projects-content float_box_container">
                <div className="projects-slider">
                  <div className="swiper-wrapper">
                    {commercialData.map((item, i) => (
                      <div key={i} className="swiper-slide">
                        <div className="project-card">
                          <div className="img" role="presentation">
                            <img src={item.img} alt="" className="img-cover" draggable="false" />
                          </div>
                          <div className="info">
                            <div className="tags">
                              <span> {item.sub1} </span>
                              <span> {item.sub2} </span>
                            </div>
                            <h3 className="title"> {item.title} </h3>
                            <div className="text">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="float-cursor float_box">
                  Hold <br /> and Drag
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-proj3"
              role="tabpanel"
              aria-labelledby="pills-proj3-tab"
            >
              <div className="projects-content float_box_container">
                <div className="projects-slider">
                  <div className="swiper-wrapper">
                    {hospitalityData.map((item, i) => (
                      <div key={i} className="swiper-slide">
                        <div className="project-card">
                          <div className="img" role="presentation">
                            <img src={item.img} alt="" className="img-cover" draggable="false" />
                          </div>
                          <div className="info">
                            <div className="tags">
                              <span> {item.sub1} </span>
                              <span> {item.sub2} </span>
                            </div>
                            <h3 className="title"> {item.title} </h3>
                            <div className="text">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="float-cursor float_box">
                  Hold <br /> and Drag
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-cta-wrapper d-lg-none text-center mt-40">
          <a
            href={portfolioPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="butn rounded-pill hover-bg-black bg-orange1 text-white"
          >
            <span>
              View All Transformations
              <i className="small ms-1 ti-arrow-top-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
