import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import avatarGif from 'figma:asset/3aac59e151c898cfc41aad717c07d7db161edd12.png';

export function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = window.innerWidth < 768;
    setIsMobile(checkMobile);
    
    const handleResize = () => {
      const checkMobile = window.innerWidth < 768;
      setIsMobile(checkMobile);
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

  // MOBILE VERSION - Telegram style, максимально понятно
  if (isMobile) {
    return (
      <div className="min-h-screen text-white overflow-hidden relative bg-gradient-to-b from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a]">
        {/* Static gradient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(220,38,127,0.4) 40%, rgba(255,20,147,0.3) 60%, transparent 80%)',
            }}
          />
          <div
            className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(236,72,153,0.3) 50%, transparent 80%)',
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
          <div className="max-w-lg w-full flex flex-col items-center text-center space-y-4">
            
            {/* Avatar */}
            <div className="relative mb-2 animate-subtle-pulse">
              <img
                src={avatarGif}
                alt="Avatar"
                className="w-64 h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Очень понятный заголовок */}
            <div className="space-y-2 mb-4 px-4">
              <h1 className="text-xl font-bold text-white leading-tight">
                NEW VIDEO JUST DROPPED 🔥
              </h1>
              <p className="text-base text-pink-300 font-semibold">
                Your exclusive access is ready!
              </p>
              <p className="text-sm text-gray-300">
                Watch now via button below 👇
              </p>
            </div>

            {/* ОГРОМНЫЕ стрелки вниз */}
            <div className="flex gap-3 my-3 animate-bounce-arrows">
              <div className="text-4xl animate-arrow-1">👇</div>
              <div className="text-4xl animate-arrow-2">👇</div>
              <div className="text-4xl animate-arrow-3">👇</div>
            </div>

            {/* ОГРОМНАЯ Telegram-style кнопка */}
            <button
              onClick={handleCTAClick}
              className="w-full max-w-xs py-4 px-5 rounded-2xl text-lg font-bold shadow-2xl active:scale-95 transition-transform animate-telegram-pulse mt-8"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #dc2626 50%, #a855f7 100%)',
              }}
            >
              <span className="text-white">
                WATCH FULL VIDEO 18+
              </span>
            </button>

            {/* Очень простой текст */}
            <div className="mt-4 p-4 bg-pink-600/10 border border-pink-500/30 rounded-xl">
              <div className="space-y-2 text-left">
                <p className="text-sm text-pink-300 flex items-center gap-2">
                  <span>⚡</span>
                  <span>Instant access</span>
                </p>
                <p className="text-sm text-pink-300 flex items-center gap-2">
                  <span>🔓</span>
                  <span>No registration</span>
                </p>
                <p className="text-sm text-pink-300 flex items-center gap-2">
                  <span>🔞</span>
                  <span>18+ only</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CSS анимации */}
        <style>{`
          @keyframes subtle-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          .animate-subtle-pulse {
            animation: subtle-pulse 3s ease-in-out infinite;
          }
          
          @keyframes telegram-pulse {
            0%, 100% { 
              transform: scale(1);
              box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
            }
            50% { 
              transform: scale(1.05);
              box-shadow: 0 0 60px rgba(118, 75, 162, 0.8);
            }
          }
          .animate-telegram-pulse {
            animation: telegram-pulse 2s ease-in-out infinite;
          }
          
          @keyframes bounce-arrows {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(15px); }
          }
          .animate-bounce-arrows {
            animation: bounce-arrows 1.5s ease-in-out infinite;
          }
          
          @keyframes arrow-wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          .animate-arrow-1 {
            animation: arrow-wave 1s ease-in-out infinite;
          }
          .animate-arrow-2 {
            animation: arrow-wave 1s ease-in-out infinite;
            animation-delay: 0.15s;
          }
          .animate-arrow-3 {
            animation: arrow-wave 1s ease-in-out infinite;
            animation-delay: 0.3s;
          }
        `}</style>
      </div>
    );
  }

  // DESKTOP VERSION - Telegram style
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(220,38,127,0.4) 0%, rgba(255,20,147,0.2) 30%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 pb-24">
        <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-6">
          
          {/* Avatar section */}
          <motion.div
            className="relative mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={avatarGif}
              alt="Avatar"
              className="w-96 md:w-[480px] h-auto rounded-3xl shadow-2xl"
              loading="eager"
            />
          </motion.div>

          {/* Заголовок */}
          <motion.div
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              NEW VIDEO JUST DROPPED 🔥
            </h1>
            <p className="text-xl text-pink-300 font-semibold">
              Your exclusive access is ready!
            </p>
            <p className="text-lg text-gray-300 font-medium">
              Watch now via button below 👇
            </p>
          </motion.div>

          {/* Стрелки вниз */}
          <motion.div
            className="flex gap-4 my-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="text-5xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              👇
            </motion.div>
            <motion.div
              className="text-5xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              👇
            </motion.div>
            <motion.div
              className="text-5xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              👇
            </motion.div>
          </motion.div>

          {/* Огромная кнопка */}
          <motion.button
            onClick={handleCTAClick}
            className="group relative w-full max-w-lg py-5 px-8 rounded-2xl text-2xl font-bold shadow-2xl overflow-hidden mt-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: 1 
            }}
            transition={{ 
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 0.5,
                delay: 0.6
              }
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Gradient background */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #dc2626 50%, #a855f7 100%)',
              }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 opacity-60"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #dc2626 50%, #a855f7 100%)',
                filter: 'blur(30px)',
              }}
              animate={{
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Button content */}
            <div className="relative z-10">
              <span className="text-white drop-shadow-lg">
                WATCH FULL VIDEO 18+
              </span>
            </div>

            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-4 border-purple-300"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.button>

          {/* Info block */}
          <motion.div
            className="mt-6 p-6 bg-pink-600/10 border-2 border-pink-500/30 rounded-2xl max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="space-y-2 text-left">
              <p className="text-lg text-pink-300 flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Instant access</span>
              </p>
              <p className="text-lg text-pink-300 flex items-center gap-3">
                <span className="text-2xl">🔓</span>
                <span>No registration</span>
              </p>
              <p className="text-lg text-pink-300 flex items-center gap-3">
                <span className="text-2xl">🔞</span>
                <span>Exclusive 18+ content</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}