'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TrustStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ultra smooth GSAP marquee
    gsap.to(textRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 35, // Slower, more premium speed
      repeat: -1,
    });
  }, { scope: containerRef });

  const items = [
    'Mining & Resources', 'Agriculture', 'Finance & Banking', 
    'Government', 'Retail & Logistics', 'Enterprise & SMEs', 
    'Cloud Infrastructure', 'Artificial Intelligence'
  ];

  // Quadruple items for safe infinite scrolling width
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <section ref={containerRef} className="bg-dark text-white border-y border-white/10 py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl mb-6">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-bold">
          Industries & Technologies we power across Africa
        </p>
      </div>

      <div className="flex whitespace-nowrap overflow-hidden">
        <div ref={textRef} className="flex w-max items-center">
          {marqueeItems.map((item, idx) => (
            <div 
              key={`${item}-${idx}`} 
              className="flex items-center gap-4 md:gap-6 mx-4 md:mx-8 group"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-500" />
              <span className="text-2xl md:text-5xl font-display font-bold text-gray-700 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter cursor-default">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
