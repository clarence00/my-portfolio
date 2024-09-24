import React from "react";

import Image from "next/image";

export default function ProjectItem({
  title,
  date,
  tag,
  icon,
  description,
  expanded,
  images,
}) {
  return (
    <div className="`p-4 rounded-lg transition-all duration-300 ${expanded ? 'bg-customBlue-100' : 'bg-customBlue-200'}`">
      <Image
        src={images[0]}
        alt={title}
        className="w-full h-auto rounded-lg bg-customBlue-200"
        height={20}
        width={20}
      />
      <div className="flex justify-between px-4 mt-2">
        <h2 className="text-lg font-bold text-customBlue-400">{title}</h2>
        <h3 className="text-md text-customBlue-400">{date}</h3>
      </div>
      {tag && (
        <ul className="px-2 text-sm font-bold text-customBlue-100">
          {tag.map((tags, idx) => (
            <li
              key={idx}
              className="inline-block px-2 py-1 m-1 rounded-full bg-customBlue-300">
              {tags}
            </li>
          ))}
        </ul>
      )}

      {expanded && (
        <div className="mt-4">
          <p className="text-sm text-customBlue-400">{description}</p>
        </div>
      )}
    </div>
  );
}
