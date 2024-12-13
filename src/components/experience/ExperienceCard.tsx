import React from 'react';
import { Experience } from '../../types';
import CompanyInfo from './CompanyInfo';
import HighlightsList from './HighlightsList';
import ProjectList from './ProjectList';
import TechnologyTags from './TechnologyTags';

interface ExperienceCardProps {
  experience: Experience;
  preview?: boolean;
}

const ExperienceCard = ({ experience, preview = false }: ExperienceCardProps) => {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 hover:shadow-xl transition-shadow border border-accent-500/20">
      <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
      <CompanyInfo company={experience.company} location={experience.location} period={experience.period} />
      <p className="text-gray-300 mb-4">{experience.description}</p>

      {!preview && (
        <>
          <HighlightsList highlights={experience.highlights} />
          {experience.projects && <ProjectList projects={experience.projects} />}
          {experience.technologies && <TechnologyTags technologies={experience.technologies} />}
        </>
      )}
    </div>
  );
};

export default ExperienceCard;