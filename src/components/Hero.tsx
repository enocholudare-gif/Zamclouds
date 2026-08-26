'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mediaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Initial Mask/Clip-path transition on background
    tl.fromTo(overlayRef.current,
      { clipPath: 'inset(20% 10% 20% 10%)', scale: 1.1 },
      { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.5, ease: 'expo.inOut' }
    );

    // 2. Text Reveal (Cuberto style)
    tl.fromTo(textRefs.current,
      { y: '120%', rotateZ: 3, opacity: 0 },
      { y: '0%', rotateZ: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power4.out' },
      "-=0.8" // overlap with clip path
    );

    // 3. Parallax effect on scroll
    gsap.to(mediaRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: containerRef });

  const addToRefs = (el: HTMLSpanElement) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  // Background is now abstract CSS, images removed to meet blueprint guidelines.

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-dark flex items-center">
      
      {/* Dynamic Background / Media layer */}
      <div ref={overlayRef} className="absolute inset-0 z-0 overflow-hidden bg-dark-elevated">
        <div ref={mediaRef} className="absolute inset-0 -top-[20%] h-[140%] w-full flex items-center justify-center">
          {/* Video Background */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
            <source src="https://videotourl.com/videos/1787773611279-d7206af5-cc53-4ec3-bcf1-a92ba6c4c69a.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-dark/60 to-dark z-10" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-20">
        <div className="max-w-5xl">
          
          <div className="mb-6 overflow-hidden">
            <span ref={addToRefs} className="inline-flex items-center space-x-2 px-4 py-1.5 text-xs font-bold tracking-widest text-gray-300 uppercase bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span>Enterprise Software Engineering</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.05] tracking-tighter text-white mb-6">
            <div className="overflow-hidden">
              <span ref={addToRefs} className="block origin-bottom-left">Bespoke Systems.</span>
            </div>
            <div className="overflow-hidden">
              <span ref={addToRefs} className="block origin-bottom-left text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Limitless Scale.
              </span>
            </div>
          </h1>
          
          <div className="overflow-hidden mb-10 max-w-2xl">
            <span ref={addToRefs} className="block text-base md:text-lg text-gray-300 font-light leading-relaxed origin-bottom-left">
              Custom software engineering and intelligent platforms for organisations ready to scale.
            </span>
          </div>

          <div className="flex flex-wrap gap-4 items-center overflow-hidden">
            <span ref={addToRefs} className="block origin-bottom-left">
              <Link 
                href="/contact" 
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-dark transition-all duration-500 hover:scale-[1.02] hover-target"
              >
                <span className="relative z-10 tracking-wide uppercase font-bold text-sm">Start a Project</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
