'use client';

import { useState } from 'react';
import { Layers, MapPin, Zap, Shield, Wrench, X } from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'Built Around Your Business',
    body: 'Bespoke systems designed around actual operational workflows, not forcing your business into generic off-the-shelf software.',
  },
  {
    icon: MapPin,
    title: 'Local Business Understanding',
    body: 'Technology solutions designed with real knowledge of African business environments, regulatory realities, and industry conditions.',
  },
  {
    icon: Zap,
    title: 'AI Where It Creates Value',
    body: 'Practical AI focused on automation, decision support, analytics and operational efficiency — not technology for its own sake.',
  },
  {
    icon: Shield,
    title: 'Cloud-Ready Architecture',
    body: 'Secure, scalable infrastructure engineered for modern business operations with a focus on reliability and long-term maintainability.',
  },
  {
    icon: Wrench,
    title: 'Engineering-Led Delivery',
    body: 'Emphasis on software engineering quality — clean code, comprehensive testing, security-first thinking and long-term support.',
  },
];

function FlipCard({ d }: { d: typeof differentiators[0] }) {
  const Icon = d.icon;

  return (
    <div 
      className="relative h-64 w-full [perspective:1000px] cursor-pointer group"
    >
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-8 rounded-2xl border border-gray-200 bg-white flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow group-hover:border-accent/30">
          <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 transition-colors">
            <Icon className="w-8 h-8 text-primary transition-colors" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-display text-primary">{d.title}</h3>
          <p className="text-xs text-accent uppercase tracking-widest font-bold mt-4 opacity-100 transition-opacity">Hover to read</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 rounded-2xl bg-accent text-white flex flex-col justify-center items-center text-center shadow-lg">
          <h3 className="text-lg font-bold font-display mb-4 border-b border-white/20 pb-4">{d.title}</h3>
          <p className="text-white/90 leading-relaxed font-medium text-sm md:text-base">{d.body}</p>
        </div>
      </div>
    </div>
  );
}

export default function Differentiators() {
  return (
    <section className="py-24 bg-gray-50 text-dark relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-accent inline-block"></span>
            Why Choose Us
            <span className="w-8 h-px bg-accent inline-block"></span>
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight">
            What makes us a different kind of technology partner.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <FlipCard key={d.title} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
