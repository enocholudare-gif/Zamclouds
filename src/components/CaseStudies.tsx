'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const caseStudies = [
  {
    id: 1,
    industry: 'Enterprise',
    tag: 'Workflow Automation',
    title: 'Project Management System',
    challenge: 'Replaced fragmented processes with software built around the way businesses actually operate.',
    image: 'https://zamclouds.com/wp-content/uploads/2025/10/features01.jpg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Cloud'],
  },
  {
    id: 2,
    industry: 'Retail',
    tag: 'Digital Commerce',
    title: 'E-commerce Platform',
    challenge: 'End-to-end e-commerce platform handling complex product catalogues and local payment integration.',
    image: 'https://images.pexels.com/photos/34078558/pexels-photo-34078558.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&pl=r734&w=800&h=600',
    technologies: ['React', 'Laravel', 'MySQL', 'REST API'],
  },
  {
    id: 3,
    industry: 'Logistics',
    tag: 'Supply Chain',
    title: 'Cloud-Based Inventory Management',
    challenge: 'Provided supply-chain visibility and tracking capabilities across multiple warehouses.',
    image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Mobile App'],
  }
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  // Autoplay functionality changing every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    // Animate content change
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }

    // Animate image scale and clip on change
    imagesRef.current.forEach((img, i) => {
      if (!img) return;
      if (i === activeIndex) {
        gsap.to(img, { opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out', zIndex: 10 });
      } else {
        gsap.to(img, { opacity: 0, scale: 1.1, duration: 1.2, ease: 'power4.out', zIndex: 0 });
      }
    });

  }, [activeIndex]);

  const activeStudy = caseStudies[activeIndex];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-dark flex flex-col justify-center overflow-hidden py-24">
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/60 z-10" /> {/* Dark overlay */}
        {caseStudies.map((cs, i) => (
          <img
            key={cs.id}
            ref={(el) => { imagesRef.current[i] = el; }}
            src={cs.image}
            alt={cs.title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <p className="text-white text-sm uppercase tracking-widest font-bold flex items-center gap-2">
            <span className="w-12 h-px bg-white inline-block"></span>
            Featured Work
          </p>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors hover-target" data-cursor="interactive">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors hover-target" data-cursor="interactive">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Content */}
        <div ref={contentRef} className="flex-1 flex flex-col justify-end" data-cursor="view">
          <div className="max-w-4xl">
            <div className="flex gap-4 mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-dark bg-white px-4 py-2 rounded-full">
                {activeStudy.industry}
              </span>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-white border border-white/30 px-4 py-2 rounded-full">
                {activeStudy.tag}
              </span>
            </div>

            <Link href="/case-studies">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-[1.1] mb-6 hover:text-accent transition-colors">
                {activeStudy.title}
              </h2>
            </Link>
            
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
              {activeStudy.challenge}
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-3">
                {activeStudy.technologies.map((tech) => (
                  <span key={tech} className="text-sm font-medium px-4 py-2 rounded-full bg-dark-elevated text-gray-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link href="/case-studies" className="group inline-flex items-center gap-4 text-white text-lg font-bold uppercase tracking-wide hover:text-accent transition-colors hover-target">
                Explore Case Study 
                <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-0 right-6 flex gap-2">
          {caseStudies.map((_, i) => (
            <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-12 bg-white' : 'w-4 bg-white/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
