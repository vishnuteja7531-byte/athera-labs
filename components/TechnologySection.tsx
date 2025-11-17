
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface TechDiagramNodeProps {
  label: string;
  className?: string;
  delay?: string;
}

const TechDiagramNode: React.FC<TechDiagramNodeProps> = ({ label, className, delay = '0s' }) => (
    <div className={`relative p-4 text-center glass-morphism rounded-lg border border-cyan-500/20 ${className}`}>
        <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-[flow_4s_ease-in-out_infinite]"
            style={{ animationDelay: delay }}
        ></div>
        <span className="relative z-10 font-orbitron text-sm md:text-base">{label}</span>
        <style>{`
            @keyframes flow {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        `}</style>
    </div>
);

const TechnologySection: React.FC = () => {
    return (
        <section className="py-12 md:py-20 lg:py-32 w-full px-4">
            <div className="container mx-auto px-4">
                <AnimatedSection direction="up" delay={0.2} type="fade">
                    <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-center text-glow mb-8 md:mb-16">
                        Athera's Architecture
                    </h2>
                    <div className="max-w-full md:max-w-5xl mx-auto space-y-6 md:space-y-12">
                        {/* Layer 1: Input/Output */}
                        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 items-center">
                            <TechDiagramNode label="Input/Output Flow" />
                            <div className="h-1 w-full md:w-auto bg-cyan-500/20 relative animate-border-flow"><div className="w-full h-full bg-cyan-900"></div></div>
                             <TechDiagramNode label="Neural Frequency Layer" delay="0.5s"/>
                        </div>
                        {/* Layer 2: Reasoning Engine */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                           <TechDiagramNode label="Cognitive Reasoning Engine" className="md:col-span-2" delay="1s"/>
                        </div>
                        {/* Layer 3: Core & Memory */}
                        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 items-center">
                            <TechDiagramNode label="Contextual Intelligence Model" delay="1.5s"/>
                            <div className="h-1 w-full md:w-auto bg-cyan-500/20 relative animate-border-flow"><div className="w-full h-full bg-cyan-900"></div></div>
                            <TechDiagramNode label="Memory-Enhanced Learning Cycle" delay="2s"/>
                        </div>
                         {/* Layer 4: Realtime Response */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                            <TechDiagramNode label="Real-Time Response System" className="md:col-span-2" delay="2.5s"/>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default TechnologySection;
