import React from 'react';

function Footer() {
  return (
    <footer className="tc-footer-style1">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-300" style={{fontFamily: 'serif', fontStyle: 'italic'}}>
                  There are two things that make a room timeless: a sense of history and a piece of the future.
                </div>
                <div className="text-end mt-3">
                  <span className="fsz-16 fw-400 color-666">- Charlotte Moss</span>
                </div>
                <div className="foot-social mt-50">
                  <a href="https://twitter.com/einriliving" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="https://facebook.com/einriliving" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com/einriliving" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/company/einriliving" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://youtube.com/@einriliving" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
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
                    <a href="mailto:hello@einriliving.com"> hello@einriliving.com </a>
                  </li>
                  <li>
                    <a href="tel:+914012345678"> +91 40 1234 5678 </a>
                  </li>
                </ul>
              </div>
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Our Services </h5>
                <ul className="footer-links">
                  <li>
                    <a href="/services"> 3D Visualizations </a>
                  </li>
                  <li>
                    <a href="/services"> Residential Design </a>
                  </li>
                  <li>
                    <a href="/services"> Commercial Spaces </a>
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
                    <a href="/terms"> Term & Conditions </a>
                  </li>
                  <li>
                    <a href="/privacy"> Partner Policy </a>
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
                <a href="/"> Home </a>
                <a href="/studio"> Studio </a>
                <a href="/portfolio"> Cases </a>
                <a href="/blog"> News </a>
                <a href="/contact"> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
