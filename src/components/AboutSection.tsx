'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-8">
              Engineering <br/> Excellence.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              We are a team of technologists, strategists, and engineers who believe that software should be an enabler, not a bottleneck. We build robust systems designed for reality.
            </p>
            
            <a href="/about" className="inline-flex items-center gap-4 text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors hover-target" data-cursor="interactive">
              More about us
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="w-full md:w-1/2 h-[60vh] rounded-3xl overflow-hidden relative" data-cursor="explore">
            <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay" />
            <img 
              ref={imageRef}
              src="/grid.svg" 
              alt="Team collaborating" 
              className="absolute top-[-20%] left-0 w-full h-[140%] object-cover scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
