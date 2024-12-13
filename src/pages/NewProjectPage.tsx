import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createNewProject } from '../utils/projectUtils';

const NewProjectPage = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<'project' | 'experience'>('project');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    technologies: '',
    role: '',
    duration: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createNewProject({ type, ...formData });
      navigate('/admin');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/admin" className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Admin
        </Link>

        <h1 className="text-4xl font-bold mb-8">Add New {type === 'project' ? 'Personal Project' : 'Work Experience'}</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-zinc-800 p-6 rounded-lg border border-accent-500/20">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content Type
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="project"
                    checked={type === 'project'}
                    onChange={(e) => setType(e.target.value as 'project' | 'experience')}
                    className="form-radio text-accent-500 focus:ring-accent-500"
                  />
                  <span className="ml-2">Personal Project</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="experience"
                    checked={type === 'experience'}
                    onChange={(e) => setType(e.target.value as 'project' | 'experience')}
                    className="form-radio text-accent-500 focus:ring-accent-500"
                  />
                  <span className="ml-2">Work Experience</span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                  Short Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="technologies" className="block text-sm font-medium text-gray-300 mb-1">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  id="technologies"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
                  required
                />
              </div>

              {type === 'experience' && (
                <>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="e.g., 2022 - 2023"
                      className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                  Publication Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
                  Content (Markdown supported)
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={10}
                  className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent-500 text-zinc-900 rounded-lg font-medium hover:bg-accent-400 transition-colors"
          >
            Create {type === 'project' ? 'Project' : 'Experience'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProjectPage;