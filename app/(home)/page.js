import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function page() {
  return (
    <div className="min-h-screen bg-customBlue-100">
      <HeroSection />
      <Navbar />
    </div>
  );
}
