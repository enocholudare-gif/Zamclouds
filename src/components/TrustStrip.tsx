export default function TrustStrip() {
  const items = [
    { label: 'Mining & Resources', icon: '⛏' },
    { label: 'Agriculture', icon: '🌾' },
    { label: 'Finance & Banking', icon: '🏦' },
    { label: 'Government', icon: '🏛' },
    { label: 'Retail & Logistics', icon: '📦' },
    { label: 'Enterprise & SMEs', icon: '🏢' },
    { label: 'Cloud Infrastructure', icon: '☁️' },
    { label: 'Artificial Intelligence', icon: '🧠' },
  ];

  // Double the items for seamless infinite scroll
  const marqueeItems = [...items, ...items, ...items];

  return (
    <section className="bg-white border-y border-gray-100 py-6 overflow-hidden relative">
      {/* Gradient masks for smooth fade in/out on edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl mb-4">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-semibold">
          Industries & Technologies we power across Zambia
        </p>
      </div>

      <div className="flex w-max animate-marquee">
        {marqueeItems.map((item, idx) => (
          <div 
            key={`${item.label}-${idx}`} 
            className="flex items-center gap-3 text-gray-700 font-medium text-sm whitespace-nowrap mx-8 hover:text-accent transition-colors duration-300 cursor-default"
          >
            <span className="text-xl bg-gray-50 rounded-full p-2 border border-gray-100 shadow-sm">{item.icon}</span>
            <span className="tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
