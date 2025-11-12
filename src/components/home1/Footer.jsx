import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTarget = (targetId) => {
    if (targetId === '#top') {
      if (window.smoother && window.smoother.scrollTo) {
        try {
          window.smoother.scrollTo(0, true);
        } catch (e) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      if (window.smoother && window.smoother.scrollTo) {
        try {
          const offset = targetElement.offsetTop - 100;
          window.smoother.scrollTo(offset, true);
        } catch (e) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleFooterLinkClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToTarget(targetId), 500);
    } else {
      scrollToTarget(targetId);
    }
  };

  const handleConsultationClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && typeof window.openEinriConsultationModal === 'function') {
      window.openEinriConsultationModal();
    } else {
      handleFooterLinkClick(e, '#site-footer');
    }
  };

  return (
    <footer id="site-footer" className="tc-footer-style1">
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
                    <span>
                      Plot No. 126, Gokul Plots, Road No. 3, <br />
                      Kukatpally, KPHB Phase 9, Hyderabad <br />
                      Medchal Malkajgiri, Telangana 500072
                    </span>
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
                <a href="#top" onClick={(e) => handleFooterLinkClick(e, '#top')}> Home </a>
                <a href="#transformations" onClick={(e) => handleFooterLinkClick(e, '#transformations')}> Studio </a>
                <a href="#transformations" onClick={(e) => handleFooterLinkClick(e, '#transformations')}> Cases </a>
                <a href="#blog" onClick={(e) => handleFooterLinkClick(e, '#blog')}> News </a>
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
