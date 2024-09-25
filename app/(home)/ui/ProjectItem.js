"use client";
import React, { useState } from "react";
import { iconMap, iconColors, iconNames } from "../ui/SkillHoverItem";
import Image from "next/image";

export default function ProjectItem({ title, date, icon, images }) {
  let [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div>
      <div className="flex justify-center h-52">
        <Image
          src={images[0]}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between px-2 mt-2">
        <h2 className="text-lg font-bold text-customBlue-400">{title}</h2>
        <h3 className="text-md text-customBlue-400">{date}</h3>
      </div>
      <div className="flex flex-nowrap">
        <div className="flex">
          {icon.map((icons, idx) => {
            const IconComponent = iconMap[icons];
            return IconComponent ? (
              <div
                key={idx}
                className="relative flex flex-col items-center group"
                onMouseEnter={() => setHoveredIcon(icons)}
                onMouseLeave={() => setHoveredIcon(null)}>
                <div className="p-1 rounded-lg ">
                  <IconComponent className="w-10 h-10 p-1 rounded-lg hover:-translate-y-2 hover:scale-110" />
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
      </div>
    </div>
  );
}
