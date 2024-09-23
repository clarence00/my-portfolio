"use client";
import React, { useState } from "react";
import ExperienceItem from "../ui/ExperienceItem";
import Reveal from "../ui/Reveal";
import { SkillHoverItem } from "../ui/SkillHoverItem";

export default function ExperienceSection() {
  const skills = [
    {
      title: "Languages",
      icons: ["html", "css", "javascript", "dart", "python", "csharp"],
    },
    {
      title: "Frameworks",
      icons: ["react", "tailwind", "flutter", "sass", "next", "django"],
    },
    {
      title: "Databases",
      icons: ["sqlite", "firebase", "postgresql"],
    },
    {
      title: "Tools",
      icons: [
        "git",
        "github",
        "figma",
        "vscode",
        "canva",
        "photoshop",
        "unity",
        "androidstudio",
        "odoo",
      ],
    },
  ];

  const data = [
    {
      title: "Full-Stack Developer Intern",
      company: "Achieve Without Borders, Inc,",
      year: "August 2023 - September 2023",
      tech: [
        "ReactJS",
        "Python",
        "NodeJS",
        "Bootstrap",
        "Firebase",
        "PostgreSQL",
        "Odoo",
        "VSCode",
        "Git",
      ],
      details: [
        "Collaborated with a team to fixed bugs and conducted quality assurance for the web application using ReactJS and Firebase before transitioning to the Odoo custom module project.",
        "Developed custom module application for Odoo V16, including creating admin manual documentation and conducting benchmark tests.",
        "Followed Scrum methodology, participating in daily stand-up meetings.",
        "Assigned and documented tickets for project-related tasks and issues.",
        "Utilized tech-stacks including ReactJS, Bootstrap, Firebase for web development and Python, NodeJS, PostgreSQL for Odoo module development. Worked with VSCode and Git for version control.",
      ],
    },
    {
      title: "Graphic Designer and Digital Marketing Intern",
      company: "I-Map Websolutions, Inc,",
      year: "August 2022 - September 2022",
      tech: ["Canva", "Photoshop"],
      details: [
        "Collaborated with a team to design ad posters and promotional materials for an e-commerce platform",
        "Managed company files to ensure smooth business operations.",
        "Worked with Adobe Photoshop, Microsoft Word and PowerPoint",
      ],
    },
  ];

  return (
    <div id="experience">
      <div className="flex-col flex justify-center mt-8 w-[70%] m-auto rounded-2xl lg:flex-row">
        <div className="m-6 text-center h-content md:text-left">
          <Reveal>
            <h1 className="pb-8 text-3xl font-bold md:text-3xl md:pl-2 text-customBlue-400 md:max-lg:px-6">
              Experience
            </h1>
          </Reveal>
          <div>
            {data.map((item, idx) => (
              <ExperienceItem
                key={idx}
                company={item.company}
                title={item.title}
                year={item.year}
                tech={item.tech}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </div>
      <SkillHoverItem
        className="pb-20"
        items={skills}></SkillHoverItem>
    </div>
  );
}
