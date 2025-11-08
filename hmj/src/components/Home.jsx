import React from "react";
import AboutSection from "./HomeComponents/AboutSection";
import ServicesSectionFour from "./HomeComponents/ServicesSectionFour";
import WhyChooseUs from "./HomeComponents/WhyChooseUs";
import IndustriesWeServed from "./HomeComponents/IndustriesWeServed";
import ProcessSection from "./HomeComponents/ProcessSection";
import AwardSection from "./HomeComponents/AwardSection";



function Home() {
  return (
    <>
   <AboutSection />
   <ServicesSectionFour />
   <WhyChooseUs />
   <IndustriesWeServed />
   <ProcessSection />
   <AwardSection />
    </>
  );
}

export default Home;