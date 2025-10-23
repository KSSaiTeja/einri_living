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
                        <a href="#"> Plot No. 12, Road No. 1, Banjara Hills, Hyderabad - 500034 </a>
                      </li>
                      <li>
                        <a href="#"> hello@einriliving.com </a>
                      </li>
                      <li>
                        <a href="#"> +91 40 1234 5678 </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Studio Hours </h6>
                    <ul className="color-666 lh-6">
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-icons mt-50 text-lg-end">
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
      </div>
    </section>
  );
}

export default ContactInfo;
