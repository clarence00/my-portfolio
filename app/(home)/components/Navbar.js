"use client";
import React, { useState } from "react";
import { IoMenu, IoHome, IoPerson, IoStar, IoNewspaper } from "react-icons/io5";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <IoMenu
        size={30}
        color="#E2E2B6"
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-black/50">
          <a
            onClick={handleNav}
            href="#home"
            className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-customYellow-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <IoHome
              size={20}
              color="#021526"
            />
            <span className="pl-4 text-customBlue-100">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-customYellow-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <IoPerson
              size={20}
              color="#021526"
            />
            <span className="pl-4 text-customBlue-100">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#experience"
            className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-customYellow-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <IoStar
              size={20}
              color="#021526"
            />
            <span className="pl-4 text-customBlue-100">Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-customYellow-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <IoNewspaper
              size={20}
              color="#021526"
            />
            <span className="pl-4 text-customBlue-100">Projects</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[38%] left-[5%]">
        <div className="flex flex-col group">
          <a
            href="#home"
            className="p-2 m-2 duration-300 rounded-full shadow-lg cursor-pointer group-hover:m-3 group-hover:p-3 bg-customYellow-100 hover:scale-125 ease group-hover:translate-x-5 group-hover:-translate-y-16">
            <IoHome
              className="group-hover:size-7"
              size={15}
              color="#021526"
            />
          </a>
          <a
            href="#about"
            className="p-2 m-2 duration-300 rounded-full shadow-lg cursor-pointer group-hover:m-3 group-hover:p-3 bg-customYellow-100 hover:scale-125 ease group-hover:translate-x-5 group-hover:-translate-y-14">
            <IoPerson
              className="group-hover:size-7"
              size={15}
              color="#021526"
            />
          </a>
          <a
            href="#experience"
            className="p-2 m-2 duration-300 rounded-full shadow-lg cursor-pointer group-hover:m-3 group-hover:p-3 bg-customYellow-100 hover:scale-125 ease group-hover:translate-x-5 group-hover:-translate-y-12">
            <IoStar
              className="group-hover:size-7"
              size={15}
              color="#021526"
            />
          </a>
          <a
            href="#projects"
            className="p-2 m-2 duration-300 rounded-full shadow-lg cursor-pointer group-hover:m-3 group-hover:p-3 bg-customYellow-100 hover:scale-125 ease group-hover:translate-x-5 group-hover:-translate-y-10">
            <IoNewspaper
              className="group-hover:size-7"
              size={15}
              color="#021526"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
