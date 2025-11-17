import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, Torus, Float, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/quantumCore.css';

// 3D Scene Component
const QuantumCoreScene = ({ isHovered, isExpanded }) => {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const particlesRef = useRef();
  
  // Create particles
  const [particles] = useState(() => {
    const positions = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.2;
      coreRef.current.rotation.y = time * 0.3;
    }
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.1;
      ring1Ref.current.rotation.z = time * 0.2;
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = time * 0.15;
      ring2Ref.current.rotation.z = time * 0.1;
    }
    
    // Particle animation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * (isHovered ? 0.5 : 0.2);
      particlesRef.current.rotation.x = time * (isHovered ? 0.3 : 0.1);
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Point lights for glow effect */}
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#0ff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#0ff" />
      
      {/* Core icosahedron */}
      <Float speed={isHovered ? 3 : 1} rotationIntensity={isHovered ? 2 : 1} floatIntensity={isHovered ? 2 : 1}>
        <Icosahedron args={[1, 32]} ref={coreRef}>
          <meshStandardMaterial
            color="#0ff"
            emissive="#0ff"
            emissiveIntensity={isHovered ? 2 : 1}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </Icosahedron>
      </Float>
      
      {/* Orbiting rings */}
      <Torus args={[2.5, 0.1, 16, 100]} ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#0ff"
          emissive="#0ff"
          emissiveIntensity={isHovered ? 1.5 : 0.8}
          transparent
          opacity={0.7}
        />
      </Torus>
      
      <Torus args={[2, 0.1, 16, 100]} ref={ring2Ref} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial
          color="#0ff"
          emissive="#0ff"
          emissiveIntensity={isHovered ? 1.5 : 0.8}
          transparent
          opacity={0.7}
        />
      </Torus>
      
      {/* Floating particles */}
      <Points ref={particlesRef}>
        <PointMaterial
          color="#0ff"
          size={isHovered ? 0.05 : 0.03}
          sizeAttenuation={true}
          transparent
          opacity={0.8}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles}
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
      </Points>
      
      {/* Camera controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={!isHovered && !isExpanded}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const AtheraQuantumCore = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  return (
    <>
      <div className="quantum-core-container">
        <div 
          className="quantum-core-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleExpand}
        >
          <Canvas
            className="quantum-core-canvas"
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ antialias: true, alpha: true }}
          >
            <QuantumCoreScene isHovered={isHovered} isExpanded={isExpanded} />
          </Canvas>
          <div className="quantum-core-interaction" />
        </div>
      </div>

      {/* Expanded view */}
      {isExpanded && (
        <div className="quantum-core-expanded">
          <Canvas
            className="quantum-core-canvas"
            camera={{ position: [0, 0, 3], fov: 75 }}
            gl={{ antialias: true, alpha: true }}
          >
            <QuantumCoreScene isHovered={true} isExpanded={true} />
          </Canvas>
          <button className="quantum-core-close" onClick={handleClose}>×</button>
        </div>
      )}
    </>
  );
};

export default AtheraQuantumCore;