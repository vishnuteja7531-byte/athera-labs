import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Simplified material for mobile performance
const MobilePulsingMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      // Reduced animation intensity for mobile
      materialRef.current.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });
  
  return (
    <meshStandardMaterial
      ref={materialRef}
      color="#0fe6ff"
      emissive="#0fe6ff"
      emissiveIntensity={0.3}
      metalness={0.7}
      roughness={0.3}
      transparent
      opacity={0.85}
    />
  );
};

// Simplified rotating rings for mobile
const MobileRotatingRings = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.002; // Slower rotation for mobile
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.003; // Slower rotation for mobile
    }
  });
  
  return (
    <>
      <Torus ref={ring1Ref} args={[1.8, 0.03, 8, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#0fe6ff" 
          emissive="#0fe6ff" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </Torus>
      <Torus ref={ring2Ref} args={[1.8, 0.03, 8, 32]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial 
          color="#6D00FF" 
          emissive="#6D00FF" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </Torus>
    </>
  );
};

// Mobile-optimized core scene
const MobileCoreScene = () => {
  return (
    <>
      {/* Simplified lighting for mobile */}
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#0fe6ff" />
      <pointLight position={[-3, -3, -3]} intensity={0.6} color="#6D00FF" />
      
      {/* Core sphere - smaller for mobile */}
      <Sphere args={[1.0, 32, 32]}>
        <MobilePulsingMaterial />
      </Sphere>
      
      {/* Rotating rings */}
      <MobileRotatingRings />
      
      {/* Simplified camera controls for mobile touch */}
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.3} // Slower auto-rotation
        rotateSpeed={0.5} // Slower manual rotation
        zoomSpeed={0.5} // Slower zoom
        panSpeed={0.5} // Slower pan
        minDistance={2.5}
        maxDistance={8}
      />
    </>
  );
};

// Touch interaction handler for mobile
const TouchHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTouched, setIsTouched] = useState(false);
  
  const handleTouchStart = () => {
    setIsTouched(true);
  };
  
  const handleTouchEnd = () => {
    setIsTouched(false);
  };
  
  return (
    <div 
      className={`mobile-3d-container ${isTouched ? 'touched' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

const Mobile3DCore: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  return (
    <section className="py-8 md:py-12 w-full px-4 relative">
      <div className="container mx-auto text-center">
        <h2 className="font-orbitron text-xl md:text-3xl font-bold text-glow mb-4 md:mb-6 uppercase tracking-wider">
          The Athera Intelligence Core
        </h2>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
          Experience the future of AI intelligence on your mobile device. 
          A revolutionary neural architecture that thinks, evolves, and understands.
        </p>
        
        <div className="flex justify-center items-center mobile-core-wrapper h-full">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-xl shadow-cyan-500/15 border border-cyan-500/20 bg-black/30">
            <TouchHandler>
              <Canvas
                camera={{ position: [0, 0, 4], fov: 60 }}
                className="w-full h-full"
                gl={{ 
                  antialias: true, 
                  alpha: true,
                  powerPreference: "high-performance" // Optimize for mobile
                }}
                frameloop="demand" // Only render when needed
              >
                <MobileCoreScene />
              </Canvas>
            </TouchHandler>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center px-4">
          <button className="font-orbitron text-sm font-bold px-6 py-3 bg-[#0fe6ff] text-black rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_#0fe6ff] transform hover:scale-105">
            Access Platform
          </button>
          <button className="font-orbitron text-sm font-bold px-6 py-3 bg-transparent border border-cyan-500/50 text-cyan-400 rounded-lg transition-all duration-300 ease-in-out hover:bg-cyan-500/10 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mobile3DCore;