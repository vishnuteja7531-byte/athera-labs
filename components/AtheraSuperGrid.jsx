import React from 'react';
import '../styles/superGrid.css';

const modules = [
  {
    id: 1,
    title: "Insight Engine",
    description: "Real-time data analysis and pattern recognition"
  },
  {
    id: 2,
    title: "Prediction Matrix",
    description: "Forecasting models with adaptive learning"
  },
  {
    id: 3,
    title: "Workflow Brain",
    description: "Autonomous process optimization and execution"
  },
  {
    id: 4,
    title: "Data Synapse",
    description: "Cross-platform data integration and harmonization"
  },
  {
    id: 5,
    title: "Compliance Shield",
    description: "Regulatory adherence and security protocols"
  },
  {
    id: 6,
    title: "Connection Hub",
    description: "API orchestration and third-party integrations"
  }
];

const AtheraSuperGrid = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  return (
    <div className="athera-super-grid-container">
      <h2 className="athera-super-grid-title">Athera OS Dashboard</h2>
      <div className="athera-super-grid">
        {modules.map((module) => (
          <div key={module.id} className="athera-super-grid-tile">
            <div className="athera-super-grid-icon">
              <div className="athera-super-grid-icon-inner"></div>
            </div>
            <h3 className="athera-super-grid-title-text">{module.title}</h3>
            <p className="athera-super-grid-description">{module.description}</p>
            <div className="athera-super-grid-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtheraSuperGrid;