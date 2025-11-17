import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface Developer {
  id: number;
  name: string;
  role: string;
  description: string;
}

const developers: Developer[] = [
  {
    id: 1,
    name: "Draven Hale",
    role: "Frontend Engineer",
    description: "Specializes in cinematic UI, neon interfaces, and high-performance rendering."
  },
  {
    id: 2,
    name: "Nova Quinn",
    role: "AI Research Engineer",
    description: "Builds reasoning modules, embeddings, and cognitive pipeline optimizations."
  },
  {
    id: 3,
    name: "Kyro Vance",
    role: "Systems Architect",
    description: "Designs high-availability backends, parallel compute engines, and scaling logic."
  }
];

const DeveloperCard: React.FC<Developer & { index: number }> = ({ name, role, description, index }) => {
  return (
    <motion.div
      className="card-dev"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="avatar-dev"></div>
      <h3 className="font-orbitron text-xl font-bold text-cyan-300 mb-1">{name}</h3>
      <p className="text-cyan-400 text-sm mb-4">{role}</p>
      <p className="text-gray-300 text-sm leading-relaxed">"{description}"</p>
    </motion.div>
  );
};

const CoDevelopersSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4">
              Co-Developers Behind Athera AI
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the brilliant contributors building next-generation intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {developers.map((developer, index) => (
              <DeveloperCard key={developer.id} {...developer} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoDevelopersSection;