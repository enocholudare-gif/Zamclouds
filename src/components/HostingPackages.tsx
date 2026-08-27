'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const packages = [
  {
    name: 'Starter',
    price: 'ZMW 500',
    duration: '/ month',
    description: 'Perfect for small websites, personal blogs, and startups.',
    features: [
      '10GB SSD Storage',
      'Free SSL Certificate',
      '1 Domain Hosted',
      '5 Professional Emails',
      '24/7 Basic Support',
      '99.9% Uptime Guarantee'
    ],
    popular: false
  },
  {
    name: 'Business',
    price: 'ZMW 1,200',
    duration: '/ month',
    description: 'Ideal for growing businesses and e-commerce stores.',
    features: [
      '50GB NVMe Storage',
      'Free SSL Certificate',
      'Unlimited Domains',
      'Unlimited Professional Emails',
      'Daily Automated Backups',
      'Priority 24/7 Support',
      'Free Website Migration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'ZMW 2,500',
    duration: '/ month',
    description: 'High-performance hosting for large-scale applications.',
    features: [
      'Unlimited NVMe Storage',
      'Free SSL Certificate',
      'Unlimited Domains',
      'Unlimited Professional Emails',
      'Advanced Security Suite',
      'Dedicated IP Address',
      'VIP Dedicated Support'
    ],
    popular: false
  }
];

export default function HostingPackages() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.hosting-card');
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-dark text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4">Cloud Infrastructure</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Hosting Packages</h2>
          <p className="text-gray-400 text-lg">
            Reliable, fast, and secure hosting solutions designed to keep your digital assets online 24/7 without congestion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`hosting-card relative flex flex-col p-8 rounded-3xl transition-transform hover:-translate-y-2 ${
                pkg.popular 
                  ? 'bg-accent/10 border-2 border-accent shadow-[0_0_40px_rgba(0,184,230,0.15)]' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-dark text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold font-display mb-2">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{pkg.price}</span>
                <span className="text-gray-400 text-sm ml-2">{pkg.duration}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="/contact" 
                className={`w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase text-center transition-colors ${
                  pkg.popular 
                    ? 'bg-accent text-dark hover:bg-accent/90' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
