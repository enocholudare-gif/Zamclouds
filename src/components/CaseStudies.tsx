'use client';

import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Pulled directly from zamclouds.com live content
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
  },
  {
    id: 4,
    industry: 'Data',
    tag: 'Analytics',
    title: 'Data Analytics Dashboard',
    challenge: 'Predictive analytics and intelligent reporting systems built for real business problems.',
    image: 'https://zamclouds.com/wp-content/uploads/2025/10/admin-uses-laptop-develop-technologically-advanced-artificial-intelligence-neural-networks-nodes-modeled-after-human-brain-worker-setting-up-ai-machine-learning-pattern-recognition-scaled.jpg',
    technologies: ['Python', 'Django', 'MongoDB', 'React'],
  }
];

export default function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              Our Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary leading-tight">
              A showcase of our successful projects.
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/case-studies" className="hidden lg:inline-flex items-center text-primary font-semibold hover:text-accent transition-colors gap-2 shrink-0">
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Horizontal Scroll Carousel */}
      <div className="pl-6 md:pl-0 md:container mx-auto max-w-7xl">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-10 pt-4 px-2 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {caseStudies.map((cs) => (
            <motion.div 
              key={cs.id}
              whileHover={{ y: -8 }}
              className="min-w-[85vw] md:min-w-[600px] max-w-[800px] shrink-0 snap-center md:snap-start bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-primary group">
                  <img 
                    src={cs.image} 
                    alt={cs.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-accent px-3 py-1.5 rounded-full shadow-lg">
                      {cs.industry}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{cs.tag}</p>
                    <h3 className="text-2xl font-bold font-display text-primary leading-tight mb-4">{cs.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{cs.challenge}</p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cs.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">{tech}</span>
                      ))}
                    </div>
                    
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:gap-3 transition-all">
                      Read full case study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CSS to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
