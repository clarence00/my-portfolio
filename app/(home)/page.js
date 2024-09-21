import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";

export default function page() {
  return (
    <div className="dark:bg-customBlue-100 relative dark:bg-dot-customYellow-100/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <Navbar />
    </div>
  );
}
