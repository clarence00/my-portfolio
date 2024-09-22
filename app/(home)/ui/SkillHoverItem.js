"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import HtmlIcon from "../static/assets/html5-color.svg";
import CssIcon from "../static/assets/css3-color.svg";
import JavaScriptIcon from "../static/assets/javascript-color.svg";
import PythonIcon from "../static/assets/python-color.svg";
import DartIcon from "../static/assets/dart-color.svg";
import CSharpIcon from "../static/assets/csharp-color.svg";
import ReactIcon from "../static/assets/react-color.svg";
import TailwindIcon from "../static/assets/tailwindcss-color.svg";
import FlutterIcon from "../static/assets/flutter-color.svg";
import SassIcon from "../static/assets/sass-color.svg";
import NextJSIcon from "../static/assets/nextdotjs-color.svg";
import DjangoIcon from "../static/assets/django-color.svg";
import { useState } from "react";
import Reveal from "./Reveal";

const iconMap = {
  html: HtmlIcon,
  css: CssIcon,
  javascript: JavaScriptIcon,
  python: PythonIcon,
  dart: DartIcon,
  csharp: CSharpIcon,
  react: ReactIcon,
  tailwind: TailwindIcon,
  flutter: FlutterIcon,
  sass: SassIcon,
  next: NextJSIcon,
  django: DjangoIcon,
};

const iconNames = {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  python: "Python",
  dart: "Dart",
  csharp: "C#",
  react: "ReactJS",
  tailwind: "TailwindCSS",
  flutter: "Flutter",
  sass: "Sass",
  next: "NextJS",
  django: "Django",
};

const iconColors = {
  html: "bg-orange-500",
  css: "bg-blue-500",
  javascript: "bg-yellow-500",
  python: "bg-green-500",
  dart: "bg-blue-600",
  csharp: "bg-purple-600",
};

export const SkillHoverItem = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div
      className={cn(
        "grid justify-center grid-cols-2 w-[70%] m-auto mt-10 gap-x-4 gap-y-8 px-16",
        className
      )}>
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative block w-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-customBlue-300/[0.3] block rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-50">
            <Reveal>
              <div className="relative p-4 border-2 rounded-md group text-customYellow-100 border-customBlue-300">
                <div className="text-2xl font-bold tracking-wide text-center">
                  {item.title}
                </div>
                {item.icons && item.icons.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-2 px-4 pt-4">
                    {item.icons.map((icon, i) => {
                      const IconComponent = iconMap[icon];
                      return IconComponent ? (
                        <div
                          key={i}
                          className="relative flex flex-col items-center"
                          onMouseEnter={() => setHoveredIcon(icon)}
                          onMouseLeave={() => setHoveredIcon(null)}>
                          <div className="p-1 rounded-lg ">
                            <IconComponent className="w-12 h-12" />
                          </div>
                          {hoveredIcon === icon && (
                            <div
                              className={`absolute translate-y-14 mt-1.5 text-sm rounded-lg p-1 text-customBlue-100 ${iconColors[icon]}`}>
                              {iconNames[icon]}
                            </div>
                          )}
                        </div>
                      ) : null;
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Reveal>
          </div>
        </div>
      ))}
    </div>
  );
};
