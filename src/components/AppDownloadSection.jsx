import React from 'react';

const AppDownloadSection = () => {
  return (
    <section id="download-app" className="w-full bg-white pt-2 pb-0 px-4 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-12">
        {/* Text Side */}
        <div className="text-center md:text-left relative z-10">
          <h2 className="text-lg md:text-lg lg:text-xl font-bold text-gray-900 mb-1 tracking-tight">
            Download the <span className="gradient-text">Budlee AI</span> App
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Available on all your devices.
          </p>
        </div>

        {/* Buttons Side */}
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <a
            href="https://play.google.com/store/apps/details?id=com.budlee.ai.b2c"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg rounded-xl overflow-hidden border border-gray-100"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10 md:h-12"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/budlee-ai/id6761577103"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg rounded-xl overflow-hidden border border-gray-100"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-10 md:h-12 bg-black p-[1px]"
            />
          </a>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-60 -ml-32 -mb-32 pointer-events-none"></div>
    </section>
  );
};

export default AppDownloadSection;
