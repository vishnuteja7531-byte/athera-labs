import React from 'react';
import AnimatedSection from './AnimatedSection';

const DownloadAppSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4" id="download">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4">
              Download Athera AI
            </h2>
            <p className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Take the future of intelligence with you wherever you go
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="flex items-center justify-center font-orbitron font-bold px-6 py-4 bg-black border-2 border-cyan-500 text-cyan-400 rounded-xl transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_#0fe6ff] transform hover:scale-105 w-full sm:w-auto">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 12.04C17.02 12.04 17 12.04 16.97 12.04C14.38 11.94 12.11 13.85 10.82 15.5C9.18 13.41 6.39 11.9 4.5 11.9C3.5 11.9 2 12.5 2 14.21C2 17.8 5.78 20.5 8.5 20.5C9.88 20.5 11.5 19.5 12.38 18.3C13.25 19.5 14.88 20.5 16.25 20.5C19.88 20.5 22 17.25 22 14.21C22 12.41 20.41 11.9 19.5 11.9C18.38 11.9 17.38 11.94 17.05 12.04ZM15.5 3C15.5 4.38 14.38 5.5 13 5.5C11.62 5.5 10.5 4.38 10.5 3C10.5 1.62 11.62 0.5 13 0.5C14.38 0.5 15.5 1.62 15.5 3Z"/>
                </svg>
                Download for iOS
              </button>
              
              <button className="flex items-center justify-center font-orbitron font-bold px-6 py-4 bg-black border-2 border-cyan-500 text-cyan-400 rounded-xl transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_#0fe6ff] transform hover:scale-105 w-full sm:w-auto">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 12.04C17.02 12.04 17 12.04 16.97 12.04C14.38 11.94 12.11 13.85 10.82 15.5C9.18 13.41 6.39 11.9 4.5 11.9C3.5 11.9 2 12.5 2 14.21C2 17.8 5.78 20.5 8.5 20.5C9.88 20.5 11.5 19.5 12.38 18.3C13.25 19.5 14.88 20.5 16.25 20.5C19.88 20.5 22 17.25 22 14.21C22 12.41 20.41 11.9 19.5 11.9C18.38 11.9 17.38 11.94 17.05 12.04ZM15.5 3C15.5 4.38 14.38 5.5 13 5.5C11.62 5.5 10.5 4.38 10.5 3C10.5 1.62 11.62 0.5 13 0.5C14.38 0.5 15.5 1.62 15.5 3Z"/>
                </svg>
                Download for Android
              </button>
            </div>
            
            <p className="mt-8 text-gray-500 text-sm">
              Available soon on both app stores
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DownloadAppSection;
