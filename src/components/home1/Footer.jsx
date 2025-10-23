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
                  <a href="#">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
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
                    <a href="#">Plot No. 12, Road No. 1, Banjara Hills, <br /> Hyderabad - 500034</a>
                  </li>
                  <li>
                    <a href="#"> hello@einriliving.com </a>
                  </li>
                  <li>
                    <a href="#"> +91 40 1234 5678 </a>
                  </li>
                </ul>
              </div>
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Our Services </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#"> 3D Visualizations </a>
                  </li>
                  <li>
                    <a href="#"> Residential Design </a>
                  </li>
                  <li>
                    <a href="#"> Commercial Spaces </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Studio Hours </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">Monday - Friday: 9:00 AM - 6:00 PM</a>
                  </li>
                  <li>
                    <a href="#"> Saturday: 10:00 AM - 4:00 PM </a>
                  </li>
                  <li>
                    <a href="#"> Sunday: By Appointment </a>
                  </li>
                </ul>
              </div>
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> Helps </h5>
                <ul className="footer-links">
                  <li>
                    <a href="#"> Term & Conditions </a>
                  </li>
                  <li>
                    <a href="#"> Partner Policy </a>
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
                <a href="#"> Home </a>
                <a href="#"> Studio </a>
                <a href="#"> Cases </a>
                <a href="#"> News </a>
                <a href="#"> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
