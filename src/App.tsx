import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import NewProjectPage from './pages/NewProjectPage';
import EditProjectsPage from './pages/EditProjectsPage';
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/new-project" element={<NewProjectPage />} />
          <Route path="/admin/edit-projects" element={<EditProjectsPage />} />
          <Route path="/admin/edit/:id" element={<EditProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;