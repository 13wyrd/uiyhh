import { Lock, Eye } from 'lucide-react';

export function TeaserSection() {
  const teaserCards = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1700150595270-499a1ce07804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgwMjg3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1695049053396-060b03332178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBzaWxob3VldHRlfGVufDF8fHx8MTc2ODA0Nzg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600356261649-df43582959c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdCUyMGRyYW1hdGljfGVufDF8fHx8MTc2ODA0Nzg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="relative px-6 py-20">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Section title */}
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-2">
          <Eye className="w-4 h-4 text-pink-400" />
          <span className="text-xs font-black text-pink-400 tracking-wider">PREVIEW</span>
        </div>
        <h2 className="text-3xl font-black tracking-tight">
          WHAT'S WAITING
        </h2>
        <p className="text-sm text-gray-400">
          Full access only in Telegram
        </p>
      </div>

      {/* Teaser cards */}
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
        {teaserCards.map((card, index) => (
          <div
            key={card.id}
            className="relative aspect-[9/16] rounded-2xl overflow-hidden group"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Image with heavy blur */}
            <img
              src={card.image}
              alt="Preview"
              className="w-full h-full object-cover blur-[20px] scale-110 group-hover:blur-[15px] transition-all duration-500"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            
            {/* Lock icon overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative">
                {/* Pulsing ring */}
                <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-xl animate-pulse"></div>
                
                {/* Lock icon */}
                <div className="relative bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-md rounded-full p-4 border border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                  <Lock className="w-5 h-5 text-pink-300" />
                </div>
              </div>
            </div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* CTA block */}
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-6 border border-pink-500/20 shadow-[0_0_50px_rgba(236,72,153,0.2)]">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <p className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
                UNLOCK ACCESS
              </p>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Exclusive content • No limits • Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}