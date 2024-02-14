import React from 'react';

const FeatureSection = () => {
  return (
    <div className="px-4 py-5 mt-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Unmatched Features</h2>
        <p className="text-gray-300">Discover the unique aspects that make our tool stand out.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-5 md:grid md:grid-cols-3 md:gap-8">
        {/* Card 1 */}
        <div className="bg-[#181818] border-2 rounded-lg p-6 md:p-8 text-white card-container animated-border">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Seamless Integration</h3>
            <p className="text-sm text-gray-300">Connect your workflows with ease for a smooth experience.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#181818] border-2 rounded-lg p-6 md:p-8 text-white card-container animated-border">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Real-Time Collaboration</h3>
            <p className="text-sm text-gray-300">Work together with your team in real time, anywhere.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#181818] border-2 rounded-lg p-6 md:p-8 text-white card-container animated-border">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Advanced Analytics</h3>
            <p className="text-sm text-gray-300">Gain insights with advanced reporting and analytics tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
