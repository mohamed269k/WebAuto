
import React from 'react';
import NewsletterForm from '../components/NewsletterForm';

const NewsletterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-16 md:py-24 animate-fade-in-up">
      <div className="w-full max-w-3xl text-center bg-light-dark p-8 md:p-12 rounded-xl border border-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Subscribe to AutoPulse Weekly
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Get exclusive drift tips, in-depth setup guides, and insider news from the scene delivered straight to your inbox every week.
        </p>
        <NewsletterForm ctaText="Sign Me Up!" />
      </div>
    </div>
  );
};

export default NewsletterPage;
