import React from 'react';
import { BlogPost } from '../types';
import { Calendar } from 'lucide-react';

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 hover:shadow-xl transition-shadow border border-accent-500/20">
      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
      <div className="flex items-center text-gray-500 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">{post.date}</span>
      </div>
      <p className="text-gray-400 mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-zinc-700 text-accent-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogPostCard;