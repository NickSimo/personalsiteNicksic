import React from 'react';

interface TechnologyTagsProps {
  technologies: string[];
  small?: boolean;
}

const TechnologyTags = ({ technologies, small = false }: TechnologyTagsProps) => {
  const baseClasses = "rounded-full bg-zinc-700 text-accent-500";
  const sizeClasses = small ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <div className="flex flex-wrap gap-1">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className={`${baseClasses} ${sizeClasses}`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechnologyTags;