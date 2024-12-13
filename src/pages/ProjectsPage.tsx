import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12">Personal Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/project/${post.id}`}>
              <ProjectCard project={{
                id: post.id,
                title: post.title,
                description: post.excerpt,
                technologies: post.tags,
                role: "Developer",
                duration: post.date
              }} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;