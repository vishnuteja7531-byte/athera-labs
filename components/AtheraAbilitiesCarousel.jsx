import React, { useEffect, useRef } from 'react';
import '../styles/carousel.css';

const abilities = [
  {
    id: 1,
    title: "Autonomous Workflow Engine",
    description: "Self-executing processes with minimal human intervention"
  },
  {
    id: 2,
    title: "Predictive Insight Graph",
    description: "Forecasts outcomes and recommends optimal actions"
  },
  {
    id: 3,
    title: "Multi-System Orchestration",
    description: "Connects disparate platforms into unified intelligence"
  },
  {
    id: 4,
    title: "Governance & Compliance AI",
    description: "Ensures regulatory adherence and data protection"
  },
  {
    id: 5,
    title: "Contextual Reasoning Engine",
    description: "Understands nuance and applies domain-specific logic"
  },
  {
    id: 6,
    title: "Conversational Intelligence Layer",
    description: "Natural language understanding across all interfaces"
  }
];

const AtheraAbilitiesCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += e.deltaY * 0.5;
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  return (
    <div className="athera-carousel-container">
      <h2 className="athera-carousel-title">Athera Core Abilities</h2>
      <div className="athera-carousel-wrapper" ref={carouselRef}>
        <div className="athera-carousel-content">
          {abilities.map((ability) => (
            <div key={ability.id} className="athera-carousel-card">
              <div className="athera-carousel-particle particle-1"></div>
              <div className="athera-carousel-particle particle-2"></div>
              <div className="athera-carousel-particle particle-3"></div>
              <h3>{ability.title}</h3>
              <p>{ability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AtheraAbilitiesCarousel;