import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import avatarGif from 'figma:asset/3aac59e151c898cfc41aad717c07d7db161edd12.png';

const floatingEmojis = [
  { emoji: '🔞', id: 1 },
  { emoji: '🔥', id: 2 },
  { emoji: '💋', id: 3 },
  { emoji: '😈', id: 4 },
  { emoji: '🍑', id: 5 },
  { emoji: '💦', id: 6 },
  { emoji: '🍆', id: 7 },
  { emoji: '👅', id: 8 },
  { emoji: '🔞', id: 9 },
  { emoji: '🔥', id: 10 },
  { emoji: '💋', id: 11 },
  { emoji: '😈', id: 12 },
  { emoji: '🍑', id: 13 },
  { emoji: '💦', id: 14 },
  { emoji: '🍆', id: 15 },
  { emoji: '👅', id: 16 },
  { emoji: '🔞', id: 17 },
  { emoji: '🔥', id: 18 },
  { emoji: '💋', id: 19 },
  { emoji: '😈', id: 20 },
];

export function LandingPage() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = window.innerWidth < 768;
    setIsMobile(checkMobile);
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      const checkMobile = window.innerWidth < 768;
      setIsMobile(checkMobile);
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCTAClick = () => {
    // Decode the obfuscated URL
    const encodedUrl = 'aHR0cHM6Ly9saW5rZ3JhbS5wcm8vaW5zdGE=';
    const decodedUrl = atob(encodedUrl);
    window.location.href = decodedUrl;
  };

  // Generate random positions for emojis (Desktop only)
  const getRandomPosition = (index: number) => {
    const seed = index * 137.508;
    return {
      startX: (Math.sin(seed) * 0.5 + 0.5) * dimensions.width,
      startY: (Math.cos(seed) * 0.5 + 0.5) * dimensions.height,
      endX: (Math.sin(seed + 3.14) * 0.5 + 0.5) * dimensions.width,
      endY: (Math.cos(seed + 3.14) * 0.5 + 0.5) * dimensions.height,
    };
  };

  // MOBILE VERSION - Optimized for FPS stability
  if (isMobile) {
    return (
      <div className="min-h-screen text-white overflow-hidden relative bg-gradient-to-b from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a]">
        {/* Static gradient glow - NO blur */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(220,38,127,0.5) 0%, rgba(255,20,147,0.3) 30%, transparent 70%)',
            }}
          />
        </div>

        {/* Main content - NO motion animations */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
          <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8">
            {/* Avatar section - Simple CSS animation only */}
            <div className="relative animate-subtle-pulse">
              <img
                src={avatarGif}
                alt="Avatar"
                className="w-72 h-auto"
                loading="eager"
              />
            </div>

            {/* Main message - Static */}
            <div className="space-y-3 w-full flex justify-center mb-8">
              <div className="px-4 py-2 rounded-lg text-base bg-pink-600/20 border border-pink-500/30 text-pink-300 max-w-[280px] text-center leading-tight">
                Click below to experience the full video without limits 🤫
              </div>
            </div>

            {/* Pointing fingers - Static */}
            <div className="relative w-full flex justify-center items-center gap-3 mb-4">
              <div className="text-4xl rotate-90">👉</div>
              <div className="text-4xl rotate-90">👉</div>
              <div className="text-4xl rotate-90">👉</div>
            </div>

            {/* CTA Button - Static, NO animations */}
            <button
              onClick={handleCTAClick}
              className="relative px-8 py-4 rounded-full text-lg font-semibold overflow-hidden active:scale-95 transition-transform"
            >
              {/* Static gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-purple-600" />
              
              {/* Button content */}
              <span className="relative z-10 text-white drop-shadow-lg">
                Watch Full 18+ Video 🔥
              </span>
            </button>

            {/* Subtext - Static */}
            <p className="text-sm text-gray-400 max-w-md">
              Click the button above to unlock private access to exclusive 18+ content
            </p>
          </div>
        </div>

        {/* Footer disclaimer - Static */}
        <footer className="absolute bottom-0 left-0 right-0 py-6 text-center border-t border-white/5">
          <p className="text-xs text-gray-500">
            🔞 18+ only • Private • Discreet
          </p>
        </footer>

        {/* CSS-only subtle pulse animation */}
        <style>{`
          @keyframes subtle-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          .animate-subtle-pulse {
            animation: subtle-pulse 5s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  // DESKTOP VERSION - Full animations
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Radial gradient glow in center */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(220,38,127,0.4) 0%, rgba(255,20,147,0.2) 30%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Floating emojis - Desktop only */}
      {floatingEmojis.map((item, index) => (
        <motion.div
          key={item.id}
          className="absolute text-5xl opacity-20 pointer-events-none"
          initial={{
            x: getRandomPosition(index).startX,
            y: getRandomPosition(index).startY,
          }}
          animate={{
            y: [
              getRandomPosition(index).endY,
              getRandomPosition(index).startY,
            ],
            x: [
              getRandomPosition(index).endX,
              getRandomPosition(index).startX,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + index * 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8">
          {/* Avatar section */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={avatarGif}
              alt="Avatar"
              className="w-96 md:w-[500px] h-auto"
              loading="eager"
            />
          </motion.div>

          {/* Main message */}
          <motion.div
            className="space-y-3 w-full flex justify-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-5 py-2.5 rounded-lg text-lg bg-pink-600/20 border border-pink-500/30 text-pink-300 hover:bg-pink-600/30 transition-colors max-w-xs text-center leading-tight">
              Click below to experience the full video without limits 🤫
            </button>
          </motion.div>

          {/* Pointing fingers */}
          <div className="relative w-full flex justify-center items-center gap-4 md:gap-6 mb-4">
            <motion.div
              className="text-5xl md:text-6xl rotate-90"
              initial={{ y: -30, opacity: 0 }}
              animate={{ 
                y: [0, 20, 0],
                opacity: 1 
              }}
              transition={{ 
                y: {
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.5,
                  delay: 0.8
                }
              }}
            >
              👉
            </motion.div>

            <motion.div
              className="text-5xl md:text-6xl rotate-90"
              initial={{ y: -30, opacity: 0 }}
              animate={{ 
                y: [0, 20, 0],
                opacity: 1 
              }}
              transition={{ 
                y: {
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                },
                opacity: {
                  duration: 0.5,
                  delay: 0.9
                }
              }}
            >
              👉
            </motion.div>

            <motion.div
              className="text-5xl md:text-6xl rotate-90"
              initial={{ y: -30, opacity: 0 }}
              animate={{ 
                y: [0, 20, 0],
                opacity: 1 
              }}
              transition={{ 
                y: {
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.4,
                },
                opacity: {
                  duration: 0.5,
                  delay: 1
                }
              }}
            >
              👉
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleCTAClick}
            className="group relative px-12 py-5 rounded-full text-xl md:text-2xl font-semibold overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: 1 
            }}
            transition={{ 
              scale: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 0.5,
                delay: 0.7
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 animate-pulse" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            
            {/* Button content */}
            <span className="relative z-10 text-white drop-shadow-lg">
              Watch Full 18+ Video 🔥
            </span>

            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-pink-400"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.button>

          {/* Subtext */}
          <motion.p
            className="text-base text-gray-400 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Click the button above to unlock private access to exclusive 18+ content
          </motion.p>
        </div>
      </div>

      {/* Footer disclaimer */}
      <motion.footer
        className="absolute bottom-0 left-0 right-0 py-6 text-center border-t border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-sm text-gray-500">
          🔞 18+ only • Private • Discreet
        </p>
      </motion.footer>
    </div>
  );
}
