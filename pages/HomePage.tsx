import React from 'react';
import NewsletterForm from '../components/NewsletterForm';
import { Link } from 'react-router-dom';
import AutoPulseLogo from '../components/icons/AutoPulseLogo';
import { MOCK_BLOG_POSTS } from '../constants';
import BlogPostCard from '../components/BlogPostCard';
import SectionDivider from '../components/SectionDivider';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="text-center pt-16 pb-12">
        <AutoPulseLogo className="w-32 md:w-48 h-auto mx-auto text-gray-200" />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mt-6 mb-4">
          The Heartbeat of Drifting
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          We are the home for all things car culture. From grassroots drifting and advanced modification guides to the global competition scene, AutoPulse is your community and source for high-octane content.
        </p>
      </section>

      <SectionDivider />

      {/* Featured Guide CTA */}
      <section className="text-center">
        <h3 className="text-3xl font-bold text-white">Ready to Master the Slide?</h3>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Our comprehensive digital guide breaks down everything from basic physics to advanced techniques. Stop spinning out and start linking corners like a pro.
        </p>
        <div className="mt-8">
            <Link
                to="/resources"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-red to-brand-orange font-bold text-white rounded-md hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-red/30"
                >
                <span>Explore The Ultimate Guide</span>
                <svg className="w-5 h-5" xmlns="http://www.w.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Newsletter Section */}
      <section className="bg-light-dark py-16 rounded-xl border border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4 text-white">Get Ahead of the Curve</h3>
          <p className="text-lg text-gray-400 mb-8">Join our free weekly drift tips newsletter.</p>
          <NewsletterForm ctaText="Subscribe Now" />
        </div>
      </section>

      <SectionDivider />

      {/* Latest Blog Posts Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">From the Blog</h2>
          <p className="mt-4 text-lg text-gray-400">
            The latest tips, news, and stories from the drift scene.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOG_POSTS.slice(0, 3).map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block px-8 py-4 border-2 border-brand-red font-bold text-brand-red rounded-md hover:bg-brand-red hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
