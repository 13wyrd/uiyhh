import { Users, Zap, Video } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SocialProofProps {
  onCtaClick: () => void;
}

const testimonials = [
  {
    text: "Best content I've ever found. Worth every second 🔥",
    author: "Andrew, 24"
  },
  {
    text: "Can't believe this is free! Absolutely insane quality 😍",
    author: "Mike, 28"
  },
  {
    text: "Updated daily, never gets boring. Highly recommend 💯",
    author: "Daniel, 26"
  },
  {
    text: "Finally found what I was looking for. 10/10! 🔥",
    author: "Alex, 30"
  },
  {
    text: "The best collection on Telegram, no competition 👑",
    author: "Chris, 25"
  }
];

export function SocialProof({ onCtaClick }: SocialProofProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 py-16 pb-32">
      <div className="max-w-md mx-auto space-y-10">
        {/* Main stats */}
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl px-8 py-6 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.3)]">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Users className="w-6 h-6 text-pink-400" />
                <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                  10,000+
                </span>
              </div>
              <p className="text-sm text-gray-400 font-black">
                SUBSCRIBERS ALREADY INSIDE
              </p>
            </div>
          </div>
          
          {/* Live counter */}
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-black">ONLINE</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">
              <span className="text-pink-400 font-black">+284</span> today
            </span>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-sm rounded-2xl p-5 border border-pink-500/20 hover:border-pink-500/40 transition-all group">
            <div className="bg-pink-500/20 rounded-xl p-3 w-fit mb-3 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6 text-pink-400" />
            </div>
            <p className="text-base font-black text-white mb-1">500+ videos</p>
            <p className="text-xs text-gray-500">Full collection</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm rounded-2xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
            <div className="bg-purple-500/20 rounded-xl p-3 w-fit mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-base font-black text-white mb-1">Daily updates</p>
            <p className="text-xs text-gray-500">Fresh content</p>
          </div>
        </div>

        {/* Testimonials preview */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <div className="space-y-4">
            {/* Avatar row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex -space-x-3 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 border-2 border-black flex items-center justify-center"
                  >
                    <span className="text-xs">😍</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-0 text-base flex-shrink-0">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
            
            <div className="space-y-2 min-h-[4rem]">
              <p className="text-sm text-gray-300 italic leading-relaxed transition-opacity duration-300">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-xs text-gray-500 transition-opacity duration-300">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-1.5 pt-2">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial 
                      ? 'w-8 bg-pink-500' 
                      : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="space-y-4">
          <button
            onClick={onCtaClick}
            className="relative w-full h-14 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-400 hover:via-purple-400 hover:to-pink-400 text-white rounded-2xl transition-all duration-300 active:scale-95 overflow-hidden group shadow-[0_0_40px_rgba(236,72,153,0.4)]"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative flex items-center justify-center gap-2">
              <span className="text-lg font-black tracking-wide">GET ACCESS NOW</span>
              <span className="text-xl">🚀</span>
            </div>
          </button>
          
          <p className="text-center text-xs text-gray-600">
            Free access • No registration • Instant
          </p>
        </div>
      </div>
    </section>
  );
}