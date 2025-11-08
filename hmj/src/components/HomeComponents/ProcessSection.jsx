import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import images from assets folder
import icon28 from "./../../assets/images/icons/icon-28.png";
import icon29 from "./../../assets/images/icons/icon-29.png";
import icon30 from "./../../assets/images/icons/icon-30.png";

const ProcessSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Process data array
  const processes = [
    {
      img: icon28,
      title: "Contact & Consult",
      text: `Indignation dislike men beguiled and demoralized 
             by the charms pleasure moment blinded by desire.`,
    },
    {
      img: icon29,
      title: "Discussion and Plan",
      text: `Nor again there anyone who loves pursues or desires 
             to obtain pain itself because occasionally.`,
    },
    {
      img: icon30,
      title: "Execute and Maintain",
      text: `To take a trivial example which of ever undertakes labor 
             physical exercises some advantage from it.`,
    },
  ];

  return (
    <section className="process-section-four">
      <div className="auto-container">
        {/* Process Steps */}
        <div className="row">
          {processes.map((step, index) => (
            <div
              className="col-lg-4 process-block-four"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="inner-box text-center">
                <div className="icon">
                  <img src={step.img} alt={step.title} />
                </div>
                <h4>{step.title}</h4>
                <div className="text">{step.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="bottom-text" data-aos="fade-up" data-aos-delay="500">
          Interested to start your project with <b>HMJ Fire Safety</b>.{" "}
          <a href="contact-hmj-fire-safety.html">
            Consult with our Experts <i className="fa fa-caret-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
