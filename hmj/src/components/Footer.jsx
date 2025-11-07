import React from "react";
import footerLogo from "../assets/images/footer-logo.png";
import patternBg from "../assets/images/shape/pattern-8.png";

const Footer = () => {
  return (
    <footer className="main-footer style-two">
      <div
        className="pattern"
        style={{ backgroundImage: `url(${patternBg})` }}
      ></div>
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row">
            {/* Company Section */}
            <div className="col-md-2">
              <div className="footer-widget contact-widget">
                <h3 className="widget-title">Company</h3>
                <div className="widget-content">
                  <div className="text">
                    <a href="https://www.hmjsafety.com">
                      <img src={footerLogo} alt="HMJ Fire Safety" />
                    </a>
                  </div>
                  <br />
                  <ul className="social-links clearfix">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-youtube"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Links */}
            <div className="col-md-7">
              <div className="footer-widget links-widget">
                <h3 className="widget-title">Information</h3>
                <div className="widget-content">
                  <div className="row">
                    <div className="col-sm-4">
                      <ul>
                        <li>
                          <a href="about-hmj-fire-safety.html">
                            About HMJ Fire Safety
                          </a>
                        </li>
                        <li>
                          <a href="fire-fighting-services.html">
                            Fire Fighting Services
                          </a>
                        </li>
                        <li>
                          <a href="fire-alarm-services.html">
                            Fire Alarm Services
                          </a>
                        </li>
                        <li>
                          <a href="career.html">Career</a>
                        </li>
                        <li>
                          <a href="amc.html">AMC</a>
                        </li>
                        <li>
                          <a href="contact-hmj-fire-safety.html">
                            Contact HMJ Fire Safety
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-4">
                      <ul>
                        <li>
                          <a href="clientele.html">Clientele</a>
                        </li>
                        <li>
                          <a href="consultancy.html">Consultancy</a>
                        </li>
                        <li>
                          <a href="certifications.html">Our Certifications</a>
                        </li>
                        <li>
                          <a href="fire-policies.html">Fire Policies</a>
                        </li>
                        <li>
                          <a href="disclaimer.html">Disclaimer</a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-4">
                      <ul>
                        <li>
                          <a href="#">Fire Fighting Systems</a>
                        </li>
                        <li>
                          <a href="#">Fire Alarm Systems</a>
                        </li>
                        <li>
                          <a href="#">Fire Suppression Systems</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="col-md-3">
              <div className="footer-widget contact-widget">
                <h3 className="widget-title">Contact Details</h3>
                <div className="widget-content">
                  <div className="text">
                    Kolhuwarwa road, East Champaran, Motihari, Bihar - 845401
                    <br />
                    <b>Mon - Sat:</b> 09.00 to 06.00 (Sun: Closed)
                  </div>
                  <ul className="list">
                    <li>
                      <i className="fa fa-phone-volume"></i> : +91 99343 65994
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> : support@hmjsafety.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-two">
        <div className="auto-container">
          <div className="row m-0 justify-content-between">
            <div className="copyright-text">
              © 2022 HMJ Fire Safety Services - All Rights Reserved.
            </div>
            <ul className="menu">
              <li>
                <a
                  href="https://www.saraswebtech.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Design and Developed By Saras Webtech
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
