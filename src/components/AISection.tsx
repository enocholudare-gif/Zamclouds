'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const aiApplications = [
  { title: 'Business Process Automation', desc: 'Automating repetitive, rule-based processes to reduce errors.' },
  { title: 'Predictive Analytics', desc: 'Data models that forecast demand and support commercial decisions.' },
  { title: 'Intelligent Reporting', desc: 'Dashboards surfacing the right information at the right time.' },
  { title: 'Document Processing', desc: 'Automated extraction of invoices, forms, and contracts.' },
  { title: 'Customer Service Automation', desc: 'Intelligent query handling and automated response systems.' },
  { title: 'Decision-Support Systems', desc: 'Data-driven recommendations to improve human decisions.' }
];

export default function AISection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % aiApplications.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ai" className="py-24 bg-primary text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,184,230,0.08),transparent_60%)] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              AI & Intelligent Systems
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight mb-6">
              AI as a practical tool for business improvement.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We build AI systems focused on measurable operational outcomes. Every capability we implement is tied to a specific business problem and a clear improvement in efficiency, accuracy or decision quality.
            </p>
            <Link href="/solutions" className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-wide hover:text-accent transition-colors hover-target" data-cursor="interactive">
              Explore AI solutions <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          {/* Right Content - Carousel of Words */}
          <div className="lg:col-span-7 relative">
            <div className="flex flex-col gap-6 pl-0 lg:pl-12 border-l-0 lg:border-l border-white/10">
              {aiApplications.map((app, i) => (
                <div 
                  key={app.title} 
                  className={`transition-all duration-700 ${i === activeIndex ? 'opacity-100 translate-x-4' : 'opacity-30 translate-x-0'}`}
                >
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-2 transition-colors duration-700 ${i === activeIndex ? 'text-accent' : 'text-gray-500'}`}>
                    {app.title}
                  </h3>
                  <div className={`grid transition-all duration-700 ${i === activeIndex ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden text-gray-400 font-medium text-sm md:text-base">
                      {app.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
