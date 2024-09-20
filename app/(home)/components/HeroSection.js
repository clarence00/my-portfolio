"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import GmailIcon from "../static/media/gmail.svg";
import GithubIcon from "../static/media/github.svg";
import LinkedinIcon from "../static/media/linkedin.svg";

export default function HeroSection() {
  return (
    <div id="home">
      <div className="absolute top-0 left-0 w-full h-screen bg-white-50">
        <div className="lg:max-w-[800px] max-w-[400px] m-auto lg:ml-[20%] h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-3xl font-bold text-center text-customBlue-400 sm:text-6xl">
            Hi! I'm Clarence Natividad
          </h1>
          <h2 className="text-2xl font-medium text-customBlue-300 sm:text-4xl">
            <TypeAnimation
              sequence={["Web Designer", 2000, "Front-end Developer", 2000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </h2>
          <div className="flex mt-2">
            <a href="#">
              <div className="flex flex-col items-center w-10 gap-2 group">
                <GmailIcon
                  className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-125 group-hover:fill-gmail-100 fill-customYellow-100"
                  style={{ width: "25px", height: "25px" }}
                />
                <div className=" text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap bg-gmail-100 group-hover:opacity-100">
                  Gmail
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex flex-col items-center w-10 gap-2 group">
                <GithubIcon
                  className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-125 group-hover:fill-github-100 fill-customYellow-100"
                  style={{ width: "25px", height: "25px" }}
                />
                <div className="text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap bg-github-100 group-hover:opacity-100">
                  Github
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex flex-col items-center w-10 gap-2 group">
                <LinkedinIcon
                  className="duration-200 ease-in group-hover:-translate-y-2 group-hover:scale-125 group-hover:fill-linkedin-100 fill-customYellow-100"
                  style={{ width: "25px", height: "25px" }}
                />
                <div className="text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 text-customBlue-100 top-full whitespace-nowrap bg-linkedin-100 group-hover:opacity-100">
                  Linkedin
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
