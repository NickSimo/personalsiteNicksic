import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog-posts';
import BlogPostCard from '../components/BlogPostCard';
import { ArrowLeft } from 'lucide-react';

const BlogPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12">Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <BlogPostCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;