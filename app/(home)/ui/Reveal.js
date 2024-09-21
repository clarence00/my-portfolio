"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Reveal({
  children,
  animation = "fade-up",
  duration = 1000,
}) {
  useEffect(() => {
    AOS.init({
      duration,
    });
  }, [duration]);

  return <div data-aos={animation}>{children}</div>;
}
