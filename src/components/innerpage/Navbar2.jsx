import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleConsultationClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (typeof window !== 'undefined' && typeof window.openEinriConsultationModal === 'function') {
      window.openEinriConsultationModal();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light inner-navbar-style1">
      <div className="container-fluid">
        <Link className="navbar-brand me-lg-5" to="/">
          <img src="/home1/assets/img/logo-dark.png" alt="Einri Living" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Studio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Cases
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                News
              </Link>
            </li>
            <li className="nav-item">
              <a href="#consultation" className="nav-link" onClick={handleConsultationClick}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-side">
            <a href="#" className="icon ms-3">
              <span> EN </span>
            </a>
            <a href="#" className="icon ms-3">
              <span> FR </span>
            </a>
            <a href="#" className="icon ms-5 fsz-21 search_btn">
              <span>
                {' '}
                <i className="la la-search"></i>{' '}
              </span>
            </a>
            <div className="nav-search-box">
              <div className="form-group">
                <input type="text" placeholder="search word" />
                <button>
                  {' '}
                  <i className="fal fa-search"></i>{' '}
                </button>
              </div>
            </div>
            <a
              href="#"
              className="icon ms-3 side_menu_btn fsz-21 active d-none d-lg-inline-block"
            >
              <span>
                {' '}
                <i className="la la-grip-lines"></i>{' '}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
