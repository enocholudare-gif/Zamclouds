'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-32 md:py-48 bg-dark text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-accent/20 blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <p className="text-accent text-sm md:text-base uppercase tracking-widest font-bold mb-8">
          Let's build something great.
        </p>
        
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold font-display leading-none tracking-tighter mb-16">
          Ready to <br/> scale?
        </h2>

        <Link 
          href="/contact" 
          className="group relative inline-flex items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-accent rounded-full text-white font-bold uppercase tracking-widest hover:scale-110 transition-transform duration-500 hover-target shadow-2xl shadow-accent/20"
          data-cursor="interactive"
        >
          <span className="relative z-10 flex flex-col items-center gap-2">
            Start a <br/> Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </span>
          <div className="absolute inset-0 rounded-full border border-white/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
        </Link>
      </div>
    </section>
  );
}
