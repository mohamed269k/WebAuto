
import React from 'react';
import { PostCategory } from '../types';

interface CategoryPillProps {
  category: PostCategory;
}

const categoryColors: Record<PostCategory, string> = {
  [PostCategory.TIPS]: 'bg-blue-600/20 text-blue-300 border border-blue-500/50',
  [PostCategory.MODS]: 'bg-green-600/20 text-green-300 border border-green-500/50',
  [PostCategory.SCENE]: 'bg-purple-600/20 text-purple-300 border border-purple-500/50',
  [PostCategory.CULTURE]: 'bg-yellow-600/20 text-yellow-300 border border-yellow-500/50',
};

const CategoryPill: React.FC<CategoryPillProps> = ({ category }) => {
  return (
    <span className={`px-3 py-1 text-xs font-bold rounded-full ${categoryColors[category]}`}>
      {category}
    </span>
  );
};

export default CategoryPill;
