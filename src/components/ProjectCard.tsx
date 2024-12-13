import React from 'react';
import { Project } from '../types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 hover:shadow-xl transition-shadow border border-accent-500/20">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="mb-4">
        <span className="text-sm text-accent-500">{project.role}</span>
        <span className="text-sm text-gray-500 ml-2">• {project.duration}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-zinc-700 text-accent-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;