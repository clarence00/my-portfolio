import React from "react";
import Reveal from "./Reveal";

export default function ExperienceItem({
  title,
  company,
  year,
  link,
  tech,
  details,
}) {
  return (
    <Reveal>
      <ol className="relative flex-col md:flex md:pt-3 md:m-0 md:border-l md:flex-row md:border-customBlue-300">
        <li className="flex-grow mb-10 md:ml-8">
          <div className="absolute w-3 h-3 mt-6 rounded-full bg-customBlue-300 -left-1.5" />
          <div className="p-4 border-2 rounded-lg border-customBlue-300 bg-customBlue-100 group">
            <p className="px-2 py-1 text-lg font-bold rounded-md text-customBlue-100 bg-customYellow-100 w-fit">
              {title}
            </p>
            <p className="flex flex-row flex-wrap items-center justify-between gap-4 mt-1 italic text-md text-customBlue-400">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer">
                {company}
              </a>
              <span className="">{year}</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-4 mb-2">
              {tech.map((techs, idx) => (
                <span
                  className="px-2 py-1 text-sm font-bold rounded-lg text-customBlue-200 bg-customBlue-300 overflow-clip"
                  key={idx}>
                  {techs}
                </span>
              ))}
            </div>
            <ul className="mx-4 my-2 overflow-hidden list-disc list-inside transition-all duration-300 ease-in-out opacity-0 text-customBlue-300 text-md max-h-0 group-hover:opacity-100 group-hover:max-h-[100%]">
              {details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </li>
      </ol>
    </Reveal>
  );
}
