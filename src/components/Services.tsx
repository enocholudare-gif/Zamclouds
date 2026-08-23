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

function ServiceItem({ service, idx }: { service: typeof services[0], idx: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="service-item relative border-b border-white/10 transition-colors duration-500 hover:bg-white/5 opacity-0 [perspective:1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Mobile Design: 3D Flip Row */}
      <div className={`md:hidden relative w-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateX(180deg)]' : ''}`} style={{ minHeight: '120px' }}>
        
        {/* Front */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex items-center p-6 bg-dark">
          <span className="text-xl font-mono font-bold text-gray-500 mr-6">
            {service.id}
          </span>
          <h3 className="text-2xl font-display font-bold text-white">
            {service.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-500 ml-auto" />
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] bg-accent overflow-hidden">
          <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white">
            <h3 className="text-xl font-display font-bold mb-2">{service.title}</h3>
            <p className="text-sm font-medium leading-snug">{service.description}</p>
            <Link href="/contact" className="mt-4 inline-block text-xs uppercase tracking-widest font-bold underline">
              Start Project
            </Link>
          </div>
        </div>

      </div>

      {/* Desktop Design: Accordion List with Hover Image */}
      <Link href="/contact" className="hidden md:block py-10 px-8 hover-target" data-cursor="interactive">
        <div className="flex items-center justify-between gap-8 relative z-10">
          
          <div className="flex items-center gap-16 w-1/2">
            <span className={`text-xl font-mono font-bold transition-colors duration-500 ${isHovered ? 'text-accent' : 'text-gray-500'}`}>
              {service.id}
            </span>
            <h3 className={`text-5xl font-display font-bold transition-transform duration-500 ${isHovered ? 'translate-x-4' : ''}`}>
              {service.title}
            </h3>
          </div>

          <div className="w-1/2 flex items-center justify-between gap-8">
            <div className={`overflow-hidden transition-all duration-500 max-h-40 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-gray-400 text-lg">
                {service.description}
              </p>
            </div>
            
            <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-500 ${isHovered ? 'bg-accent border-accent -rotate-45' : 'rotate-0'}`}>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Hover Image Reveal */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 overflow-hidden rounded-xl pointer-events-none z-0 transition-all duration-700 ${isHovered ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-50 rotate-0'}`}
        >
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
        </div>
      </Link>
    </div>
  );
}

export default function Services() {
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
          {services.map((service, idx) => (
            <ServiceItem key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
