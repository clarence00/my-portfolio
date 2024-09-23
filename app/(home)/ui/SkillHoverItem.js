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
import SQLiteIcon from "../static/assets/sqlite-color.svg";
import PostgreSQLIcon from "../static/assets/postgresql-color.svg";
import FirebaseIcon from "../static/assets/firebase-color.svg";
import GitIcon from "../static/assets/git-color.svg";
import GithubIcon from "../static/media/github.svg";
import FigmaIcon from "../static/assets/figma-color.svg";
import VScodeIcon from "../static/assets/vscode-color.svg";
import CanvaIcon from "../static/assets/canva-color.svg";
import UnityIcon from "../static/assets/unity-color.svg";
import PhotoshopIcon from "../static/assets/adobephotoshop-color.svg";
import AndroidStudioIcon from "../static/assets/androidstudio-color.svg";
import OdooIcon from "../static/assets/odoo-color.svg";
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
  sqlite: SQLiteIcon,
  postgresql: PostgreSQLIcon,
  firebase: FirebaseIcon,
  git: GitIcon,
  github: GithubIcon,
  figma: FigmaIcon,
  vscode: VScodeIcon,
  canva: CanvaIcon,
  unity: UnityIcon,
  photoshop: PhotoshopIcon,
  androidstudio: AndroidStudioIcon,
  odoo: OdooIcon,
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
  sqlite: "SQLite",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  git: "Git",
  github: "Github",
  figma: "Figma",
  vscode: "VS Code",
  canva: "Canva",
  unity: "Unity",
  photoshop: "Photoshop",
  androidstudio: "Android Studio",
  odoo: "Odoo",
};

const iconColors = {
  html: "bg-orange-500",
  css: "bg-blue-500",
  javascript: "bg-yellow-400",
  python: "bg-blue-600",
  dart: "bg-blue-700",
  csharp: "bg-purple-600",
  react: "bg-cyan-400",
  tailwind: "bg-teal-400",
  flutter: "bg-blue-500",
  sass: "bg-pink-500",
  next: "bg-gray-900",
  django: "bg-green-200",
  sqlite: "bg-blue-600",
  postgresql: "bg-indigo-700",
  firebase: "bg-yellow-500",
  git: "bg-orange-600",
  github: "bg-gray-300",
  figma: "bg-pink-500",
  vscode: "bg-blue-600",
  canva: "bg-teal-500",
  unity: "bg-gray-300",
  photoshop: "bg-blue-500",
  androidstudio: "bg-green-600",
  odoo: "bg-purple-500",
};

export const SkillHoverItem = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div
      className={cn(
        "grid justify-center grid-cols-2 w-[70%] m-auto mt-10 gap-x-4 gap-y-8 px-1",
        className
      )}>
      {items.map((item, idx) => (
        <Reveal key={item?.link || idx}>
          <div
            key={item?.link}
            className="relative group p-2 flex flex-col h-fit"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 bg-customBlue-300/[0.3] rounded-md"
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
            <div className="relative z-50 border-2 rounded-md border-customBlue-300">
              <div className="p-4 group">
                <div className="text-2xl font-bold tracking-wide text-customYellow-100 text-center">
                  {item.title}
                </div>
                {item.icons && item.icons.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-2 px-4 pt-4">
                    {item.icons.map((icon, i) => {
                      const IconComponent = iconMap[icon];
                      return IconComponent ? (
                        <div
                          key={icon}
                          className="relative flex flex-col items-center"
                          onMouseEnter={() => setHoveredIcon(icon)}
                          onMouseLeave={() => setHoveredIcon(null)}>
                          <div className="p-1 rounded-lg ">
                            <IconComponent className="w-12 h-12" />
                          </div>
                          {hoveredIcon === icon && (
                            <div
                              className={`absolute z-20 translate-y-14 mt-1.5 text-sm rounded-lg p-1 text-customBlue-100 ${iconColors[icon]}`}>
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
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
