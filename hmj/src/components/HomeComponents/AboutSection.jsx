import React from "react";
import home1 from "../../assets/images/resource/home1.jpg";
import home2 from "../../assets/images/resource/home2.jpg";
import iconHMJ from "../../assets/images/icons/icon-hmj.png";

const AboutSection = () => {
  return (
    <section className="about-section-four">
      <div className="auto-container">
        <div className="row">
          {/* Left Side Images */}
          <div className="col-lg-6">
            <div className="image-block">
              <div
                className="image-one wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image-box">
                  <img
                    src={home2}
                    alt="HMJ Home 2"
                    className="lazy-image owl-lazy"
                  />
                </div>
              </div>

              <div
                className="image-two wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="image-box">
                  <img
                    src={home1}
                    alt="HMJ Home 1"
                    className="lazy-image owl-lazy"
                  />
                </div>
              </div>

              <div className="logo">
                <img src={iconHMJ} alt="HMJ Icon" />
              </div>
            </div>
          </div>

          {/* Right Side Text */}
          <div className="col-lg-6">
            <div className="sec-title style-four">
              <h2>
                Tangible Solutions for <br /> SAFER AND SECURED PLACE
              </h2>
              <span className="text-decoration-three"></span>
            </div>

            <div className="text">
              <p>
                We <b>HMJ Fire Safety Services</b> are perceived as the
                preeminent dealer, merchant, and retailer of an extensive
                variety of Fire Safety Equipments. Our fire safety and related
                products are fabricated utilizing preeminent quality crude
                material and the most developed procedures by our renowned
                merchants keeping in mind the end goal.
              </p>
              <p>
                We are operated by a team of professionals with qualified
                multi-disciplined engineers and trained technicians, offering
                comprehensive services in Fire Safety products.
              </p>
            </div>

            <div className="link-btn">
              <a
                href="about-hmj-fire-safety.html"
                className="theme-btn btn-style-one"
                style={{ fontSize: "12px" }}
              >
                <span className="btn-title">
                  Know More <i className="fa fa-caret-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
