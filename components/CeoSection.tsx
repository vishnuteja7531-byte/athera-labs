import React from 'react';
import AnimatedSection from './AnimatedSection';

const CeoSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" delay={0.2} type="fade">
          <div className="max-w-full md:max-w-4xl mx-auto glass-morphism rounded-2xl p-6 md:p-12 shadow-2xl shadow-cyan-500/10">
            <div className="flex flex-col items-center gap-6 md:gap-12">
              <div className="ceo-image-wrapper">
                <img src="/assets/vishnu.jpeg" className="ceo-photo" alt="Vishnu Teja" />
              </div>
              <div className="text-center w-full">
                <h3 className="font-orbitron text-[clamp(1.2rem,4vw,1.8rem)] font-bold text-glow ceo-title">Vishnu Teja</h3>
                <p className="text-cyan-300 text-[clamp(0.9rem,3vw,1.2rem)] font-semibold mt-1 ceo-sub">Founder & CEO, Athera AI (Age: 17)</p>
                <blockquote className="mt-4 md:mt-6 border-l-4 border-cyan-500 pl-4 italic text-gray-300 text-sm md:text-base">
                  "Intelligence shouldn't belong to machines alone. It should empower humanity. Athera AI is my vision of a world where technology becomes a companion, a guide, and a generator of limitless possibilities."
                </blockquote>
                <p className="mt-4 md:mt-6 text-gray-400 leading-relaxed text-sm md:text-base">
                  Vishnu Teja is a young visionary innovator from India, passionate about artificial intelligence, futuristic design, cognitive systems, and digital transformation. He dreams of building AI that is accessible, powerful, and meaningful for everyone. He created Athera AI to revolutionize how students learn and how humans interact with intelligence.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CeoSection;