import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ExperienceCard from '../components/experience/ExperienceCard';
import { experiences } from '../data/experience';
import { blogPosts } from '../data/blog-posts';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/project/ProjectCard';

const HomePage = () => {
  // Get the two most recent experiences
  const recentExperiences = experiences.slice(0, 2);

  return (
    <>
      <Hero />
      <AboutSection />

      <section id="experience" className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Experience</h2>
            <Link to="/experience" className="text-accent-500 hover:text-accent-400">
              View All Experience →
            </Link>
          </div>
          <div className="space-y-8">
            {recentExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} preview />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Personal Projects</h2>
            <Link to="/projects" className="text-accent-500 hover:text-accent-400">
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
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
      </section>

      <section id="contact" className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-8">
            <Link to="/contact" className="px-6 py-3 bg-accent-500 text-zinc-900 rounded-lg font-medium hover:bg-accent-400 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;