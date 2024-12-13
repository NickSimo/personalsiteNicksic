import React from 'react';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experience';
import ExperienceCard from '../components/experience/ExperienceCard';
import { ArrowLeft } from 'lucide-react';

const ExperiencePage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12">Professional Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;