
import React, { useState, useMemo } from 'react';
import { MOCK_BLOG_POSTS } from '../constants';
import BlogPostCard from '../components/BlogPostCard';
import { PostCategory } from '../types';

const categories = ['All', ...Object.values(PostCategory)];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return MOCK_BLOG_POSTS;
    }
    return MOCK_BLOG_POSTS.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="animate-fade-in-up">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-black tracking-tight text-white">The AutoPulse Blog</h1>
        <p className="mt-4 text-lg text-gray-400">Your source for drifting news, guides, and culture.</p>
      </header>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm md:text-base font-semibold border-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-brand-red border-brand-red text-white'
                : 'bg-transparent border-gray-700 text-gray-400 hover:border-brand-red hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Post Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
