import React, { useState } from "react";

function Navbar({ useLogoDark = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <a href="/contact" className="navbar-cta-btn">
                Book Consultation Now
              </a>
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
                  <a href="/" className="premium_nav_link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="premium_nav_link">
                    Studio
                  </a>
                </li>
                <li>
                  <a href="/services" className="premium_nav_link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="premium_nav_link">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/blog" className="premium_nav_link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="premium_nav_link">
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
                <p>hello@einriliving.com</p>
                <p>+91 40 1234 5678</p>
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
                    <p>hello@einriliving.com</p>
                    <p>+91 40 1234 5678</p>
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
                    <a href="/about" className="premium_nav_link">
                      Studio
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="premium_nav_link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="premium_nav_link">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="premium_nav_link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="premium_nav_link">
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
    </>
  );
}

export default Navbar;
