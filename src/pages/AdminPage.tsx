import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { PlusCircle, FileEdit, LogOut } from 'lucide-react';

const AdminPage = () => {
  const { isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="flex items-center px-4 py-2 text-accent-500 hover:text-accent-400 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to="/admin/new-project"
            className="bg-zinc-800 p-6 rounded-lg border border-accent-500/20 hover:border-accent-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <PlusCircle className="w-6 h-6 text-accent-500 mr-3" />
              <h2 className="text-xl font-semibold">Add New Project</h2>
            </div>
            <p className="text-gray-400">Create a new project or blog post to showcase your work</p>
          </Link>

          <Link
            to="/admin/edit-projects"
            className="bg-zinc-800 p-6 rounded-lg border border-accent-500/20 hover:border-accent-500/40 transition-colors"
          >
            <div className="flex items-center mb-4">
              <FileEdit className="w-6 h-6 text-accent-500 mr-3" />
              <h2 className="text-xl font-semibold">Edit Projects</h2>
            </div>
            <p className="text-gray-400">Modify or delete existing projects and blog posts</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;