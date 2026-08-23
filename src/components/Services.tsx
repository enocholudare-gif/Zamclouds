'use client';

import { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    id: '01',
    title: 'IT Consulting',
    description: 'Strategic technological guidance to help you navigate digital transformation and infrastructure modernization.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '02',
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and highly available cloud architecture designed for enterprise workloads.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '03',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business intelligence with custom dashboards and predictive models.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '04',
    title: 'Artificial Intelligence',
    description: 'Practical AI integration automating workflows, enhancing decision-making, and driving efficiency.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = containerRef.current?.querySelectorAll('.service-item');
    
    if (items) {
      gsap.fromTo(items, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-dark text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight">
              We build solutions <br />
              <span className="text-gray-500">that scale effortlessly.</span>
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-4 text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors hover-target" data-cursor="interactive">
            All Services <ArrowRight className="w-6 h-6" />
          </Link>
        </div>

        <div className="border-t border-white/10">
          {services.map((service, idx) => {
            const isHovered = hoveredIndex === idx;
            
            return (
              <div 
                key={service.id}
                className="service-item group relative border-b border-white/10 transition-colors duration-500 hover:bg-white/5 opacity-0"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href="/contact" className="block py-10 px-4 md:px-8 hover-target" data-cursor="interactive">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                    
                    <div className="flex items-start md:items-center gap-4 md:gap-16 w-full md:w-1/2">
                      <span className={`text-xl font-mono font-bold transition-colors duration-500 ${isHovered ? 'text-accent' : 'text-gray-500'}`}>
                        {service.id}
                      </span>
                      <h3 className={`text-2xl md:text-5xl font-display font-bold transition-transform duration-500 ${isHovered ? 'md:translate-x-4' : ''}`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center justify-between gap-4 md:gap-8">
                      <div className={`overflow-hidden transition-all duration-500 max-h-40 opacity-100 md:max-h-40 ${isHovered ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:-translate-x-8'}`}>
                        <p className="text-gray-400 text-base md:text-lg">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-500 ${isHovered ? 'bg-accent border-accent -rotate-45' : 'rotate-0'}`}>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Image Reveal (Hidden on Mobile) */}
                  <div 
                    className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-40 md:h-48 overflow-hidden rounded-xl pointer-events-none z-0 transition-all duration-700 ${isHovered ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-50 rotate-0'}`}
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
