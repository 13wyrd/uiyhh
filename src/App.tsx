import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Eye, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const telegramLink = "https://t.me/your_channel"; // Замените на ваш Telegram канал

  // Encrypted link
  const getLink = () => {
    const encoded = "aHR0cHM6Ly9saW5rZ3JhbS5wcm8vaW5zdGE=";
    return atob(encoded);
  };

  const previewImages = [
    "https://i.pinimg.com/1200x/cf/53/45/cf5345cb5b03d0cbf51e4577f2d56dcf.jpg",
    "https://i.pinimg.com/736x/4e/aa/ad/4eaaadda782e27a8b78d8ba3f247c18f.jpg",
    "https://i.pinimg.com/736x/8f/c9/bf/8fc9bf4328aa71ba82cf1ea93377be12.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewerCount, setViewerCount] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % previewImages.length);
    }, 3000); // Меняется кажды 3 секунды

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Random change between -50 to +50
      const change = Math.floor(Math.random() * 101) - 50;
      setViewerCount((prev) => Math.max(2500, Math.min(3500, prev + change)));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0612] flex flex-col items-center justify-center p-4 md:p-6 pt-8 md:pt-10">
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        {/* Badge */}
        <div className="mb-6 md:mb-10">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold uppercase tracking-wide shadow-lg shadow-pink-500/30">
            PRIVATE CONTENT
          </span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-2 md:mb-4 tracking-tight leading-none">
          FULL
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-6 md:mb-10 tracking-tight leading-none">
          ACCESS 18+
        </h1>

        {/* Description with lines */}
        <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-pink-500"></div>
          <p className="text-pink-400 font-bold text-base md:text-xl uppercase tracking-widest">
            UNCENSORED
          </p>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-pink-500"></div>
        </div>

        {/* Pointers */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="text-3xl md:text-4xl animate-bounce">
            👇
          </div>
          <div className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.1s' }}>
            👇
          </div>
          <div className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>
            👇
          </div>
        </div>

        {/* Button */}
        <div className="w-full max-w-md px-4 mb-3 md:mb-4">
          <a
            href={getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <button className="w-full bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 hover:from-pink-600 hover:via-pink-500 hover:to-pink-600 text-white font-black py-5 md:py-6 px-8 md:px-12 rounded-2xl md:rounded-[28px] text-xl md:text-2xl transition-all duration-300 hover:scale-[1.03] active:scale-98 shadow-2xl shadow-pink-500/50 hover:shadow-pink-400/70 border-2 border-pink-400/30 uppercase tracking-wide">
              <div className="flex items-center justify-center gap-3">
                <svg 
                  className="w-7 h-7 md:w-9 md:h-9" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.969 9.3-2.098 9.858-.055.236-.163.315-.335.315-.214 0-.357-.134-.558-.269l-2.758-2.125-1.384 1.315c-.161.161-.295.295-.605.295l.214-3.045 5.532-4.995c.241-.214-.052-.335-.374-.121L8.31 13.691l-2.647-.828c-.575-.18-.589-.575.121-.853l10.344-3.99c.479-.18.898.121.738.853z"/>
                </svg>
                <span>OPEN TELEGRAM</span>
              </div>
            </button>
          </a>
        </div>

        {/* Live Counter */}
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50"></div>
          <span className="text-gray-400 text-sm md:text-base">
            <span className="text-pink-400 font-bold">{viewerCount.toLocaleString()}</span> watching now
          </span>
        </div>

        {/* Preview Gallery - Large Cards */}
        <div className="flex gap-4 justify-center mb-5 md:mb-8 w-full">
          <div 
            className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-3xl overflow-hidden group cursor-pointer border border-pink-500/20 shadow-2xl shadow-pink-500/20"
          >
            {/* Blurred Background Image with transition */}
            <ImageWithFallback
              src={previewImages[currentImageIndex]}
              alt={`Preview ${currentImageIndex + 1}`}
              className="w-full h-full object-cover blur-[2px] scale-110 transition-opacity duration-700"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Lock Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-pink-500/30 border-2 border-pink-400/70 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-11 h-11 text-pink-300" />
              </div>
            </div>

            {/* Image indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
              {previewImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'bg-pink-400 w-7' 
                      : 'bg-pink-400/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}