import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileEdit } from 'lucide-react';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog-posts';

const EditProjectsPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/admin" className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Admin
        </Link>

        <h1 className="text-4xl font-bold mb-12">Edit Projects</h1>

        <div className="space-y-12">
          {/* Work Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
            <div className="grid gap-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/admin/edit/${project.id}?type=experience`}
                  className="bg-zinc-800 p-4 rounded-lg border border-accent-500/20 hover:border-accent-500/40 transition-colors flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-medium text-lg">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.role} • {project.duration}</p>
                  </div>
                  <FileEdit className="w-5 h-5 text-accent-500" />
                </Link>
              ))}
            </div>
          </section>

          {/* Personal Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Personal Projects</h2>
            <div className="grid gap-4">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/admin/edit/${post.id}?type=project`}
                  className="bg-zinc-800 p-4 rounded-lg border border-accent-500/20 hover:border-accent-500/40 transition-colors flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-medium text-lg">{post.title}</h3>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                  </div>
                  <FileEdit className="w-5 h-5 text-accent-500" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditProjectsPage;