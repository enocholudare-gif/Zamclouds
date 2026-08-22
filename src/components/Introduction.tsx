'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    
    // Split text into words
    const text = textRef.current.innerText;
    const words = text.split(' ');
    textRef.current.innerHTML = '';
    
    words.forEach(word => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.className = 'opacity-20 transition-colors inline-block text-primary';
      textRef.current?.appendChild(span);
    });

    const spans = textRef.current.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      color: '#B87333', // accent color
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 40%',
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-white text-primary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 
          ref={textRef} 
          className="text-3xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.2] md:leading-[1.1] tracking-tight"
        >
          We don't just write code. We architect strategic platforms that solve complex operational challenges, driving measurable growth and long-term resilience for forward-thinking enterprises.
        </h2>
      </div>
    </section>
  );
}
