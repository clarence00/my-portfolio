import React, { useState } from "react";
import Image from "next/image";
import { iconMap, iconColors, iconNames } from "../ui/SkillHoverItem";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  let [hoveredIcon, setHoveredIcon] = useState(null);

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

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.div
        className="relative w-[50%] rounded-lg shadow-lg shadow-black bg-customBlue-100 pb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}>
        <div className="flex justify-center rounded-lg align-center relative">
          <motion.div
            className="w-full h-96 flex justify-center"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}>
            <Image
              src={project.images[currentIndex]}
              alt={project.title}
              className="object-contain w-auto h-96 rounded-lg"
            />
          </motion.div>
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

        <div className="flex justify-center my-2">
          {project.images.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 mx-1 rounded-full ${
                idx === currentIndex ? "bg-customBlue-400" : "bg-customBlue-200"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between px-4">
          <h2 className="text-lg font-bold text-customBlue-400">
            {project.title}
          </h2>
          <h3 className="text-md text-customBlue-400">{project.date}</h3>
        </div>

        <div className="m-4">
          <p className="text-sm text-customBlue-300">{project.description}</p>
        </div>

        <div className="flex px-2">
          {project.icon.map((icons, idx) => {
            const IconComponent = iconMap[icons];
            return IconComponent ? (
              <div
                key={idx}
                className="relative flex flex-col items-center group"
                onMouseEnter={() => setHoveredIcon(icons)}
                onMouseLeave={() => setHoveredIcon(null)}>
                <div className="p-1 rounded-lg ">
                  <IconComponent className="w-10 h-10 p-1 rounded-lg bg-customBlue-300/[0.3] hover:-translate-y-2 hover:scale-110" />
                </div>
                {hoveredIcon === icons && (
                  <div
                    className={`absolute text-center z-20 translate-y-14 mt-1.5 text-sm rounded-lg p-1 text-customBlue-100 ${iconColors[icons]}`}>
                    {iconNames[icons]}
                  </div>
                )}
              </div>
            ) : null;
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
