import React from 'react';
import '../styles/preAthera.css';

const PreAtheraShowcase = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  // SVG Icons for each template
  const BrainIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" className="mb-3">
      <circle cx="20" cy="20" r="15" fill="none" stroke="#0ff" strokeWidth="1" opacity="0.7">
        <animate attributeName="r" values="15;17;15" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="17" r="2" fill="#0ff" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="25" cy="17" r="2" fill="#0ff" opacity="0.8">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M12 25 Q20 30 28 25" stroke="#0ff" strokeWidth="1.5" fill="none" opacity="0.7" />
    </svg>
  );

  const NodesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" className="mb-3">
      <circle cx="10" cy="10" r="3" fill="#0ff">
        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="10" r="3" fill="#0ff">
        <animate attributeName="r" values="4;3;4" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="30" r="3" fill="#0ff">
        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <line x1="10" y1="10" x2="30" y2="10" stroke="#0ff" strokeWidth="1" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="10" y1="10" x2="20" y2="30" stroke="#0ff" strokeWidth="1" opacity="0.7">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="30" y1="10" x2="20" y2="30" stroke="#0ff" strokeWidth="1" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );

  const InsightIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" className="mb-3">
      <circle cx="20" cy="20" r="12" fill="none" stroke="#0ff" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="20" r="8" fill="none" stroke="#0ff" strokeWidth="1.5" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="20" r="4" fill="#0ff" opacity="0.9">
        <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
      </circle>
      <g>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 20 + 12 * Math.cos(rad);
          const y1 = 20 + 12 * Math.sin(rad);
          const x2 = 20 + 16 * Math.cos(rad);
          const y2 = 20 + 16 * Math.sin(rad);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0ff" strokeWidth="1" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
            </line>
          );
        })}
      </g>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" className="mb-3">
      <path d="M20 5 L35 15 L35 30 Q20 35 5 30 L5 15 Z" fill="none" stroke="#0ff" strokeWidth="1.5" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.4;0.7" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M20 12 L20 25 M15 17 L25 17" stroke="#0ff" strokeWidth="2" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.6;0.9" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  );

  const PredictiveIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" className="mb-3">
      <circle cx="20" cy="20" r="15" fill="none" stroke="#0ff" strokeWidth="1" opacity="0.3" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="#0ff" strokeWidth="1" opacity="0.5">
        <animate attributeName="r" values="10;12;10" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="20" r="5" fill="none" stroke="#0ff" strokeWidth="1.5" opacity="0.8">
        <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="20" r="2" fill="#0ff" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M20 5 Q30 10 35 20 Q30 30 20 35 Q10 30 5 20 Q10 10 20 5" fill="none" stroke="#0ff" strokeWidth="1" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" />
      </path>
    </svg>
  );

  const templates = [
    {
      id: 1,
      title: "Autonomous Decision Engine",
      description: "Understands context, predicts next steps, and executes complex workflows without human micromanagement.",
      icon: <BrainIcon />,
      fxClass: "neural-mesh"
    },
    {
      id: 2,
      title: "Cross-Platform Orchestration",
      description: "Athera connects CRM, Email, Calendar, Drive, Slack, Finance, and more — turning siloed systems into a unified intelligence network.",
      icon: <NodesIcon />,
      fxClass: "circuit-line"
    },
    {
      id: 3,
      title: "Instant Understanding",
      description: "Reads messages, documents, requests, and dashboards — then converts them into decisions with explainable reasoning.",
      icon: <InsightIcon />,
      fxClass: "floating-particles"
    },
    {
      id: 4,
      title: "Explainable & Safe",
      description: "Shows reasoning for every action. Human approval required for high-risk tasks. Built-in governance & PII protection.",
      icon: <ShieldIcon />,
      fxClass: "shield-shimmer"
    },
    {
      id: 5,
      title: "Looks Ahead",
      description: "Predicts risks, forecasts outcomes, and recommends the optimal path to maximum impact and minimal friction.",
      icon: <PredictiveIcon />,
      fxClass: "orbital-loop"
    }
  ];

  return (
    <div className="preAthera-wrapper">
      <h1 className="preAthera-title">The Future of Intelligence Starts Here</h1>
      <p className="preAthera-subtitle">
        Athera is not just an AI. It is an evolving cognitive core designed to automate, optimize, and transform everything it touches.
      </p>
      
      <div className="preAthera-row">
        {templates.map((template) => (
          <div key={template.id} className="preAthera-card">
            <div className="flex justify-center">
              {template.icon}
            </div>
            <h3>{template.title}</h3>
            <p>{template.description}</p>
            
            {/* Corner dots for glassmorphism effect */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreAtheraShowcase;