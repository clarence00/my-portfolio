"use client";
import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import Image from "next/image";
import ReactIcon from "../static/assets/react-color.svg";
import PythonIcon from "../static/assets/python-color.svg";
import Image1 from "../static/media/Signature.png";
import Image2 from "../static/media/pancake.jpg";

export default function ProjectSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Project 1",
      tech: [
        "ReactJS",
        "Python",
        "Python",
        "Python",
        "Python",
        "Python",
        "Python",
        "Python",
      ],
      image: Image1,
      album: [Image1, Image2, Image1],
      techicon: [ReactIcon, PythonIcon],
      description: "Project #1 for academics",
    },
    {
      title: "Project 2",
      image: Image1,
    },
    {
      title: "Project 3",
      image: Image1,
    },
  ];

  const toggleExpand = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
      setCurrentImageIndex(0);
    } else {
      setExpandedIndex(idx);
    }
  };

  const nextImage = (album) => {
    setCurrentImageIndex((prev) => (prev + 1) % album.length);
  };

  const prevImage = (album) => {
    setCurrentImageIndex((prev) => (prev - 1 + album.length) % album.length);
  };

  return (
    <div id="projects">
      <div className="justify-center mt-20 w-[70%] m-auto rounded-2xl lg:flex-row">
        <div className="m-6 text-center h-content md:text-left">
          <Reveal>
            <h1 className="pb-8 text-3xl font-bold md:text-3xl md:pl-2 text-customBlue-400 md:max-lg:px-6">
              Projects
            </h1>
          </Reveal>
          <div className="pb-20 border-2 border-customBlue-400">
            <div className="grid justify-center grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <Reveal key={idx}>
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="relative p-4 transition-all duration-300 ease-in-out border-2 rounded-md cursor-pointer bg-customBlue-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg bg-customBlue-200"
                      height={20}
                      width={20}
                    />
                    <h3 className="px-4 mt-2 text-lg font-bold text-customBlue-400">
                      {project.title}
                    </h3>
                    {/* Conditionally render expanded content */}
                    {expandedIndex === idx && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/80">
                        <div className="relative w-[80%] h-[80%] bg-white rounded-lg shadow-lg p-8 overflow-auto">
                          {/* Image Album with Navigation */}
                          <div className="relative w-full h-64 mb-6">
                            <Image
                              src={project.album[currentImageIndex]}
                              alt={`Album Image ${currentImageIndex + 1}`}
                              className="object-cover w-full h-full rounded-lg"
                              layout="fill"
                            />
                            {/* Previous Image Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(project.album);
                              }}
                              className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-600 rounded-full top-1/2">
                              &#8592;
                            </button>
                            {/* Next Image Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(project.album);
                              }}
                              className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-gray-600 rounded-full top-1/2">
                              &#8594;
                            </button>
                          </div>

                          {/* Project Description */}
                          <p className="mb-4 text-base text-gray-700">
                            {project.description}
                          </p>

                          {/* Tech Icons */}
                          <div className="flex flex-wrap justify-center gap-2 mt-2">
                            {project.techicons &&
                              project.techicons.map((Icon, i) => (
                                <Icon
                                  key={i}
                                  className="w-12 h-12"
                                />
                              ))}
                          </div>

                          {/* Close Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedIndex(null);
                              setCurrentImageIndex(0);
                            }}
                            className="absolute p-2 text-white bg-red-500 rounded-full top-2 right-2">
                            &#x2715;
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack (display when not expanded) */}
                    {expandedIndex !== idx && project.tech && (
                      <ul className="px-2 text-sm font-bold text-customBlue-100">
                        {project.tech.map((techs, idx) => (
                          <li
                            key={idx}
                            className="inline-block px-2 py-1 m-1 rounded-full bg-customBlue-300">
                            {techs}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
