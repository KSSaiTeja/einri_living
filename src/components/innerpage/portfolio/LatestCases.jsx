'use client';
import React, { useEffect, useRef, useState } from 'react';
import data from '../../../data/innerpages/portfolio/latestcases';
import mixitup from 'mixitup';
function LatestCases() {
  const [activeFilter, setActiveFilter] = useState('All');
  const mixitupContainerRef = useRef(null);
  const servicesHref = '/#our-services';
  const transformationsHref = '/#transformations';

  useEffect(() => {
    const initializeMixitup = () => {
      mixitup(mixitupContainerRef.current, {
        load: {
          sort: 'order:asc',
        },
        animation: {
          duration: 700,
        },
        classNames: {
          block: 'filter',
          elementFilter: 'filter-btn',
          elementSort: 'sort-btn',
        },
        selectors: {
          target: '.mix-item',
        },
      });
    };

    initializeMixitup();
  }, []);
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    // Remove 'active' class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add 'active' class to the clicked filter button, if it exists
    const clickedButton = document.querySelector(`[data-filter="${filter}"]`);
    if (clickedButton) {
      clickedButton.classList.add('active');
    }
  };

  return (
    <section className="tc-latest-cases-style1">
      <div className="container">
        <div className="content">
          <h3 className="fsz-45 text-capitalize mb-90 js-splittext-lines">
            Latest Cases
          </h3>
          <div className="cases">
            <div
              className="filter mb-60 wow fadeInUp slow"
              data-wow-delay="0.2s"
            >
              <div className="links">
                <button
                  type="button"
                  onClick={() => handleFilterClick('All')}
                  className={`filter-btn ${
                    activeFilter === 'All' ? 'active' : ''
                  }`}
                  data-filter="*"
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterClick('Architecture')}
                  className={`filter-btn ${
                    activeFilter === 'Architecture' ? 'active' : ''
                  }`}
                  data-filter=".Architecture"
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterClick('Interior')}
                  className={`filter-btn ${
                    activeFilter === 'Interior' ? 'active' : ''
                  }`}
                  data-filter=".Interior"
                >
                  Interior
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterClick('Landscape')}
                  className={`filter-btn ${
                    activeFilter === 'Landscape' ? 'active' : ''
                  }`}
                  data-filter=".Landscape"
                >
                  Landscape
                </button>
                <button
                  type="button"
                  onClick={() => handleFilterClick('Furniture')}
                  className={`filter-btn ${
                    activeFilter === 'Furniture' ? 'active' : ''
                  }`}
                  data-filter=".Furniture"
                >
                  Furniture
                </button>
              </div>
            </div>
            <div
              className="cases-content wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row mixitup" ref={mixitupContainerRef}>
                {data.map((item, i) => (
                  <div key={i} className={`col-lg-4 mix-item ${item.subTitle}`}>
                    <div className="case-card">
                      <div className="img" role="presentation">
                        <img src={item.img} alt="" className="img-cover" />
                      </div>
                      <div className="info">
                        <div className="tags mb-30">
                          <a href={servicesHref}> {item.subTitle.split('<br />')[0]} </a>
                          {item.subTitle.split('<br />')[1] && (
                            <a href={servicesHref}> {item.subTitle.split('<br />')[1]} </a>
                          )}
                        </div>
                        <h3 className="title fsz-35 mb-20">
                          <a href={transformationsHref} className="hover-orange1">
                            {item.title}
                          </a>
                        </h3>
                        <div className="text color-666">
                          {item.desc.split('<br />')[0]}
                          <br /> {item.desc.split('<br />')[1]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button type="button" className="page-link" aria-label="Previous page">
                      <i className="fal fa-chevron-left"></i>
                    </button>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link active">
                      1
                    </button>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link">
                      2
                    </button>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link">
                      3
                    </button>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link" aria-label="More pages">
                      ...
                    </button>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link">
                      15
                    </button>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link" aria-label="Next page">
                      <i className="fal fa-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestCases;
