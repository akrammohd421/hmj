import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IndustriesWeServed = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const industries = [
    {
      icon: "flaticon-bank",
      title: (
        <>
          Schools & <br /> Educational Institute
        </>
      ),
    },
    {
      icon: "flaticon-insurance",
      title: (
        <>
          Hospital & <br /> Medical Facilities
        </>
      ),
    },
    {
      icon: "flaticon-trolley",
      title: (
        <>
          Government <br /> Offices
        </>
      ),
    },
    {
      icon: "flaticon-null-1",
      title: (
        <>
          Hotels & <br /> Restaurants
        </>
      ),
    },
    {
      icon: "flaticon-petroleum",
      title: (
        <>
          Shopping Mall & <br /> Commercial Places
        </>
      ),
    },
    {
      icon: "flaticon-doctor",
      title: (
        <>
          Factories & <br /> Establishments
        </>
      ),
    },
  ];

  return (
    <section className="services-section-five">
      <div className="auto-container">
        {/* Top Content */}
        <div className="top-content row m-0 justify-content-between" data-aos="fade-up">
          <div className="sec-title style-four">
            <h2>Industries we served</h2>
            <span className="text-decoration-three"></span>
          </div>
          <div className="text">
            We are committed to understand the need of our customers <br />
            and try to exceed their expectations.
          </div>
        </div>

        {/* Services Grid */}
        <div className="row">
          {industries.map((industry, index) => (
            <div
              className="col-lg-4 col-md-6 service-block-five"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="inner-box">
                <div className="content-box">
                  <div className="icon">
                    <span className={industry.icon}></span>
                  </div>
                  <h4>{industry.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServed;
