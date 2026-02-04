// Text-to-Speech providers and utilities
export const speakText = (text: string, onEnd?: () => void): void => {
  // Check if SpeechSynthesis is available
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    if (onEnd) {
      utterance.onend = onEnd;
    }
    
    // Select a natural sounding voice if available
    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => 
      voice.lang.includes('en') && (voice.name.includes('Natural') || voice.name.includes('Neural'))
    );
    
    if (englishVoice) {
      utterance.voice = englishVoice;
    }
    
    speechSynthesis.speak(utterance);
    return;
  }
  
  // Fallback if SpeechSynthesis is not available
  if (onEnd) {
    onEnd();
  }
};

export const isMuted = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('athera_mute') === '1';
  }
  return false;
};

export const toggleMute = (): void => {
  if (typeof window !== 'undefined') {
    const current = localStorage.getItem('athera_mute');
    localStorage.setItem('athera_mute', current === '1' ? '0' : '1');
  }
};

export const playFallbackAudio = (onEnd?: () => void): void => {
  try {
    const audio = new Audio('/sounds/athera-intro.mp3');
    audio.volume = 0.7;
    
    if (onEnd) {
      audio.addEventListener('ended', onEnd);
    }
    
    audio.play().catch(() => {
      // If audio fails, call onEnd immediately
      if (onEnd) onEnd();
    });
  } catch (error) {
    // If audio fails, call onEnd immediately
    if (onEnd) onEnd();
  }
};