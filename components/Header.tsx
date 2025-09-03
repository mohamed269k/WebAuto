
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import AutoPulseLogo from './icons/AutoPulseLogo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeLinkStyle = {
    color: '#ff003c',
    textShadow: '0 0 5px #ff003c',
  };

  const linkClasses = "text-lg font-semibold text-gray-300 hover:text-brand-red transition-colors duration-300";

  return (
    <header className="bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 text-2xl font-black tracking-tighter text-gray-100">
            <AutoPulseLogo className="w-12 h-auto text-brand-red" />
            <span>AutoPulse</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkClasses}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-brand-red focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-light-dark animate-fade-in-up">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkClasses}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
