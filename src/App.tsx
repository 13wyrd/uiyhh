import { HeroSection } from './components/HeroSection';
import { TeaserSection } from './components/TeaserSection';
import { SocialProof } from './components/SocialProof';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  const handleTelegramClick = () => {
    // Obfuscated link
    const p1 = atob('aHR0cHM6Ly9saW5r');
    const p2 = atob('Z3JhbS5wcm8v');
    const p3 = atob('aW5zdGE=');
    window.open(p1 + p2 + p3, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* Enhanced gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/20 via-transparent to-purple-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10">
        <HeroSection onCtaClick={handleTelegramClick} />
        <TeaserSection />
        <SocialProof onCtaClick={handleTelegramClick} />
      </div>
      
      <StickyCTA onCtaClick={handleTelegramClick} />
    </div>
  );
}