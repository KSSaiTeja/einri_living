import React, { useState } from "react";

function Navbar() {
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
            href="#"
          >
            <img src="/home1/assets/img/logo.png" alt="" className="logo" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav-side">
              <a
                href="#"
                className={`icon side_menu_btn ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <div className="hamburger-line top-line"></div>
                <div className="hamburger-line bottom-line"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Integrated Menu Content - Part of Navbar */}
        <div className={`navbar_menu_content ${isMenuOpen ? "show" : ""}`}>
          {/* Click outside to close overlay */}
          <div className="navbar_menu_overlay" onClick={toggleMenu}></div>
          {/* Mobile Layout */}
          <div className="premium_mobile_layout">
            {/* Header */}
            <div className="premium_menu_header"></div>

            {/* Navigation Links */}
            <nav className="premium_main_navigation">
              <ul>
                <li>
                  <a href="#" className="premium_nav_link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="premium_nav_link">
                    Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="premium_nav_link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="premium_nav_link">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="premium_nav_link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="premium_nav_link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="premium_social_links">
              <a href="#" className="premium_social_link">
                Instagram
              </a>
              <a href="#" className="premium_social_link">
                Behance
              </a>
              <a href="#" className="premium_social_link">
                Twitter
              </a>
            </div>

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
                <p>Address Line One</p>
                <p>Some additional Address</p>
                <p>App 000</p>
              </div>
              <div className="premium_contact_details">
                <p>hello@einriliving.com</p>
                <p>+1 (555) 123-4567</p>
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
                    <p>Address Line One</p>
                    <p>Some additional Address</p>
                    <p>App 000</p>
                  </div>
                  <div className="premium_contact_details">
                    <p>hello@einriliving.com</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="premium_menu_right_side">
              {/* Our Team Heading */}
              <div className="premium_team_heading">
                <h3>Our Team</h3>
              </div>

              {/* Team Members Grid */}
              <div className="premium_team_members_grid">
                <div className="premium_team_member">
                  <img
                    src="/home1/assets/img/head_slide2.png"
                    alt="Team member 1"
                  />
                </div>
                <div className="premium_team_member">
                  <img
                    src="/home1/assets/img/head_slide1.jpg"
                    alt="Team member 2"
                  />
                </div>
                <div className="premium_team_member">
                  <img
                    src="/home1/assets/img/head_slide2.png"
                    alt="Team member 3"
                  />
                </div>
                <div className="premium_team_member">
                  <img
                    src="/home1/assets/img/head_slide1.jpg"
                    alt="Team member 4"
                  />
                </div>
                <div className="premium_team_member">
                  <img
                    src="/home1/assets/img/head_slide2.png"
                    alt="Team member 5"
                  />
                </div>
                <div className="premium_team_member">
                  <img
                    src="/home1/assets/img/head_slide1.jpg"
                    alt="Team member 6"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="premium_main_navigation">
                <ul>
                  <li>
                    <a href="#" className="premium_nav_link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="premium_nav_link">
                      Studio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="premium_nav_link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="premium_nav_link">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="premium_nav_link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="premium_nav_link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Social Links */}
              <div className="premium_social_links">
                <a href="#" className="premium_social_link">
                  Instagram
                </a>
                <a href="#" className="premium_social_link">
                  Behance
                </a>
                <a href="#" className="premium_social_link">
                  Twitter
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
