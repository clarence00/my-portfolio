import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Icon } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleBackdropClick}>
      <div className="relative w-[40%] rounded-lg shadow-lg shadow-black bg-customBlue-100">
        <div className="flex justify-center rounded-lg align-center">
          <Image
            src={project.images[currentIndex]}
            alt={project.title}
            className="object-contain w-auto h-96"
          />
        </div>

        <div className="flex justify-between px-4 my-2">
          <button
            className="px-4 text-xl rounded-full text-customYellow-100 bg-customBlue-300"
            onClick={handlePrev}>
            &#8249;
          </button>
          <button
            className="px-4 text-xl rounded-full text-customYellow-100 bg-customBlue-300"
            onClick={handleNext}>
            &#8250;
          </button>
        </div>

        <div className="flex justify-between px-4">
          <h2 className="text-lg font-bold text-customBlue-400">
            {project.title}
          </h2>
          <h3 className="text-md text-customBlue-400">{project.date}</h3>
        </div>

        <ul className="px-2 text-sm font-bold text-customBlue-100">
          {project.tag.map((tags, idx) => (
            <li
              key={idx}
              className="inline-block px-2 py-1 m-1 rounded-full bg-customBlue-300">
              {tags}
            </li>
          ))}
        </ul>

        <div className="m-4">
          <p className="text-sm text-customBlue-300">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
