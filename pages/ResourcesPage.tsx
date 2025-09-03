
import React from 'react';
import AutoPulseLogo from '../components/icons/AutoPulseLogo';
import CheckIcon from '../components/icons/CheckIcon';

const ResourcesPage: React.FC = () => {
  const GUMROAD_LINK = "https://autopulse.gumroad.com/l/drifting-guide"; // Placeholder link

  const features = [
    {
      title: 'The Secret Physics of the Slide:',
      description: 'Learn how weight transfer, traction loss, and slip angle are the forces you can control.'
    },
    {
      title: 'Step-by-Step Technique Guides:',
      description: 'From your first handbrake initiation and clutch kick to linking corners with fluid grace.'
    },
    {
      title: 'How to Choose & Build Your First Drift Car:',
      description: 'A complete breakdown of the best chassis, essential modifications, and tiered build plans for any budget.'
    },
    {
      title: "The Pro's Playbook:",
      description: 'Uncover the judging criteria, rules, and tandem battle strategies that win championships.'
    }
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        
        <AutoPulseLogo className="w-48 h-auto mx-auto text-gray-200" />
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-800/50 -mt-10 md:-mt-14 select-none" aria-hidden="true">
          AutoPulse
        </h1>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red mt-4 uppercase">
          Unleash Your Inner Drift King
        </h2>
        
        <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          From the winding mountain passes of Japan to the high-speed battlegrounds of professional competition, drifting is the ultimate expression of car control. It's a breathtaking fusion of speed, style, and precision. But how do you go from being a spectator in the stands to a driver in control of the slide? This guide is your definitive roadmap. <strong>Drifting - The Ultimate Guide (2024-2025)</strong> breaks down the art and science of going sideways. We leave no stone unturned, taking you from the absolute fundamentals of vehicle physics to the advanced strategies used by world champions.
        </p>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8">Inside, You Will Master:</h3>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckIcon className="w-7 h-7 text-brand-red flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">
                  <strong className="text-white">{feature.title}</strong> {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-16">
           <a
              href={GUMROAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-brand-red font-bold text-white text-xl rounded-md hover:bg-brand-orange transform hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-red/40 uppercase tracking-wider"
            >
              Get The Ultimate Guide - $29.99
            </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
