'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

  return (
    <section className="py-24 bg-dark text-white relative">
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
                className="group relative border-b border-white/10 transition-colors duration-500 hover:bg-white/5"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href="/contact" className="block py-10 px-4 md:px-8 hover-target" data-cursor="interactive">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                    
                    <div className="flex items-start md:items-center gap-8 md:gap-16 w-full md:w-1/2">
                      <span className={`text-xl font-mono font-bold transition-colors duration-500 ${isHovered ? 'text-accent' : 'text-gray-500'}`}>
                        {service.id}
                      </span>
                      <h3 className={`text-3xl md:text-5xl font-display font-bold transition-transform duration-500 ${isHovered ? 'md:translate-x-4' : ''}`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center justify-between gap-8">
                      <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 md:max-h-40 opacity-0 md:opacity-0 md:-translate-x-8'}`}>
                        <p className="text-gray-400 text-lg">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-500 ${isHovered ? 'bg-accent border-accent -rotate-45' : 'rotate-0'}`}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Hover/Tap Image Reveal */}
                  <div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-40 md:h-48 overflow-hidden rounded-xl pointer-events-none z-0 transition-all duration-700 ${isHovered ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-50 rotate-0'}`}
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
