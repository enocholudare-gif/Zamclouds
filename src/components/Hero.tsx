'use client';

import { useEffect, useRef, useState } from 'react';
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

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-dark flex items-center">
      
      {/* Dynamic Background / Media layer */}
      <div ref={overlayRef} className="absolute inset-0 z-0 overflow-hidden bg-dark-elevated">
        <div ref={mediaRef} className="absolute inset-0 -top-[20%] h-[140%] w-full">
          <div className="absolute inset-0 bg-dark/70 z-10 mix-blend-multiply" />
          
          {images.map((img, idx) => (
            <img 
              key={img}
              src={img}
              alt="Background"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${
                idx === currentImage 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-20">
        <div className="max-w-5xl">
          
          <div className="mb-6 overflow-hidden">
            <span ref={addToRefs} className="inline-flex items-center space-x-2 px-4 py-1.5 text-xs font-bold tracking-widest text-gray-300 uppercase bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span>We challenge the basics</span>
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
              We engineer custom software, scalable cloud infrastructure, and practical AI solutions that elevate the digital experience.
            </span>
          </div>

          <div className="flex flex-wrap gap-4 items-center overflow-hidden">
            <span ref={addToRefs} className="block origin-bottom-left">
              <Link 
                href="#contact" 
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
