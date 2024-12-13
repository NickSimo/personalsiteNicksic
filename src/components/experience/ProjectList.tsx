import React from 'react';
import TechnologyTags from './TechnologyTags';

interface Project {
  name: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-accent-500 mb-2">Notable Projects:</h4>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="text-sm">
            <div className="font-medium text-white">{project.name}</div>
            <div className="text-gray-400 text-xs mb-1">{project.period}</div>
            <p className="text-gray-300 mb-1">{project.description}</p>
            <TechnologyTags technologies={project.technologies} small />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;