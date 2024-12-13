import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-900 border-b border-accent-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-accent-500">
              <Home className="w-6 h-6" />
            </Link>
            <div className="hidden md:flex space-x-8">
              <NavLink to="/#about">About</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/projects">Personal Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          
          <button 
            className="md:hidden text-accent-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-accent-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/experience" onClick={toggleMenu}>Experience</MobileNavLink>
            <MobileNavLink to="/projects" onClick={toggleMenu}>Personal Projects</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-accent-500 transition-colors duration-200 text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-accent-500 hover:bg-zinc-800 rounded-md transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navigation;