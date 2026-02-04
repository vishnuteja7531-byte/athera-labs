import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Computer Science Student",
    company: "MIT",
    content: "Athera AI transformed how I approach complex problem-solving. The contextual understanding is unlike anything I've seen before.",
    avatar: "/assets/avatar1.jpeg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "Innovate Labs",
    content: "The creative suggestions from Athera have accelerated our design process by 3x. It's like having a brilliant co-designer.",
    avatar: "/assets/avatar2.jpeg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "TechFlow",
    content: "Athera's API integration helped us build intelligent features in days instead of months. The developer experience is exceptional.",
    avatar: "/assets/avatar3.jpeg"
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ name, role, company, content, avatar }) => {
  return (
    <div className="glass-morphism p-6 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10 transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="flex items-start">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
        />
        <div className="ml-4">
          <h4 className="font-orbitron font-bold text-white">{name}</h4>
          <p className="text-cyan-300 text-sm">{role}, {company}</p>
        </div>
      </div>
      <div className="mt-4 relative">
        <svg className="w-6 h-6 text-cyan-500/30 absolute -top-2 -left-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-300 mt-3 pl-6">{content}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4" id="testimonials">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4">
              User Experiences
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from innovators who are already transforming their work with Athera AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
