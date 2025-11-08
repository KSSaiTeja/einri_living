import React from 'react';

function ContactInfo() {
  return (
    <section className="tc-contact-info-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-cards">
              <div className="row">
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Hyderabad, India </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <p> Plot No. 12, Road No. 1, Banjara Hills, Hyderabad - 500034 </p>
                      </li>
                      <li>
                        <a href="mailto:einricare@gmail.com"> einricare@gmail.com </a>
                      </li>
                      <li>
                        <a href="tel:+917093196731"> +91 70931 96731 </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Studio Hours </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      </li>
                      <li>
                        <p> Saturday: 10:00 AM - 4:00 PM </p>
                      </li>
                      <li>
                        <p> Sunday: By Appointment </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-icons mt-50 text-lg-end">
              <a
                href="https://www.instagram.com/einri_living?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Einri Living on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/einriliving"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Einri Living on Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/einri-living/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Einri Living on LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="http://www.youtube.com/@EinriLiving-Interiors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Einri Living on YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
