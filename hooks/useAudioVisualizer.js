import { useEffect, useRef, useState } from 'react';

export const useAudioVisualizer = () => {
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const isInitializedRef = useRef(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if AudioContext is supported
    if (typeof window !== 'undefined' && !isInitializedRef.current) {
      isInitializedRef.current = true;
      
      if (window.AudioContext || window.webkitAudioContext) {
        setIsSupported(true);
      }
    }
    
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const initAudioContext = () => {
    if (!isSupported || audioContextRef.current) return;

    try {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
      return { context: audioContextRef.current, analyser: analyserRef.current };
    } catch (error) {
      console.warn('AudioContext initialization failed:', error);
      setIsSupported(false);
      return null;
    }
  };

  const getFrequencyData = () => {
    if (!analyserRef.current || !dataArrayRef.current) return null;
    
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    return dataArrayRef.current;
  };

  return {
    isSupported,
    initAudioContext,
    getFrequencyData
  };
};