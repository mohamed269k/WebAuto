
export enum PostCategory {
  TIPS = 'Drifting Tips & Techniques',
  MODS = 'Car Modifications & Setups',
  SCENE = 'Drift Scene & Competitions',
  CULTURE = 'Car Culture & Lifestyle',
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: PostCategory;
  date: string;
}

export interface NavLink {
  name: string;
  path: string;
}
