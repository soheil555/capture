import type { NextPage } from "next";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

const AboutUs: NextPage = () => {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;
