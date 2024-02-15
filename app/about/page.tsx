import React from 'react';

const AboutSection = () => {
  return (
    <div className="text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Empower Your Development with Teamster</h1>
        <p className="text-lg mb-4 font-medium text-gray-300">
            We&apos;re dedicated to crafting a tool that empowers software developers with quality and control over their projects.
        </p>
        <div className='space-y-4'>
          <p className="text-gray-400">
            As we&apos;ve observed the tech landscape, it&apos;s become clear that even the most promising startups can falter, their potential curtailed by the challenges of project management and the struggle to maintain momentum. In response, we envisioned a solution — a tool that would not only streamline the complexities of development but also return command to the creators.
          </p>
          <p className="text-gray-400">
            Our aspiration was to forge something beyond the conventional — a tool that is as agile and accessible as it is powerful. With Teamster, location and device constraints dissolve, giving way to a seamless, engaging experience that captivates and motivates. It&apos;s about more than mere management; it&apos;s about creating a space where projects thrive, where continuity is king, and progress is palpable.
          </p>
          <p className='text-gray-400'>
            Teamster isn&apos;t just an application; it&apos;s the pulse of productivity, the heartbeat of development projects. It&apos;s designed to invigorate and sustain your projects, transforming the way work unfolds. With Teamster, every venture is seen through to its fruition. We&apos;re not just building a tool; we&apos;re laying down a pathway to success, crafted for the journey of your projects from inception to completion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
