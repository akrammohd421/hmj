import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import slider1 from "./../../assets/images/main-slider/slider2.jpg";
import slider2 from "./../../assets/images/main-slider/slider4.jpg";
import slider3 from "./../../assets/images/main-slider/slider3.jpg";




const Slider = () => {
  useEffect(() => {
    // Initialize Owl Carousel when component mounts
    $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 0,
      autoHeight: true,
      lazyLoad: true,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1000,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1000: { items: 1 },
      },
    });
  }, []);

  return (
    <section className="banner-section style-one">
      <div className="banner-carousel theme_carousel owl-theme owl-carousel">
        {/* Slide 1 */}
        <div className="slide-item">
          <div
            className="image-layer lazy-image"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          ></div>

          <div className="auto-container">
            <div className="content-box justify-content-end">
              <div>
                <h2 style={{ fontSize: "35px", color: "#000" }}>
                  It is all about Fire SAFETY <br /> and Efficiency
                </h2>
                <div className="text" style={{ color: "#000" }}>
                  An industry where precision and perfection make the <br />
                  bedrock of operations, HMJ Fire Safety has made its mark by{" "}
                  <br />
                  delivering products and services par excellence <br />
                  with a strong client base to show for it.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide-item">
          <div
            className="image-layer lazy-image"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          ></div>

          <div className="auto-container">
            <div className="content-box justify-content-end">
              <div>
                <h2 style={{ fontSize: "35px", color: "#000" }}>
                  It is all about Fire SAFETY <br /> and Efficiency
                </h2>
                <div className="text" style={{ color: "#000" }}>
                  An industry where precision and perfection make the <br />
                  bedrock of operations, HMJ Fire Safety has made its mark by{" "}
                  <br />
                  delivering products and services par excellence <br />
                  with a strong client base to show for it.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide-item">
          <div
            className="image-layer lazy-image"
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          ></div>

          <div className="auto-container">
            <div className="content-box">
              <div>
                <h2 style={{ fontSize: "35px", color: "#000" }}>
                  It is all about Fire SAFETY <br /> and Efficiency
                </h2>
                <div className="text" style={{ color: "#000" }}>
                  An industry where precision and perfection make the <br />
                  bedrock of operations, HMJ Fire Safety has made its mark by{" "}
                  <br />
                  delivering products and services par excellence <br />
                  with a strong client base to show for it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
