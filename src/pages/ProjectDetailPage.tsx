import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog-posts';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = blogPosts.find(p => p.id === id);

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/projects" className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        <article>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="mb-8">
            <span className="text-accent-500">Personal Project</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-400">{project.date}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-accent-500"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="markdown-content text-gray-300">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg my-4"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-accent-500" {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="ml-4" {...props} />,
                a: ({node, ...props}) => (
                  <a 
                    className="text-accent-500 hover:text-accent-400 underline" 
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props} 
                  />
                ),
                img: ({node, ...props}) => (
                  <img 
                    className="rounded-lg my-4 w-full"
                    {...props}
                    loading="lazy"
                  />
                ),
                video: ({node, ...props}) => (
                  <video 
                    className="rounded-lg my-4 w-full"
                    controls
                    {...props}
                  />
                ),
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-accent-500 pl-4 italic my-4" {...props} />
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetailPage;