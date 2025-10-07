import React from "react";

function Menu() {
  return (
    <>
      {/* Overlay */}
      <div className="modern_menu_overlay"></div>

      {/* Menu Content */}
      <div className="modern_menu_container">
        {/* Mobile Layout */}
        <div className="mobile_menu_layout">
          {/* Header */}
          <div className="menu_header">
            <div className="menu_logo">
              <img src="/home1/assets/img/logo.png" alt="EinriLiving" />
            </div>
            <button className="menu_close_btn">
              <i className="la la-times"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="main_navigation">
            <ul>
              <li>
                <a href="#" className="nav_link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav_link">
                  Studio
                </a>
              </li>
              <li>
                <a href="#" className="nav_link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="nav_link">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="nav_link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav_link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="social_links">
            <a href="#" className="social_link">
              Instagram
            </a>
            <a href="#" className="social_link">
              Behance
            </a>
            <a href="#" className="social_link">
              Twitter
            </a>
          </div>

          {/* Featured Image */}
          <div className="featured_image">
            <img
              src="/home1/assets/img/head_slide1.jpg"
              alt="Modern interior design"
            />
          </div>

          {/* Contact Information */}
          <div className="contact_info">
            <div className="address">
              <p>Address Line One</p>
              <p>Some additional Address</p>
              <p>App 000</p>
            </div>
            <div className="contact_details">
              <p>hello@einriliving.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="desktop_menu_layout">
          {/* Left Side - Image and Contact */}
          <div className="menu_left_side">
            <div className="menu_logo">
              <img src="/home1/assets/img/logo.png" alt="EinriLiving" />
            </div>

            <div className="left_content">
              {/* Featured Image */}
              <div className="featured_image">
                <img
                  src="/home1/assets/img/head_slide1.jpg"
                  alt="Modern interior design"
                />
              </div>

              {/* Contact Information */}
              <div className="contact_info">
                <div className="address">
                  <p>Address Line One</p>
                  <p>Some additional Address</p>
                  <p>App 000</p>
                </div>
                <div className="contact_details">
                  <p>hello@einriliving.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation */}
          <div className="menu_right_side">
            {/* Close Button */}
            <div className="close_button_container">
              <button className="menu_close_btn">
                <i className="la la-times"></i>
              </button>
            </div>

            {/* Team Members Grid */}
            <div className="team_members_grid">
              <div className="team_member">
                <img
                  src="/home1/assets/img/head_slide2.png"
                  alt="Team member 1"
                />
              </div>
              <div className="team_member">
                <img
                  src="/home1/assets/img/head_slide1.jpg"
                  alt="Team member 2"
                />
              </div>
              <div className="team_member">
                <img
                  src="/home1/assets/img/head_slide2.png"
                  alt="Team member 3"
                />
              </div>
              <div className="team_member">
                <img
                  src="/home1/assets/img/head_slide1.jpg"
                  alt="Team member 4"
                />
              </div>
              <div className="team_member">
                <img
                  src="/home1/assets/img/head_slide2.png"
                  alt="Team member 5"
                />
              </div>
              <div className="team_member">
                <img
                  src="/home1/assets/img/head_slide1.jpg"
                  alt="Team member 6"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="main_navigation">
              <ul>
                <li>
                  <a href="#" className="nav_link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav_link">
                    Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="nav_link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="nav_link">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="nav_link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="nav_link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="social_links">
              <a href="#" className="social_link">
                Instagram
              </a>
              <a href="#" className="social_link">
                Behance
              </a>
              <a href="#" className="social_link">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
