import { Send } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8">
      {/* Multiple neon glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none animate-float" />
      <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />
      
      <div className="relative z-10 w-full max-w-md mx-auto text-center space-y-12">
        {/* Headline */}
        <div className="space-y-6">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-4 animate-pulse">
              PRIVATE CONTENT
            </div>
          </div>
          
          <h1 className="text-6xl font-black tracking-tighter leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-pink-100 to-pink-300">
            FULL
            <br />
            ACCESS 18+
          </h1>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500"></div>
            <p className="text-base text-pink-300 font-black tracking-wide">
              UNCENSORED
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
        </div>

        {/* Main CTA with arrows */}
        <div className="relative space-y-6">
          {/* Top arrows */}
          <div className="flex justify-center gap-8">
            <div className="text-5xl animate-bounce-down-slow">👇</div>
            <div className="text-5xl animate-bounce-down-slow" style={{ animationDelay: '0.2s' }}>👇</div>
            <div className="text-5xl animate-bounce-down-slow" style={{ animationDelay: '0.4s' }}>👇</div>
          </div>
          
          {/* Main CTA Button */}
          <div className="relative group">
            {/* Glow behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse-glow"></div>
            
            <button
              onClick={onCtaClick}
              className="relative w-full h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 text-white rounded-2xl transition-all duration-300 active:scale-95 overflow-hidden group"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative flex items-center justify-center gap-3">
                <Send className="w-7 h-7" />
                <span className="text-xl font-black tracking-wider">OPEN TELEGRAM</span>
              </div>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl py-3 px-2 border border-pink-500/20">
            <div className="text-2xl mb-1">🔥</div>
            <div className="font-black text-white">Hot</div>
            <div className="text-gray-400">videos</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl py-3 px-2 border border-pink-500/20">
            <div className="text-2xl mb-1">🔒</div>
            <div className="font-black text-white">Private</div>
            <div className="text-gray-400">100%</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl py-3 px-2 border border-pink-500/20">
            <div className="text-2xl mb-1">⚡</div>
            <div className="font-black text-white">Instant</div>
            <div className="text-gray-400">access</div>
          </div>
        </div>

        {/* Age confirmation */}
        <p className="text-xs text-gray-600">
          18+ • By clicking, you confirm your age
        </p>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        
        @keyframes bounce-down-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(12px);
          }
        }
        
        @keyframes bounce-left {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }
        
        @keyframes bounce-right {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.75;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        
        .animate-bounce-down-slow {
          animation: bounce-down-slow 1.8s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.8));
        }
        
        .animate-bounce-left {
          animation: bounce-left 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.8));
        }
        
        .animate-bounce-right {
          animation: bounce-right 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.8));
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}