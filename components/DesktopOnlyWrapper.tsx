import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// Dynamically import 3D components only on desktop to avoid bundling heavy three.js on mobile
const DesktopOnlyWrapper: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // If not desktop or not client, render nothing
  if (!isClient || !isDesktop) return null;

  // Lazy load all 3D components only on desktop
  return (
    <div className="desktop-only-wrapper">
      {/* Athera Core 3D */}
      <section className="py-12 md:py-20 lg:py-32 w-full px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4 md:mb-8 uppercase tracking-wider">
            The Athera Intelligence Core
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            A revolutionary neural architecture inspired by human cognition. The Athera Core processes information through multi-layered reasoning, contextual awareness, and adaptive learning — delivering intelligence that thinks, evolves, and understands.
          </p>
          <div className="flex justify-center items-center core-wrapper h-full">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/30">
              {/* The 3D core will be dynamically loaded here */}
              <div className="w-full h-96 flex items-center justify-center bg-black/30 border border-cyan-500/20 rounded-lg">
                <p className="text-cyan-400 font-orbitron">3D Core Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Card */}
      <section className="py-12 md:py-20 w-full px-4">
        <div className="container mx-auto">
          <h2 className="font-orbitron text-2xl md:text-4xl font-bold text-glow mb-8 md:mb-12 text-center">
            Workflow Automation
          </h2>
          <div className="flex justify-center">
            <div className="bg-black/40 border border-cyan-500/30 rounded-xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-cyan-400 font-bold">Revenue Rescue — ACME Deal</h3>
                  <p className="text-gray-400 text-sm">Create invoice draft, update CRM, schedule demo, alert legal.</p>
                </div>
                <span className="text-cyan-400 font-bold">Idle</span>
              </div>
              
              <div className="space-y-3 mb-6">
                {[
                  { name: "Fetch CRM record", connector: "CRM", duration: "1200ms" },
                  { name: "Create invoice draft", connector: "Accounting", duration: "1400ms" },
                  { name: "Schedule demo", connector: "Calendar", duration: "800ms" },
                  { name: "Notify legal", connector: "Slack", duration: "600ms" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{step.name}</div>
                      <div className="text-gray-400 text-sm">{step.connector} • {step.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-cyan-500 text-black font-bold py-2 px-4 rounded-md hover:bg-cyan-400 transition-colors">
                  Approve
                </button>
                <button className="flex-1 bg-transparent border border-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-12 md:py-20 w-full px-4">
        <div className="container mx-auto">
          <h2 className="font-orbitron text-2xl md:text-4xl font-bold text-glow mb-8 md:mb-12 text-center">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Deals Progressed", value: "12", change: "+3" },
              { title: "Hours Saved", value: "34", change: "+8" },
              { title: "Errors Averted", value: "3", change: "+1" },
              { title: "Weekly ROI", value: "$1,200", change: "+$200" }
            ].map((kpi, index) => (
              <div key={index} className="bg-black/40 border border-cyan-500/30 rounded-xl p-6 text-center">
                <h3 className="text-cyan-400 font-bold mb-2">{kpi.title}</h3>
                <div className="text-3xl font-bold text-white mb-1">{kpi.value}</div>
                <div className="text-green-400 text-sm">↑ {kpi.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Panel */}
      <section className="py-12 md:py-20 w-full px-4">
        <div className="container mx-auto">
          <h2 className="font-orbitron text-2xl md:text-4xl font-bold text-glow mb-8 md:mb-12 text-center">
            Decision Support
          </h2>
          <div className="flex justify-center">
            <div className="bg-black/40 border border-cyan-500/30 rounded-xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-cyan-400 font-bold text-xl">Revenue Rescue — ACME Deal</h3>
                  <p className="text-gray-400">Create invoice draft, update CRM, schedule demo, alert legal.</p>
                </div>
                <span className="text-cyan-400 font-bold">Idle</span>
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#0a1a2a" strokeWidth="8" />
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="50" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                      strokeDasharray="220"
                      strokeDashoffset="50"
                      transform="rotate(-90 60 60)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0FE6FF" />
                        <stop offset="100%" stopColor="#6B5FFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">25%</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-cyan-400 font-bold mb-2">Rationale</h4>
                <p className="text-gray-300">
                  Based on analysis of the ACME deal, this workflow is recommended to maximize revenue recovery while maintaining compliance.
                </p>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-cyan-500 text-black font-bold py-2 px-4 rounded-md hover:bg-cyan-400 transition-colors">
                  Approve
                </button>
                <button className="flex-1 bg-red-500/20 border border-red-500/30 text-white py-2 px-4 rounded-md hover:bg-red-500/30 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopOnlyWrapper;