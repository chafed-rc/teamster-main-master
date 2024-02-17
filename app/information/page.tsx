'use client'
import React from 'react';
import Navbar from '../components/nav';

const LearnMoreSection = () => {
  return (
    <>
      <div className="text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Discover the Future of Team Collaboration with Teamster</h1>
          <p className="text-lg mb-4 font-medium text-gray-300">
              Dive deeper into how Teamster is revolutionizing the way teams collaborate, manage projects, and drive innovation.
          </p>
          <div className='space-y-4'>
            <p className="text-gray-400">
              In today’s fast-paced development environment, teams need more than just tools; they need solutions that bring out their best. Teamster is designed to be that solution, offering a blend of intuitive design, powerful features, and seamless integration to empower teams like never before.
            </p>
            <p className="text-gray-400">
              From startup ventures to established tech giants, Teamster provides the versatility needed to adapt to any project's demands. Whether you’re coordinating a global team, tracking the progress of your latest features, or brainstorming the next big idea, Teamster brings your entire workflow into a cohesive, dynamic interface.
            </p>
            <p className='text-gray-400'>
              With features like real-time collaboration, advanced analytics, and customizable dashboards, Teamster not only simplifies project management but turns it into a strategic advantage. It’s about elevating your team’s potential and paving the way for what’s next.
            </p>
            <p className="text-gray-400">
              At the heart of Teamster is our commitment to innovation and excellence. We’re constantly exploring new ways to enhance the platform, driven by feedback from our community of developers and project managers. Because at Teamster, we believe the best way to predict the future is to invent it.
            </p>
            <p className="text-gray-400">
              Ready to transform the way your team works? Join us on this journey and see just how far Teamster can take you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMoreSection;
