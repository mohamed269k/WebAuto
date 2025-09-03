
import type { BlogPost, NavLink } from './types';
import { PostCategory } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Newsletter', path: '/newsletter' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Mastering the Clutch Kick: A Beginner\'s Guide',
    excerpt: 'Learn the fundamental technique of clutch kicking to initiate and control your drifts like a pro. We break it down step-by-step.',
    imageUrl: 'https://picsum.photos/seed/drift1/800/600',
    category: PostCategory.TIPS,
    date: '2024-07-15',
  },
  {
    id: 2,
    title: 'Top 5 Suspension Setups for a Nissan S13',
    excerpt: 'Dialing in your suspension is key. Discover the best coilovers, control arms, and alignment specs for the iconic S-chassis.',
    imageUrl: 'https://picsum.photos/seed/carMod1/800/600',
    category: PostCategory.MODS,
    date: '2024-07-12',
  },
  {
    id: 3,
    title: 'Formula Drift Long Beach: 2024 Season Opener Recap',
    excerpt: 'The walls were hungry and the drivers were hungrier. Get the full rundown of the thrilling battles from the streets of Long Beach.',
    imageUrl: 'https://picsum.photos/seed/competition1/800/600',
    category: PostCategory.SCENE,
    date: '2024-07-10',
  },
  {
    id: 4,
    title: 'The Enduring Legacy of the JDM Legends',
    excerpt: 'From the Skyline GT-R to the Supra MK4, we explore why these Japanese icons continue to dominate car culture worldwide.',
    imageUrl: 'https://picsum.photos/seed/culture1/800/600',
    category: PostCategory.CULTURE,
    date: '2024-07-08',
  },
  {
    id: 5,
    title: 'Weight Transfer: The Unseen Force of Drifting',
    excerpt: 'Understanding how to manipulate your car\'s weight is crucial for smooth transitions and aggressive entries. Here\'s what you need to know.',
    imageUrl: 'https://picsum.photos/seed/drift2/800/600',
    category: PostCategory.TIPS,
    date: '2024-07-05',
  },
  {
    id: 6,
    title: 'Choosing the Right Differential: Welded vs. LSD',
    excerpt: 'A deep dive into the pros and cons of welded differentials versus Limited-Slip Differentials for your drift car.',
    imageUrl: 'https://picsum.photos/seed/carMod2/800/600',
    category: PostCategory.MODS,
    date: '2024-07-01',
  },
    {
    id: 7,
    title: 'D1GP vs. Formula Drift: A Tale of Two Styles',
    excerpt: 'Explore the key differences in judging, style, and car builds between Japan\'s D1 Grand Prix and the USA\'s Formula Drift.',
    imageUrl: 'https://picsum.photos/seed/competition2/800/600',
    category: PostCategory.SCENE,
    date: '2024-06-28',
  },
  {
    id: 8,
    title: 'The Rise of "Missile" Cars in Grassroots Drifting',
    excerpt: 'They might not be pretty, but missile cars are the heart of grassroots drifting. We look at the culture of seat time over style.',
    imageUrl: 'https://picsum.photos/seed/culture2/800/600',
    category: PostCategory.CULTURE,
    date: '2024-06-25',
  },
];
