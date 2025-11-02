'use client';
import mixitup from 'mixitup';
import data from '../../../data/innerpages/blog/filter';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function FilterPosts() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const mixitupContainerRef = useRef(null);

  // Get unique categories from data
  const categories = useMemo(() => {
    const cats = data.map(item => item.category);
    return ['All', ...new Set(cats)];
  }, []);

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

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="tc-filter-posts-style1">
      <div className="container">
        <div className="filter-row wow fadeInUp slow" data-wow-delay="0.2s">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="filter">
                <div className="links">
                  {categories.map((cat, i) => (
                    cat === 'All' ? (
                      <a
                        key={i}
                        onClick={() => handleFilterClick('All')}
                        href="#0"
                        className={`filter-btn ${
                          activeFilter === 'All' ? 'active' : ''
                        }`}
                        data-filter="*"
                      >
                        {cat}
                      </a>
                    ) : (
                      <a
                        key={i}
                        onClick={() => handleFilterClick(cat)}
                        href="#0"
                        className={`filter-btn ${
                          activeFilter === cat ? 'active' : ''
                        }`}
                        data-filter={`.${cat.replace(/\s+/g, '')}`}
                      >
                        {cat}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5 mt-lg-0">
              <div className="search-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search in blog"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="button">
                  <i className="fal fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="posts-content">
          <div className="row mixitup" ref={mixitupContainerRef}>
            {filteredData.map((item, i) => (
              <div key={i} className={`col-lg-4 mix-item ${item.category.replace(/\s+/g, '')}`}>
                <div
                  className="post-card mt-70 wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <Link
                    to={`/blog/single-post/${item.id}`}
                    className="img th-280 radius-7 overflow-hidden d-block"
                  >
                    <img src={item.img} alt={item.title} className="img-cover" />
                  </Link>
                  <div className="info pt-30">
                    <div className="tags color-666 text-uppercase fsz-12">
                      <span className="color-orange1">
                        {item.subTitle}
                      </span>
                      <span className="circle icon-3 bg-666 rounded-circle mx-3"></span>
                      <span> {item.history} </span>
                    </div>
                    <h3 className="title mt-15">
                      <Link to={`/blog/single-post/${item.id}`} className="hover-orange1 fsz-24">
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterPosts;
