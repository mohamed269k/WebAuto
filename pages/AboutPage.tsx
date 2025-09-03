
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-white mb-6">About AutoPulse</h1>
          <div className="space-y-6 text-lg text-gray-400">
            <p>
              AutoPulse wasn't born in a boardroom; it was forged in the garage, late at night, with the smell of tire smoke and race fuel in the air. We are a collective of drivers, builders, and storytellers united by a single passion: the art of going sideways.
            </p>
            <p>
              We live and breathe drifting, JDM legends, and the relentless pursuit of sideways perfection. Our mission is to build a community where enthusiasts, from beginners learning to clutch kick to seasoned pros, can share knowledge, celebrate the culture, and push the limits of what's possible on four wheels.
            </p>
            <p>
              This is more than a brand. It's the heartbeat of drifting. Welcome to AutoPulse.
            </p>
          </div>
        </div>
        <div>
            <img 
                src="https://picsum.photos/seed/about/600/700" 
                alt="Drift car in action"
                className="rounded-lg shadow-2xl object-cover border-4 border-gray-800"
            />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
