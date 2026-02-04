import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NeonWaveCanvas from './NeonWaveCanvas';
import { speakText, isMuted, toggleMute, playFallbackAudio } from '../utils/ttsProviders';

const VoiceIntro = ({ onFinish }) => {
  const [isMutedState, setIsMutedState] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const audioPlayedRef = useRef(false);

  useEffect(() => {
    // Check if intro should be muted
    const muted = isMuted();
    setIsMutedState(muted);
    
    // Show skip button after 1 second
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 1000);
    
    // Auto finish after 3 seconds
    const finishTimer = setTimeout(() => {
      handleFinish();
    }, 3000);
    
    // Play audio if not muted
    if (!muted && !audioPlayedRef.current) {
      audioPlayedRef.current = true;
      playIntroAudio();
    }
    
    return () => {
      clearTimeout(skipTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const playIntroAudio = () => {
    const text = "Welcome to Athera AI. Initializing cognitive core. Systems online.";
    
    const handleAudioEnd = () => {
      // Audio finished naturally
    };
    
    // Try TTS first
    try {
      speakText(text, handleAudioEnd);
    } catch (error) {
      // Fallback to audio file
      playFallbackAudio(handleAudioEnd);
    }
  };

  const handleMuteToggle = () => {
    toggleMute();
    const newMutedState = !isMutedState;
    setIsMutedState(newMutedState);
    
    // If unmuting, play audio
    if (!newMutedState && !audioPlayedRef.current) {
      audioPlayedRef.current = true;
      playIntroAudio();
    }
  };

  const handleSkip = () => {
    handleFinish();
  };

  const handleFinish = () => {
    onFinish();
  };

  return (
    <motion.div
      className="intro-overlay fixed inset-0 bg-black z-[999999] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NeonWaveCanvas isActive={true} />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.img
          src="/assets/vishnu.jpeg"
          alt="Athera AI"
          className="intro-avatar w-30 h-30 rounded-full object-cover mb-4 border-2 border-cyan-400 shadow-[0_0_25px_rgba(15,230,255,0.4)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        <motion.h1
          className="intro-title text-3xl md:text-4xl font-orbitron font-bold text-cyan-400 mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Athera AI
        </motion.h1>
        
        <motion.p
          className="intro-sub text-lg md:text-xl text-cyan-300 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Initializing cognitive core...
        </motion.p>
        
        <motion.div
          className="intro-buttons flex gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button
            onClick={handleMuteToggle}
            className="intro-btn px-6 py-3 bg-cyan-900/30 border border-cyan-400/50 text-cyan-400 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_#0FE6FF]"
          >
            {isMutedState ? 'Unmute' : 'Mute'}
          </button>
          
          {showSkip && (
            <motion.button
              onClick={handleSkip}
              className="intro-btn px-6 py-3 bg-cyan-900/30 border border-cyan-400/50 text-cyan-400 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_#0FE6FF]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Skip Intro
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VoiceIntro;