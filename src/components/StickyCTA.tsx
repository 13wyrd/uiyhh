import { Send } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StickyCtaProps {
  onCtaClick: () => void;
}

export function StickyCTA({ onCtaClick }: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 50vh
      const scrolled = window.scrollY;
      setIsVisible(scrolled > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Gradient fade at top */}
      <div className="absolute bottom-full left-0 right-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      
      <div className="relative bg-black/95 backdrop-blur-2xl border-t border-pink-500/30 px-6 py-5 shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
        {/* Animated glow line on top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
        
        <div className="max-w-md mx-auto space-y-3">
          {/* Urgency message */}
          <div className="flex items-center justify-center gap-2 text-xs">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">
              <span className="text-pink-400 font-black">2,847</span> watching now
            </span>
          </div>
          
          {/* Main CTA button */}
          <button
            onClick={onCtaClick}
            className="relative w-full h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 text-white rounded-2xl transition-all duration-300 active:scale-95 overflow-hidden group shadow-[0_0_50px_rgba(236,72,153,0.6)]"
          >
            {/* Animated shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-slow"></div>
            
            <div className="relative flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 mb-1">
                <Send className="w-6 h-6" />
                <span className="text-xl font-black tracking-wide">OPEN TELEGRAM</span>
              </div>
              <span className="text-xs opacity-90">Free access to everything</span>
            </div>
          </button>
        </div>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes shimmer-slow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}