import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center my-16 md:my-20" aria-hidden="true">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-800"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-dark-bg px-4">
          <svg className="w-8 h-8 text-brand-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h3l2.25 9L12 3l2.25 18h3" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SectionDivider;
