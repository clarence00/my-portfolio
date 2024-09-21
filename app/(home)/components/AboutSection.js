import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="flex-col flex justify-center mt-2 bg-customBlue-200 w-[70%] m-auto mb-20 rounded-2xl lg:flex-row shadow-lg shadow-customYellow-100/10">
      <div className="h-content md:w-[50%] m-6 md:text-left text-center md:m-10 md:max-lg:w-full md:max-lg:my-4 md:max-lg:mx-0">
        <h1 className="pb-8 text-3xl font-bold md:text-3xl md:pl-2 text-customBlue-400 md:max-lg:px-6">
          About
        </h1>
        <p className="text-md md:text-lg text-customBlue-300 md:max-lg:px-6">
          I am a fresh computer engineering graduate, passionate about web
          development. I have hands-on experience with both front-end and
          back-end technologies, particularly in ReactJs and Flutter. I’ve also
          led the development of 2 mobile games and designed assets and
          wireframes for both desktops and mobile platforms in our projects.
        </p>
      </div>
      <div className="md:w-[50%] flex md:max-lg:flex-row flex-col py-2 md:pr-2 justify-center items-center md:max-lg:w-[100%] md:max-lg:pr-0">
        <div className="p-4 m-4 mb-2 rounded-xl bg-customBlue-100 h-content w-[85%] md:max-lg:py-4 md:max-lg:m-4">
          <a
            href="#"
            className="font-bold text-md text-customBlue-400 md:text-lg">
            Polytechnic University of the Philippines
          </a>
          <div className="flex justify-between mt-2 italic">
            <h6 className="text-sm text-customBlue-300">College</h6>
            <h6 className="text-sm text-customBlue-300">2020-2024</h6>
          </div>
          <h6 className="text-sm text-customBlue-300">
            Bachelor of Science in Computer Engineering, Specializing in System
            Development
          </h6>
        </div>
        <div className="p-4 m-4 mt-2 bg-customBlue-100 h-content rounded-xl w-[85%] md:max-lg:py-6 md:max-lg:m-4">
          <a
            href="#"
            className="font-bold text-md text-customBlue-400 md:text-lg">
            Rizal High School
          </a>
          <div className="flex justify-between mt-2 italic">
            <h6 className="text-sm text-customBlue-300">Senior High School</h6>
            <h6 className="text-sm text-customBlue-300">2018-2020</h6>
          </div>
          <h6 className="text-sm text-customBlue-300">Arts and Design</h6>
          <div className="flex justify-between mt-4 italic">
            <h6 className="text-sm text-customBlue-300">Junior High School</h6>
            <h6 className="text-sm text-customBlue-300">2014-2018</h6>
          </div>
          <h6 className="text-sm text-customBlue-300">
            Science, Technology, and Engineering
          </h6>
        </div>
      </div>
    </div>
  );
}
