import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const handleConsultationClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && typeof window.openEinriConsultationModal === 'function') {
      window.openEinriConsultationModal();
    }
  };

  return (
    <footer className="tc-footer-style1 border-top">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  We believe that architecture has the power to shape lives and
                  uplift communities. Einri Living&lsquo;s philosophy is passion for
                  innovation, sustainability and timeless aesthetics
                </div>
                <div className="foot-social mt-50">
                  <a href="http://www.youtube.com/@EinriLiving-Interiors" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/einri_living?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/einriliving" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/einri-living/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Hyderabad, India </h5>
                <ul className="footer-links">
                  <li>
                    <span>Plot No. 12, Road No. 1, Banjara Hills, <br /> Hyderabad - 500034</span>
                  </li>
                  <li>
                    <a href="mailto:einricare@gmail.com"> einricare@gmail.com </a>
                  </li>
                  <li>
                    <a href="tel:+917093196731"> +91 70931 96731 </a>
                  </li>
                </ul>
              </div>
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Our Services </h5>
                <ul className="footer-links">
                  <li>
                    <Link to="/services"> 3D Visualizations </Link>
                  </li>
                  <li>
                    <Link to="/services"> Residential Design </Link>
                  </li>
                  <li>
                    <Link to="/services"> Commercial Spaces </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Studio Hours </h5>
                <ul className="footer-links">
                  <li>
                    <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                  </li>
                  <li>
                    <span> Saturday: 10:00 AM - 4:00 PM </span>
                  </li>
                  <li>
                    <span> Sunday: By Appointment </span>
                  </li>
                </ul>
              </div>
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Helps </h5>
                <ul className="footer-links">
                  <li>
                    <Link to="/terms"> Term & Conditions </Link>
                  </li>
                  <li>
                    <Link to="/privacy"> Partner Policy </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">© 2024 Einri Living. All Rights Reserved</p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                <Link to="/"> Home </Link>
                <Link to="/about"> Studio </Link>
                <Link to="/portfolio"> Cases </Link>
                <Link to="/blog"> News </Link>
                <a href="#consultation" onClick={handleConsultationClick}> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
