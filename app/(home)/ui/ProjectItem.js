import React from "react";

import Image from "next/image";

export default function ProjectItem({ title, date, tag, icon, images }) {
  return (
    <div>
      <div className="flex justify-center w-full h-60">
        <Image
          src={images[0]}
          alt={title}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-between px-2 mt-2">
        <h2 className="text-lg font-bold text-customBlue-400">{title}</h2>
        <h3 className="text-md text-customBlue-400">{date}</h3>
      </div>
      <div className="flex flex-nowrap">
        {tag.map((tags, idx) => (
          <div
            key={idx}
            className="px-2 py-1 m-1 text-sm text-center rounded-full h-fit text-customBlue-100 bg-customBlue-300">
            {tags}
          </div>
        ))}
      </div>
    </div>
  );
}
