
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-dark border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} AutoPulse. All Rights Reserved. Built for sideways perfection.</p>
      </div>
    </footer>
  );
};

export default Footer;
