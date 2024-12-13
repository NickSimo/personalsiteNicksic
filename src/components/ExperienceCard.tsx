import React from 'react';
import { Experience } from '../types';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 hover:shadow-xl transition-shadow border border-accent-500/20">
      <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
      
      <div className="flex flex-col space-y-2 mb-4 text-gray-400">
        <div className="flex items-center">
          <Building className="w-4 h-4 mr-2 text-accent-500" />
          <span>{experience.company}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-accent-500" />
          <span>{experience.location}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-accent-500" />
          <span>{experience.period}</span>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{experience.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-accent-500 mb-2">Key Responsibilities:</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {experience.highlights.map((highlight, index) => (
            <li key={index} className="text-sm">{highlight}</li>
          ))}
        </ul>
      </div>

      {experience.projects && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-accent-500 mb-2">Notable Projects:</h4>
          <div className="space-y-3">
            {experience.projects.map((project, index) => (
              <div key={index} className="text-sm">
                <div className="font-medium text-white">{project.name}</div>
                <div className="text-gray-400 text-xs mb-1">{project.period}</div>
                <p className="text-gray-300 mb-1">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-xs rounded-full bg-zinc-700 text-accent-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-zinc-700 text-accent-500"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};