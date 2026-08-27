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
    title: 'Custom Software Engineering',
    description: 'Bespoke enterprise systems, SaaS platforms, and core operational software built for scale.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    href: '/services/custom-software-engineering'
  },
  {
    id: '02',
    title: 'Web & Mobile Applications',
    description: 'High-performance, secure applications for iOS, Android, and the modern web.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-be234f86-caa1-4bd7-b5f1-c243bba5dc97.jpg',
    href: '/services/web-mobile-applications'
  },
  {
    id: '03',
    title: 'Cloud & DevOps',
    description: 'AWS/Azure architecture, automated deployment pipelines, and scalable cloud migrations.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-d296ef90-5753-406f-b38a-367ebc31e545.jpg',
    href: '/services/cloud-devops'
  },
  {
    id: '04',
    title: 'AI & Automation',
    description: 'Intelligent workflow automation and bespoke machine learning models.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-54c0d0c4-a610-4c61-ba18-818c277b6736.webp',
    href: '/services/ai-automation'
  },
  {
    id: '05',
    title: 'Data & Business Intelligence',
    description: 'Data warehousing, predictive analytics, and real-time visualization dashboards.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-d296ef90-5753-406f-b38a-367ebc31e545.jpg',
    href: '/services/data-business-intelligence'
  },
  {
    id: '06',
    title: 'CCTV Installation',
    description: 'State-of-the-art surveillance systems for enterprise and residential security.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    href: '/services/cctv-installation'
  },
  {
    id: '07',
    title: 'Smart Home Solutions',
    description: 'Intelligent home automation for security, energy management, and comfort.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-be234f86-caa1-4bd7-b5f1-c243bba5dc97.jpg',
    href: '/services/smart-home'
  },
  {
    id: '08',
    title: 'Digital Marketing & Branding',
    description: 'Data-driven marketing, SEO, and brand identity development for digital growth.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-d296ef90-5753-406f-b38a-367ebc31e545.jpg',
    href: '/services/digital-marketing'
  },
  {
    id: '09',
    title: 'IT Consultancy',
    description: 'Strategic IT leadership, digital transformation roadmaps, and technical advisory.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-54c0d0c4-a610-4c61-ba18-818c277b6736.webp',
    href: '/services/it-consultancy'
  },
  {
    id: '10',
    title: 'Emerging Technology',
    description: 'Integration of IoT, Blockchain, and advanced emerging tech into your business.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-d296ef90-5753-406f-b38a-367ebc31e545.jpg',
    href: '/services/emerging-technology'
  },
  {
    id: '11',
    title: 'Cyber Security',
    description: 'Comprehensive network defense, risk assessments, and proactive threat management.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    href: '/services/cyber-security'
  },
  {
    id: '12',
    title: 'Network Infrastructure',
    description: 'Robust enterprise networking, structured cabling, and wireless connectivity solutions.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-be234f86-caa1-4bd7-b5f1-c243bba5dc97.jpg',
    href: '/services/network'
  },
  {
    id: '13',
    title: 'Supplier of IT Hardware',
    description: 'Procurement of enterprise-grade servers, workstations, and network equipment.',
    image: 'https://cdn.phototourl.com/free/2026-08-26-d296ef90-5753-406f-b38a-367ebc31e545.jpg',
    href: '/services/it-hardware'
  }
];

function ServiceItem({ service, idx }: { service: typeof services[0], idx: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
      <div 
        className="service-item opacity-0 relative border-b border-white/10 transition-colors duration-500 hover:bg-white/5 cursor-pointer py-8 md:py-10 px-4 md:px-8 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 relative z-10">
          
          <div className="flex items-start md:items-center gap-6 md:gap-16 md:w-1/2">
            <span className={`text-lg md:text-xl font-mono font-bold transition-colors duration-500 ${isHovered ? 'text-accent' : 'text-gray-500'}`}>
              {service.id}
            </span>
            <h3 className={`text-3xl md:text-5xl font-display font-bold transition-transform duration-500 ${isHovered ? 'translate-x-2 md:translate-x-4' : ''}`}>
              {service.title}
            </h3>
          </div>

          <div className="md:w-1/2 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 ml-12 md:ml-0">
            <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100 translate-x-0' : 'max-h-0 md:max-h-40 md:opacity-0 opacity-0 -translate-x-4 md:-translate-x-8'}`}>
              <p className="text-gray-400 text-base md:text-lg">
                {service.description}
              </p>
              <span className="mt-4 md:hidden inline-block text-xs uppercase tracking-widest font-bold text-accent underline">
                View Capabilities
              </span>
            </div>
            
            <div className={`hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center shrink-0 transition-all duration-500 ${isHovered ? 'bg-accent border-accent -rotate-45' : 'rotate-0'}`}>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Hover Image Reveal (Desktop Only) */}
        <div 
          className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 overflow-hidden rounded-xl pointer-events-none z-0 transition-all duration-700 ${isHovered ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-50 rotate-0'}`}
        >
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
        </div>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.05] tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">
              Discover our comprehensive range of services tailored to meet the unique needs of businesses in Zambia.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-4 text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors hover-target" data-cursor="interactive">
            Explore Our Services <ArrowRight className="w-6 h-6" />
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
