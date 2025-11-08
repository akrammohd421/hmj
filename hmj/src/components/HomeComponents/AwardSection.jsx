import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import cert1 from "../../assets/images/resource/cert1.jpg";

const AwardSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const awards = [
    { img: cert1, title: "ISO 9001 2015", subtitle: "Certified" },
    { img: cert1, title: "Govt. of Bihar", subtitle: "Certified" },
    { img: cert1, title: "Govt. of India", subtitle: "Certified" },
    { img: cert1, title: "ISO 9001 2015", subtitle: "Certified" },
    { img: cert1, title: "ISO 9001 2015", subtitle: "Certified" },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 5 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };

  return (
    <section className="award-section-two">
      <div className="auto-container">
        {/* Title */}
        <div className="sec-title style-four" data-aos="fade-up">
          <h2>Our awards and achievements</h2>
          <span className="text-decoration-three"></span>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          showDots
          arrows
          autoPlaySpeed={6000}
          className="theme_carousel owl-theme"
        >
          {awards.map((award, i) => (
            <div
              key={i}
              className="award-block-two text-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="imagecert">
                <img src={award.img} alt={award.title} />
              </div>
              <h6 style={{ paddingTop: "30px" }}>
                {award.title} <br /> {award.subtitle}
              </h6>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default AwardSection;
