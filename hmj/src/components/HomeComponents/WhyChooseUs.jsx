import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg15 from "../../assets/images/background/bg-15.jpg"; // ✅ update path as per your folder

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="why-choose-us-section-two"
      style={{
        backgroundImage: `url(${bg15})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="auto-container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="sec-title style-four light">
              <h2>
                Reason for choosing <br /> HMJ Fire Safety
              </h2>
              <span className="text-decoration-three"></span>
            </div>

            <div className="text">
              We are one of the innovative firms in the sphere of Fire Fighting
              Equipment’s and consulting services.
            </div>

            <div className="whay-choose-block">
              <div className="inner-box">
                <div className="icon">
                  <span className="flaticon-bot"></span>
                </div>
                <h4>Certified and Custom Solutions</h4>
                <div className="text">
                  Business it will frequently occur that pleasures have to be
                  repudiated and accepted.
                </div>
              </div>
            </div>

            <div className="whay-choose-block">
              <div className="inner-box">
                <div className="icon">
                  <span className="flaticon-diamond"></span>
                </div>
                <h4>International Standard Products</h4>
                <div className="text">
                  Complete accounts of the systems and expound <br /> teachings
                  of the great explorers.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" style={{ paddingTop: "115px" }} data-aos="fade-left">
            <div className="whay-choose-block">
              <div className="inner-box">
                <div className="icon">
                  <span className="flaticon-bot"></span>
                </div>
                <h4>24/7 Professional Monitoring</h4>
                <div className="text">
                  Business it will frequently occur that pleasures have to be
                  repudiated and accepted.
                </div>
              </div>
            </div>

            <div className="whay-choose-block">
              <div className="inner-box">
                <div className="icon">
                  <span className="flaticon-diamond"></span>
                </div>
                <h4>End to End Technical Expertise</h4>
                <div className="text">
                  Complete accounts of the systems and expound <br /> teachings
                  of the great explorers.
                </div>
              </div>
            </div>

            <div className="whay-choose-block">
              <div className="inner-box">
                <div className="icon">
                  <span className="flaticon-diamond"></span>
                </div>
                <h4>On-Time Delivery Process</h4>
                <div className="text">
                  Complete accounts of the systems and expound <br /> teachings
                  of the great explorers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
