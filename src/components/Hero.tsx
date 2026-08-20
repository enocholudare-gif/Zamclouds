'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cloud, Code, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: "https://zamclouds.com/wp-content/uploads/2025/10/admin-uses-laptop-develop-technologically-advanced-artificial-intelligence-neural-networks-nodes-modeled-after-human-brain-worker-setting-up-ai-machine-learning-pattern-recognition-scaled.jpg",
    tag: "Enterprise Technology Partner",
    title: "Bespoke Systems for Modern Business",
    subtitle: "We engineer custom software, scalable cloud infrastructure, and practical AI solutions for businesses operating in Zambia and beyond."
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg",
    tag: "Innovation & Transformation",
    title: "Transforming Businesses Through Innovation",
    subtitle: "From idea to enterprise, your trusted partner in navigating the digital landscape and building resilient systems."
  },
  {
    id: 3,
    image: "https://zamclouds.com/wp-content/uploads/2025/10/pexels-photo-8386440.jpeg",
    tag: "Data & AI Solutions",
    title: "Intelligent Systems for Real Growth",
    subtitle: "Driving efficiency, automation, and intelligent growth across Zambia's key industries with practical AI applications."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-primary flex items-center">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-primary/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 max-w-7xl pt-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 shadow-xl">
                <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide text-gray-200 uppercase">{slides[current].tag}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 text-white drop-shadow-lg">
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className={word.toLowerCase() === 'modern' || word.toLowerCase() === 'innovation' || word.toLowerCase() === 'intelligent' ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-accent hover:bg-accent-light shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1">
              Start a Project
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 backdrop-blur-sm text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-all duration-300">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-10 right-6 md:right-10 z-30 flex items-center gap-4">
        <div className="flex gap-2 mr-4">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-accent' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
