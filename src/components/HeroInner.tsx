'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown } from 'lucide-react';

interface HeroInnerProps {
  title: string;
  subtitle: string;
  category?: string;
  image?: string;
}

export default function HeroInner({ title, subtitle, category, image = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' }: HeroInnerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(bgRef.current,
      { scale: 1.2, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 0.3, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }
    );

    tl.fromTo(textRef.current?.children || [],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' },
      "-=1"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0 bg-dark">
        <img ref={bgRef} src={image} alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 text-center max-w-4xl">
        <div ref={textRef}>
          {category && (
            <div className="mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                {category}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
            {subtitle}
          </p>
          
          <div className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
