'use client';

import { useRef } from 'react';
import { ArrowRight, Box, ShieldCheck, Database } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const products = [
  {
    id: 'Ntanda LMS',
    category: 'Education Technology',
    icon: Box,
    description: 'An enterprise-grade learning management system tailored for African universities and corporate training, handling 10,000+ concurrent users.',
    link: '/products#ntanda-lms',
  },
  {
    id: 'ZamERP',
    category: 'Business Operations',
    icon: Database,
    description: 'A unified ERP platform integrating payroll, inventory, and accounting, built specifically for Zambian tax and labor compliance.',
    link: '/products#zamerp',
  },
  {
    id: 'ZCP Microfinance Core',
    category: 'Financial Technology',
    icon: ShieldCheck,
    description: 'A high-security lending and loan management system powering Tier 3 and Tier 4 financial institutions.',
    link: '/products#microfinance',
  }
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.product-card');
    
    if (cards) {
      gsap.fromTo(cards, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-primary text-white relative overflow-hidden border-y border-white/5">
      {/* Blueprint: Subtle cyan/blue light & depth */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              Products & Platforms
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight">
              Scalable IP engineered for <br className="hidden md:block" /> African enterprises.
            </h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-wide hover:text-accent transition-colors hover-target" data-cursor="interactive">
            Explore All Products <ArrowRight className="w-6 h-6" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.id} className="product-card relative bg-dark-elevated border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-500 flex flex-col group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 w-14 h-14 rounded-xl bg-dark border border-white/5 shadow-inner flex items-center justify-center mb-8 group-hover:border-accent/30 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-accent-light group-hover:text-accent transition-colors duration-500" />
                </div>
                
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{product.category}</p>
                  <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-accent transition-colors duration-300">{product.id}</h3>
                  <p className="text-gray-400 leading-relaxed font-light mb-8 flex-1">{product.description}</p>
                  
                  <Link href={product.link} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">
                    View Product <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
