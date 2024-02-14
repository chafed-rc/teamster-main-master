import React from 'react';



const MiniFeatureSection: React.FC = () => {
  const miniFeatures = [
    {
      title: "Code Together",
      description: "Live coding sessions from anywhere."
    },
    {
      title: "Filter your work",
      description: "See only what's relevant for you."
    },
    {
      title: "Whiteboard Feature",
      description: "Vision your project with our easy to use whiteboard."
    },

    {
      title: "Live-Chat",
      description: "Send messages and voice memos to your peers."
    },
    {
      title: "Divide and Conquer",
      description: "Break down your work load with our task manager."
    },
    {
      title: "Connect on the Go",
      description: "Join from any device, from anywhere."
    },
    // ... add other mini features if needed
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-12">
        {miniFeatures.map((feature, index) => (
          <div key={index} className="text-white">
            <div className="flex flex-col">
              <div>
                <h4 className="font-semibold text-white inline">{feature.title}.</h4>
                <p className="text-sm text-gray-300 inline ml-2 break-words" style={{ maxWidth: 'calc(100% - 2rem)' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniFeatureSection;
