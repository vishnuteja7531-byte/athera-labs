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

      


    </div>
  );
};

export default DesktopOnlyWrapper;