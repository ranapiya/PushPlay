'use client';

export function TrustSection() {
  const chains = [
    { name: 'Ethereum', logo: 'Ξ' },
    { name: 'Solana', logo: 'S' },
    { name: 'Base', logo: 'B' },
    { name: 'Polygon', logo: 'P' },
    { name: 'Arbitrum', logo: 'A' },
    { name: 'Optimism', logo: 'O' }
  ];

  return (
    <section className="py-16 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Supported Networks
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {chains.map((chain, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 opacity-60 hover:opacity-100 smooth-transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:scale-110 smooth-transition">
                {chain.logo}
              </div>
              <span className="text-sm font-medium">{chain.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
