import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    navigate('/experience');
    return null;
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/experience" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Experience
        </Link>
        
        <article>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="mb-8">
            <span className="text-yellow-500">{project.role}</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-400">{project.duration}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-yellow-500"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="text-gray-300 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="mb-6">{project.description}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Designed and implemented the microservices architecture</li>
              <li>Optimized database queries and system performance</li>
              <li>Led the team in implementing best practices and coding standards</li>
              <li>Collaborated with frontend teams to design and implement APIs</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectPage;