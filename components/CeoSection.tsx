import React from 'react';
import AnimatedSection from './AnimatedSection';

const CeoSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto glass-morphism rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-500/10">
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <div className="ceo-image-wrapper">
                <img src="/assets/vishnu.jpeg" className="ceo-photo" />
              </div>
              <div className="text-center">
                <h3 className="font-orbitron text-3xl font-bold text-glow">Vishnu Teja</h3>
                <p className="text-cyan-300 text-lg font-semibold mt-1">Founder & CEO, Athera AI (Age: 17)</p>
                <blockquote className="mt-6 border-l-4 border-cyan-500 pl-4 italic text-gray-300">
                  “Intelligence shouldn’t belong to machines alone. It should empower humanity. Athera AI is my vision of a world where technology becomes a companion, a guide, and a generator of limitless possibilities.”
                </blockquote>
                <p className="mt-6 text-gray-400 leading-relaxed">
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