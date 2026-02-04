import React from 'react';
import { MobileAnimatedSection, MobileRoadmapItem } from './MobileAnimations.jsx';

const roadmapData = [
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

const MobileRoadmapSection = () => {
  return (
    <section className="py-12 w-full px-4" id="roadmap">
      <div className="container mx-auto px-4">
        <MobileAnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-orbitron text-2xl font-bold text-glow mb-3">
              Development Roadmap
            </h2>
            <p className="text-base text-gray-400 max-w-md mx-auto">
              Our journey to revolutionize artificial intelligence
            </p>
          </div>
          
          <div className="relative max-w-md mx-auto">
            {/* Timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 to-cyan-500/5"></div>
            
            <div className="space-y-2">
              {roadmapData.map((item, index) => (
                <MobileRoadmapItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </MobileAnimatedSection>
      </div>
    </section>
  );
};

export default MobileRoadmapSection;