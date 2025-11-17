import React, { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';

const AtheraCore3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    const scene = new (window as any).THREE.Scene();
    const camera = new (window as any).THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new (window as any).THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Core sphere
    const geometry = new (window as any).THREE.SphereGeometry(1.5, 64, 64);
    const material = new (window as any).THREE.MeshStandardMaterial({
      color: 0x0fe6ff,
      emissive: 0x0fe6ff,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const sphere = new (window as any).THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Orbit rings
    const ringGeometry1 = new (window as any).THREE.TorusGeometry(2.5, 0.05, 16, 100);
    const ringMaterial = new (window as any).THREE.MeshStandardMaterial({
      color: 0x0fe6ff,
      emissive: 0x0fe6ff,
      emissiveIntensity: 0.7,
    });
    const ring1 = new (window as any).THREE.Mesh(ringGeometry1, ringMaterial);
    ring1.rotation.x = Math.PI / 2;
    scene.add(ring1);

    const ring2 = new (window as any).THREE.Mesh(ringGeometry1, ringMaterial);
    ring2.rotation.y = Math.PI / 2;
    scene.add(ring2);

    // Lighting
    const ambientLight = new (window as any).THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    const pointLight = new (window as any).THREE.PointLight(0x0fe6ff, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 6;

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      sphere.rotation.y += 0.002;
      ring1.rotation.z += 0.003;
      ring2.rotation.z -= 0.004;
      
      material.emissiveIntensity = 0.5 + Math.sin(Date.now() * 0.001) * 0.3;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

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
          <div className="flex justify-center items-center">
            <canvas 
              ref={canvasRef} 
              className="w-full max-w-md md:max-w-2xl h-64 md:h-96 lg:h-[500px]"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AtheraCore3D;
