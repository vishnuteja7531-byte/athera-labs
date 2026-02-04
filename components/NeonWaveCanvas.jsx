import React, { useEffect, useRef } from 'react';
import { useAudioVisualizer } from '../hooks/useAudioVisualizer';

const NeonWaveCanvas = ({ isActive }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const { isSupported, initAudioContext, getFrequencyData } = useAudioVisualizer();
  const audioInitializedRef = useRef(false);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize audio context on first interaction
    const initAudio = async () => {
      if (!audioInitializedRef.current && isSupported) {
        try {
          // Resume audio context on first user interaction
          const result = initAudioContext();
          if (result) {
            audioInitializedRef.current = true;
          }
        } catch (error) {
          console.warn('Failed to initialize audio context:', error);
        }
      }
    };

    // Click or touch to initialize audio context
    const handleInteraction = () => {
      initAudio();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    // Animation loop
    const drawWave = () => {
      if (!ctx || !canvas) return;

      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Get frequency data if available
      let frequencyData = null;
      if (audioInitializedRef.current) {
        frequencyData = getFrequencyData();
      }

      // Draw waveform
      ctx.beginPath();
      ctx.lineWidth = 3;
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, height/2 - 50, 0, height/2 + 50);
      gradient.addColorStop(0, '#0FE6FF');
      gradient.addColorStop(1, '#6B5FFF');
      ctx.strokeStyle = gradient;
      
      // Shadow for glow effect
      ctx.shadowColor = '#0FE6FF';
      ctx.shadowBlur = 15;

      const centerY = height / 2;
      const amplitude = frequencyData ? Math.max(...frequencyData) / 256 * 30 : 15;
      const points = 200;

      for (let i = 0; i <= points; i++) {
        const x = (width / points) * i;
        let y;
        
        if (frequencyData && frequencyData.length > 0) {
          // Use frequency data to modulate the wave
          const freqIndex = Math.floor((i / points) * (frequencyData.length - 1));
          const freqValue = frequencyData[freqIndex] / 255;
          y = centerY + Math.sin(i * 0.2 + Date.now() * 0.005) * amplitude * (0.5 + freqValue * 0.5);
        } else {
          // Default animated wave
          y = centerY + Math.sin(i * 0.2 + Date.now() * 0.005) * amplitude;
        }

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      ctx.shadowBlur = 0;

      animationFrameRef.current = requestAnimationFrame(drawWave);
    };

    animationFrameRef.current = requestAnimationFrame(drawWave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, isSupported]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default NeonWaveCanvas;