import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, PointMaterial, Point } from '@react-three/drei';
import * as THREE from 'three';
import AnimatedSection from './AnimatedSection';

// Custom shader material for pulsing effect
const PulsingMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });
  
  return (
    <meshStandardMaterial
      ref={materialRef}
      color="#0fe6ff"
      emissive="#0fe6ff"
      emissiveIntensity={0.5}
      metalness={0.8}
      roughness={0.2}
      transparent
      opacity={0.9}
    />
  );
};

// Rotating rings component
const RotatingRings = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.003;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.004;
    }
  });
  
  return (
    <>
      <Torus ref={ring1Ref} args={[2.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#0fe6ff" 
          emissive="#0fe6ff" 
          emissiveIntensity={0.7}
          transparent
          opacity={0.7}
        />
      </Torus>
      <Torus ref={ring2Ref} args={[2.5, 0.05, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial 
          color="#6D00FF" 
          emissive="#6D00FF" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </Torus>
    </>
  );
};

// Quantum line effect
const QuantumLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group ref={linesRef}>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const z = Math.sin(angle) * 3;
        
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={new Float32Array([0, 0, 0, x, 0, z])}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#B0F7FF" transparent opacity={0.3} />
          </line>
        );
      })}
    </group>
  );
};

// Core 3D Scene
const CoreScene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#0fe6ff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#6D00FF" />
      
      {/* Core sphere */}
      <Sphere args={[1.5, 64, 64]}>
        <PulsingMaterial />
      </Sphere>
      
      {/* Rotating rings */}
      <RotatingRings />
      
      {/* Quantum lines */}
      <QuantumLines />
      
      {/* Camera controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const AtheraCore3D: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4 relative">
      <AnimatedSection>
        <div className="container mx-auto text-center">
          <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4 md:mb-8 uppercase tracking-wider">
            The Athera Intelligence Core
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            A revolutionary neural architecture inspired by human cognition. The Athera Core processes information through multi-layered reasoning, contextual awareness, and adaptive learning — delivering intelligence that thinks, evolves, and understands.
          </p>
          <div className="flex justify-center items-center core-wrapper h-full">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-500/30">
              <Canvas
                camera={{ position: [0, 0, 6], fov: 75 }}
                className="w-full h-full"
                gl={{ antialias: true, alpha: true }}
              >
                <CoreScene />
              </Canvas>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AtheraCore3D;
