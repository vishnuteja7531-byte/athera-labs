import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Custom shader material for pulsing effect
const PulsingMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      // Pulsing emissive effect
      materialRef.current.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.4;
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
      ring1Ref.current.rotation.z += 0.01;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.015;
    }
  });
  
  return (
    <>
      <Torus ref={ring1Ref} args={[2.5, 0.08, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#0fe6ff" 
          emissive="#0fe6ff" 
          emissiveIntensity={0.7}
          transparent
          opacity={0.7}
        />
      </Torus>
      <Torus ref={ring2Ref} args={[2.5, 0.08, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
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

// Particle sparks effect
const ParticleSparks = () => {
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  const particleCount = 50;
  
  useEffect(() => {
    if (particlesRef.current) {
      const dummy = new THREE.Object3D();
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 3;
        const x = Math.cos(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        const z = Math.sin(angle) * radius;
        
        dummy.position.set(x, y, z);
        dummy.updateMatrix();
        particlesRef.current.setMatrixAt(i, dummy.matrix);
      }
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      const dummy = new THREE.Object3D();
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.getMatrixAt(i, dummy.matrix);
        dummy.position.setFromMatrixPosition(dummy.matrix);
        
        // Move particles outward
        const direction = dummy.position.clone().normalize();
        const speed = 0.02 + Math.sin(time * 2 + i) * 0.01;
        dummy.position.add(direction.multiplyScalar(speed));
        
        dummy.updateMatrix();
        particlesRef.current.setMatrixAt(i, dummy.matrix);
      }
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }
  });
  
  return (
    <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#0fe6ff" transparent opacity={0.8} />
    </instancedMesh>
  );
};

// Core 3D Scene
const CoreScene = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame((state) => {
    // Slowly zoom in camera
    if (cameraRef.current) {
      cameraRef.current.position.z = 6 - Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });
  
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
      
      {/* Particle sparks */}
      <ParticleSparks />
      
      {/* Camera */}
      <perspectiveCamera ref={cameraRef} position={[0, 0, 6]} fov={75} />
    </>
  );
};

// Neon beam scan effect
const NeonBeam: React.FC = () => {
  const [beamPosition, setBeamPosition] = useState(-100);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBeamPosition(prev => {
        if (prev > 100) return -100;
        return prev + 2;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      className="absolute top-0 left-1/2 w-1 h-full bg-cyan-400 opacity-30"
      style={{ 
        transform: `translateX(-50%) translateY(${beamPosition}%)`,
        boxShadow: '0 0 20px 5px rgba(15, 230, 255, 0.5)',
        filter: 'blur(1px)'
      }}
    />
  );
};

// Typewriter text component
const TypewriterText: React.FC<{ text: string, delay: number }> = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + currentIndex * 100);
    
    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);
  
  return <>{displayText}</>;
};

const IntroSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  
  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1500);
    const completeTimer = setTimeout(onComplete, 3200);
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  return (
    <motion.div 
      className="intro-overlay fixed top-0 left-0 w-full h-full bg-black z-[999999] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Neon edge glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: '0 0 120px rgba(15,230,255,0.3) inset'
      }} />
      
      {/* Neon beam scan */}
      <NeonBeam />
      
      {/* 3D Core Canvas */}
      <div className="w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <CoreScene />
        </Canvas>
      </div>
      
      {/* Text elements */}
      {showText && (
        <motion.div 
          className="absolute bottom-[18%] w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="intro-text text-4xl md:text-5xl font-orbitron text-cyan-400 tracking-wider" style={{
            textShadow: '0 0 20px rgba(15,230,255,0.8)',
            letterSpacing: '0.1rem'
          }}>
            <TypewriterText text="Athera AI" delay={0} />
          </h1>
          <motion.p 
            className="subtitle text-lg md:text-xl text-cyan-300 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            THE FUTURE OF INTELLIGENCE
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IntroSequence;