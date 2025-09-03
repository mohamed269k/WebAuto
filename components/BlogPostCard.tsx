
import React from 'react';
import type { BlogPost } from '../types';
import CategoryPill from './CategoryPill';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-light-dark rounded-xl overflow-hidden border border-gray-800 hover:border-brand-red/50 transition-all duration-300 group flex flex-col animate-fade-in-up">
      <div className="overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
           <CategoryPill category={post.category} />
           <p className="text-sm text-gray-500">{post.date}</p>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-brand-orange transition-colors">{post.title}</h3>
        <p className="text-gray-400 flex-grow">{post.excerpt}</p>
         <a href="#" className="mt-4 inline-block font-semibold text-brand-red hover:text-brand-orange transition-colors">
            Read More &rarr;
          </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
