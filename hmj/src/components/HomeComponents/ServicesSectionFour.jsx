import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img31 from "../../assets/images/resource/image-31.jpg";
import img32 from "../../assets/images/resource/image-32.jpg";
import img33 from "../../assets/images/resource/image-33.jpg";

const ServicesSectionFour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="services-section-four">
      <div className="auto-container">
        <div className="sec-title style-four text-center">
          <h2 style={{ fontSize: "25px" }}>
            Preeminent Quality Products and <br /> dedicated consulting services
          </h2>
          <span className="text-decoration-three"></span>
        </div>

        <div className="row">
          {/* Block 1 */}
          <div className="col-lg-4 service-block-four" data-aos="fade-up">
            <div className="inner-box">
              <div className="image-box">
                <img src={img31} alt="Fire Fighting Systems" />
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-up"></span>
                  </div>
                  <h4>
                    Fire <br /> Fighting Systems
                  </h4>
                </div>
                <div className="overlay">
                  <div className="icon">
                    <span className="flaticon-up"></span>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="text">
                  Inspected stringently for quality and as per the International
                  Safety & Quality Standard.
                </div>
                <div className="link-btn">
                  <a
                    href="fire-fighting-system.html"
                    className="theme-btn btn-style-three"
                    style={{
                      color: "#c11312",
                      fontWeight: 600,
                      paddingTop: "10px",
                    }}
                  >
                    <span className="btn-title">
                      Check Our Products <i className="fa fa-caret-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="col-lg-4 service-block-four" data-aos="fade-up" data-aos-delay="200">
            <div className="inner-box">
              <div className="image-box">
                <img src={img32} alt="Fire Alarm System" />
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-chart"></span>
                  </div>
                  <h4>
                    Fire <br /> Alarm System
                  </h4>
                </div>
                <div className="overlay">
                  <div className="icon">
                    <span className="flaticon-chart"></span>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="text">
                  Detects and warns people of fire through audible and visible signals.
                </div>
                <div className="link-btn">
                  <a
                    href="fire-alarm-system.html"
                    className="theme-btn btn-style-three"
                    style={{
                      color: "#c11312",
                      fontWeight: 600,
                      paddingTop: "10px",
                    }}
                  >
                    <span className="btn-title">
                      Check Our Products <i className="fa fa-caret-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="col-lg-4 service-block-four" data-aos="fade-up" data-aos-delay="400">
            <div className="inner-box">
              <div className="image-box">
                <img src={img33} alt="Fire Suspension System" />
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-business-and-finance"></span>
                  </div>
                  <h4>
                    Fire <br /> Suspension System
                  </h4>
                </div>
                <div className="overlay">
                  <div className="icon">
                    <span className="flaticon-business-and-finance"></span>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="text">
                  Designed to detect any fire as soon as it starts and helps to
                  suppress it immediately from spreading.
                </div>
                <div className="link-btn">
                  <a
                    href="fire-suspension-system.html"
                    className="theme-btn btn-style-three"
                    style={{
                      color: "#c11312",
                      fontWeight: 600,
                      paddingTop: "10px",
                    }}
                  >
                    <span className="btn-title">
                      Check Our Products <i className="fa fa-caret-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionFour;
