import React from "react";
import iconbar from "../assets/images/icons/icon-bar.png";
import logo from "../assets/images/logo.png";


const Header = () => {
  return (
    <header className="main-header header-style-five">
      {/* Header Top */}
      <div className="header-top style-five">
        <div className="auto-container">
          <div className="inner">
            <div className="top-left">
              <div className="language">
                <span className="flaticon-global"></span>
                Welcome to HMJ Fire Safety Services
              </div>
              <ul className="social-links clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="contact-info">
                <li>
                  <a href="tel:+919934365994">
                    <i className="flaticon-phone"></i>+91 99343 65994
                  </a>
                </li>
                <li>
                  <a href="mailto:support@hmjsafety.com">
                    <i className="flaticon-mail-1"></i>support@hmjsafety.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Upper */}
      <div className="header-upper style-five" style={{ background: "#efa600" }}>
        <div className="auto-container">
          <div className="inner-container clearfix">
            {/* Sidemenu Navigation Toggler */}
            <div className="sidemenu-nav-toggler">
              <img src={iconbar} alt="menu" />
            </div>

            {/* Logo */}
            <div className="logo-box">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} alt="HMJ Logo" />
                </a>
              </div>
            </div>

            {/* Nav Box */}
            <div className="nav-outer clearfix">
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                <img src="assets/images/icons/icon-bar.png" alt="mobile menu" />
              </div>

              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about-hmj-fire-safety.html">About Us</a>
                    </li>

                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <li>
                          <a href="fire-fighting-services.html">
                            Firefighting System
                          </a>
                        </li>
                        <li>
                          <a href="fire-alarm-services.html">Fire Alarm System</a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="#">Fire Safety Products</a>
                      <ul>
                        <li className="dropdown">
                          <a href="fire-fighting-system.html">Fire Fighting System</a>
                          <ul>
                            {Array.from({ length: 14 }).map((_, i) => (
                              <li key={i}>
                                <a href="product-details.html">Product 01</a>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a href="fire-alarm-system.html">Fire Alarm System</a>
                          <ul>
                            {Array.from({ length: 6 }).map((_, i) => (
                              <li key={i}>
                                <a href="product-details.html">Product 02</a>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a href="fire-suppression-system.html">
                            Fire Suppression System
                          </a>
                          <ul>
                            {Array.from({ length: 3 }).map((_, i) => (
                              <li key={i}>
                                <a href="product-details.html">Product 03</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="amc.html">AMC</a>
                    </li>
                    <li>
                      <a href="career.html">Career</a>
                    </li>
                    <li>
                      <a href="contact-hmj-fire-safety.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>

              {/* Main Menu End */}
              <div className="navbar-right-info">
                <div className="link-btn">
                  <a href="consultancy.html" className="theme-btn btn-style-one">
                    <span className="btn-title">Free Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="header-upper style-five">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="sidemenu-nav-toggler">
                <img src="assets/images/icons/icon-bar-2.png" alt="menu" />
              </div>

              <div className="logo-box">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="HMJ Logo" />
                  </a>
                </div>
              </div>

              <div className="nav-outer clearfix">
                <div className="mobile-nav-toggler">
                  <img src="assets/images/icons/icon-bar.png" alt="mobile menu" />
                </div>

                <nav className="main-menu navbar-expand-md navbar-light"></nav>

                <div className="navbar-right-info">
                  <div className="link-btn">
                    <a href="#" className="theme-btn btn-style-one">
                      <span className="btn-title">Free Consultation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-remove"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="logo" title="" />
            </a>
          </div>
          <div className="menu-outer"></div>

          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-facebook-square"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="nav-overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
    </header>




  );
};

export default Header;



