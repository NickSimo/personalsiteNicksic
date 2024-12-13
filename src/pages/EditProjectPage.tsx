import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog-posts';

const EditProjectPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get('type') as 'project' | 'experience';
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    technologies: '',
    role: '',
    duration: '',
    date: ''
  });

  useEffect(() => {
    if (type === 'experience') {
      const project = projects.find(p => p.id === id);
      if (!project) {
        navigate('/admin/edit-projects');
        return;
      }
      setFormData({
        title: project.title,
        description: project.description,
        content: '',
        technologies: project.technologies.join(', '),
        role: project.role,
        duration: project.duration,
        date: ''
      });
    } else {
      const post = blogPosts.find(p => p.id === id);
      if (!post) {
        navigate('/admin/edit-projects');
        return;
      }
      setFormData({
        title: post.title,
        description: post.excerpt,
        content: post.content,
        technologies: post.tags.join(', '),
        role: '',
        duration: '',
        date: post.date
      });
    }
  }, [id, type, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated form data:', { type, ...formData });
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/admin/edit-projects" className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects List
        </Link>

        <h1 className="text-4xl font-bold mb-8">
          Edit {type === 'project' ? 'Personal Project' : 'Work Experience'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-zinc-800 p-6 rounded-lg border border-accent-500/20">
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
                      className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg focus:outline-none focus:border-accent-500"
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
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent-500 text-zinc-900 rounded-lg font-medium hover:bg-accent-400 transition-colors"
          >
            Update {type === 'project' ? 'Project' : 'Experience'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProjectPage;