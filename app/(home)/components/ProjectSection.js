"use client";
import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import ReactIcon from "../static/assets/react-color.svg";
import PythonIcon from "../static/assets/python-color.svg";
import ProjectItem from "../ui/ProjectItem";
import ProjectModal from "./ProjectModal";
import projectsData from "../static/projects/projects.json";

const importAllImages = (imageFilenames) => {
  return imageFilenames.map((filename) => {
    return require(`../static/projects/${filename}`).default;
  });
};

export default function ProjectSection() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = projectsData.map((project) => ({
    ...project,
    icon: project.icon.map((iconName) =>
      iconName === "react-color.svg" ? ReactIcon : PythonIcon
    ),
    images: importAllImages(project.images || []),
  }));

  const handleClick = (idx) => {
    setExpandedProject(idx);
  };

  const handleClose = (idx) => {
    setExpandedProject(null);
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
                  <div onClick={() => handleClick(idx)}>
                    <ProjectItem
                      title={project.title}
                      date={project.date}
                      tag={project.tag}
                      icon={project.icon}
                      description={project.description}
                      expanded={expandedProject === idx}
                      images={project.images}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {expandedProject !== null && (
        <ProjectModal
          project={projects[expandedProject]}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
