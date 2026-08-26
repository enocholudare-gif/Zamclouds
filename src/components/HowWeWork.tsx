'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const steps = [
  { id: '01', title: 'Discover', desc: 'Deep operational analysis and requirement mapping.' },
  { id: '02', title: 'Architect', desc: 'System design, database modeling, and security planning.' },
  { id: '03', title: 'Prototype', desc: 'Rapid UI/UX wireframing and technical validation.' },
  { id: '04', title: 'Engineer', desc: 'Agile development with strict code-quality gates.' },
  { id: '05', title: 'Deploy', desc: 'Automated CI/CD pipelines and cloud provisioning.' },
  { id: '06', title: 'Scale & Support', desc: '24/7 monitoring, SLAs, and continuous iteration.' },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = containerRef.current?.querySelectorAll('.timeline-item');
    
    if (items) {
      gsap.fromTo(items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent-light/10 via-dark to-dark pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="mb-20 text-center md:text-left">
          <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-px bg-accent inline-block"></span>
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight max-w-3xl">
            Engineering maturity from concept to scale.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <div key={step.id} className="timeline-item relative z-10 bg-dark-elevated/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-accent/50 transition-colors duration-500 group">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all duration-500 font-mono text-6xl font-bold -z-10">
                {step.id}
              </div>
              
              <div className="w-3 h-3 rounded-full bg-accent mb-6 shadow-[0_0_15px_rgba(0,184,230,0.5)] group-hover:scale-150 transition-transform duration-500" />
              
              <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-accent-light transition-colors duration-500">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
