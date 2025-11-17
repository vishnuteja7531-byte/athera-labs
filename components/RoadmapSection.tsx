import React from 'react';
import AnimatedSection from './AnimatedSection';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: 'Frontend Release',
    description: 'Launch of the Athera AI web platform with core features and responsive design.',
    status: 'completed'
  },
  {
    phase: 'Phase 2',
    title: 'AI Core Integration',
    description: 'Integration of the Athera Core with advanced reasoning capabilities.',
    status: 'in-progress'
  },
  {
    phase: 'Phase 3',
    title: 'App Launch',
    description: 'Release of iOS and Android applications for mobile access.',
    status: 'upcoming'
  },
  {
    phase: 'Phase 4',
    title: 'Athera Cloud',
    description: 'Cloud infrastructure for enterprise-scale deployments and API access.',
    status: 'upcoming'
  },
  {
    phase: 'Phase 5',
    title: 'Global Rollout',
    description: 'Worldwide availability with multi-language support and regional optimization.',
    status: 'upcoming'
  }
];

const RoadmapSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4" id="roadmap">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4">
              Development Roadmap
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
              Our journey to revolutionize artificial intelligence
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {roadmapData.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${
                      item.status === 'completed' ? 'bg-green-400' : 
                      item.status === 'in-progress' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-600'
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 mt-12 md:mt-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-morphism p-6 rounded-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                      <span className="font-orbitron text-cyan-400 text-sm font-bold tracking-wider">{item.phase}</span>
                      <h3 className="font-orbitron text-xl font-bold text-white mt-2">{item.title}</h3>
                      <p className="text-gray-300 mt-3">{item.description}</p>
                      <div className="mt-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'completed' ? 'bg-green-900/30 text-green-400' : 
                          item.status === 'in-progress' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-gray-800/30 text-gray-400'
                        }`}>
                          {item.status === 'completed' ? 'Completed' : 
                           item.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for mobile */}
                  <div className="md:w-2/12 h-16 md:h-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RoadmapSection;
