import React, { useState, useEffect } from 'react';

const AtheraConsole: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const messages = [
    "> Initializing cognitive kernel...",
    "> Loading neural frequency layers...",
    "> Optimizing memory cycle...",
    "> Systems online."
  ];

  useEffect(() => {
    const typeMessage = () => {
      const message = messages[currentMessage];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < message.length) {
          setDisplayText(message.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          // Wait 2 seconds before moving to next message
          setTimeout(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length);
          }, 2000);
        }
      }, 50);
    };

    typeMessage();

    return () => {
      setDisplayText('');
    };
  }, [currentMessage, messages]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div 
      className="fixed bottom-8 right-8 w-80 h-44 z-40 rounded-xl p-4 backdrop-blur-lg font-mono text-sm"
      style={{
        background: 'rgba(0,18,32,0.5)',
        border: '1px solid rgba(0,255,255,0.2)',
        boxShadow: '0 0 30px rgba(0,255,255,0.25)',
      }}
    >
      <div className="text-cyan-300 mb-2">Athera OS — Live Kernel</div>
      <div className="text-gray-300">
        {displayText}
        <span 
          className="inline-block w-2 h-5 ml-1 align-middle"
          style={{
            backgroundColor: showCursor ? '#0FE6FF' : 'transparent',
            transition: 'background-color 0.1s'
          }}
        />
      </div>
      
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes caret {
          50% { border-color: transparent }
        }
      `}</style>
    </div>
  );
};

export default AtheraConsole;