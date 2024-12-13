import React from 'react';
import { Terminal, Database, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <Terminal className="w-8 h-8 text-accent-500" />
          <Database className="w-8 h-8 text-accent-500" />
          <Code className="w-8 h-8 text-accent-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Senior Backend Developer & 
          <span className="text-accent-500"> Java Specialist</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Building robust backend solutions with Java Spring and automated testing expertise
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/experience"
            className="px-6 py-3 bg-accent-500 text-zinc-900 rounded-lg font-medium hover:bg-accent-400 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border border-accent-500 text-accent-500 rounded-lg font-medium hover:bg-accent-500/10 transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;