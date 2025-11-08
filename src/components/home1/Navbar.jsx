import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ConsultationFormModal from "./ConsultationFormModal";

function Navbar({ useLogoDark = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close menu if open
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and page load, then scroll
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          scrollToSection(targetElement);
        }
      }, 500);
    } else {
      // We're already on home page, scroll directly
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        scrollToSection(targetElement);
      }
    }
  };

  const scrollToSection = (targetElement) => {
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
  };

  useEffect(() => {
    window.openEinriConsultationModal = () => {
      openModal();
    };

    return () => {
      if (window.openEinriConsultationModal) {
        delete window.openEinriConsultationModal;
      }
    };
  }, [openModal]);

  useEffect(() => {
    if (location.state && location.state.openConsultation) {
      openModal();
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate, openModal]);

  return (
    <>
      {/* Main Navbar with Integrated Menu */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x ${
          isMenuOpen ? "navbar-expanded" : ""
        }`}
      >
        <div className="container-fluid content">
          <a
            className={`navbar-brand ${isMenuOpen ? "logo-expanded" : ""}`}
            href="/"
          >
            {useLogoDark ? (
              <img src="/home1/assets/img/logo-dark.png" alt="Einri Living" className="logo" />
            ) : isMenuOpen ? (
              <img src="/home1/assets/img/logo-dark.png" alt="Einri Living" className="logo" />
            ) : (
              <img src="/home1/assets/img/logo.png" alt="Einri Living" className="logo" />
            )}
          </a>
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
          <div className="nav-side">
              <button onClick={openModal} className="navbar-cta-btn" type="button">
                Book Consultation Now
              </button>
              <button
                className={`icon side_menu_btn ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="hamburger-line top-line"></div>
                <div className="hamburger-line bottom-line"></div>
              </button>
            </div>
        </div>

        {/* Integrated Menu Content - Part of Navbar */}
        <div className={`navbar_menu_content ${isMenuOpen ? "show" : ""}`}>
          {/* Click outside to close overlay */}
          <div className="navbar_menu_overlay" onClick={toggleMenu}></div>
          {/* Mobile Layout */}
          <div className="premium_mobile_layout">
            {/* Navigation Links */}
            <nav className="premium_main_navigation">
              <ul>
                <li>
                  <a href="/" className="premium_nav_link" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#transformations" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#transformations')}>
                    Studio
                  </a>
                </li>
                <li>
                  <a href="#our-services" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#our-services')}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#testimonials')}>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#blog" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#blog')}>
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#consultation"
                    className="premium_nav_link"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="premium_social_links">
              <a href="http://www.youtube.com/@EinriLiving-Interiors" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href="https://www.instagram.com/einri_living?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/einriliving" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.linkedin.com/company/einri-living/" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>

            {/* Contact Information */}
            <div className="premium_contact_info">
              <div className="premium_address">
                <p>Plot No. 12, Road No. 1</p>
                <p>Banjara Hills, Hyderabad - 500034</p>
              </div>
              <div className="premium_contact_details">
                <p>einricare@gmail.com</p>
                <p>
                  <a href="tel:+917093196731">+91 70931 96731</a>
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="premium_desktop_layout">
            {/* Left Side */}
            <div className="premium_menu_left_side">
              <div className="premium_left_content">
                {/* Featured Image */}
                <div className="premium_featured_image">
                  <img
                    src="/home1/assets/img/head_slide1.jpg"
                    alt="Modern interior design"
                  />
                </div>

                {/* Contact Information */}
                <div className="premium_contact_info">
                  <div className="premium_address">
                    <p>Plot No. 12, Road No. 1</p>
                    <p>Banjara Hills, Hyderabad - 500034</p>
                  </div>
                  <div className="premium_contact_details">
                    <p>einricare@gmail.com</p>
                    <p>
                      <a href="tel:+917093196731">+91 70931 96731</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="premium_menu_right_side">
              {/* Navigation Links */}
              <nav className="premium_main_navigation">
                <ul>
                  <li>
                    <a href="/" className="premium_nav_link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#transformations" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#transformations')}>
                      Studio
                    </a>
                  </li>
                  <li>
                    <a href="#our-services" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#our-services')}>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#testimonials')}>
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="premium_nav_link" onClick={(e) => handleAnchorClick(e, '#blog')}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#consultation"
                      className="premium_nav_link"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal();
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Social Links */}
              <div className="premium_social_links">
                <a href="http://www.youtube.com/@EinriLiving-Interiors" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
                <a href="https://www.instagram.com/einri_living?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="https://www.facebook.com/einriliving" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/einri-living/" className="premium_social_link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Consultation Form Modal */}
      <ConsultationFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navbar;
