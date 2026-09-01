'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const industries = [
  {
    slug: 'mining',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
    title: 'Mining & Resources',
    description: 'Operational management systems, production data platforms, safety compliance tools, workforce management and real-time site analytics.',
    tags: ['ERP', 'Data Analytics', 'Safety'],
  },
  {
    slug: 'agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    title: 'Agriculture',
    description: 'Digital platforms for supply-chain traceability, crop management, market pricing tools, and agricultural data intelligence.',
    tags: ['Supply Chain', 'Market Data', 'AgriTech'],
  },
  {
    slug: 'finance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    title: 'Finance & Banking',
    description: 'Secure financial software, digital customer experiences, loan management, and process automation for modern institutions.',
    tags: ['FinTech', 'Automation', 'Compliance'],
  },
  {
    slug: 'government',
    image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070&auto=format&fit=crop',
    title: 'Public Sector',
    description: 'Public-facing digital services, internal workflow platforms, data management and reporting systems built for scale.',
    tags: ['GovTech', 'Workflow', 'Reporting'],
  },
  {
    slug: 'retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    title: 'Retail & Logistics',
    description: 'Inventory management, e-commerce platforms, fleet and delivery management and supply-chain visibility tools.',
    tags: ['E-Commerce', 'Inventory', 'Fleet'],
  },
  {
    slug: 'enterprise',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: 'Enterprise Solutions',
    description: 'Custom enterprise software, business intelligence platforms, HR systems and integrated applications for growing organisations.',
    tags: ['Enterprise', 'BI', 'Integration'],
  },
];

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.industry-card');
    
    if (cards) {
      gsap.fromTo(cards, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
    <section id="industries" ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-5xl mx-auto mb-16 gap-8 text-center md:text-left">
          <div className="flex-1">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              Industries We Serve
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight">
              Technology built <br/> around your sector.
            </h2>
          </div>
          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <p className="text-gray-500 text-lg leading-relaxed">
              We bring software engineering to the industries that form the backbone of the economy — with an understanding of their specific operational realities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div 
              key={industry.slug} 
              className="industry-card group relative h-96 md:h-[450px] rounded-2xl overflow-hidden hover-target cursor-pointer opacity-0"
              data-cursor="explore"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full bg-primary z-0">
                <img src={industry.image} alt={industry.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 lg:group-hover:-translate-y-2 transition-transform duration-500">{industry.title}</h3>
                <div className="max-h-[300px] opacity-100 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-48 lg:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
