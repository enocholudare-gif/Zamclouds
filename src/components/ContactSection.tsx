'use client';

import { useState, useRef } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 95%',
        once: true
      }
    });
    
    tl.fromTo('.cs-header', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
    
    tl.fromTo('.cs-item', 
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      "-=0.4"
    );

    tl.fromTo('.cs-form',
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    );
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for reaching out! We will get back to you shortly.');
    }, 1500);
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-dark text-white relative overflow-hidden border-t border-white/5">
      
      {/* Background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,184,230,0.05),transparent_60%)] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,184,230,0.03),transparent_60%)] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Contact Info */}
          <div>
            <p className="cs-header text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              Contact Us
            </p>
            <h2 className="cs-header text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
              Let's build <br className="hidden md:block" /> something <span className="text-accent">great.</span>
            </h2>
            <p className="cs-header text-lg text-gray-400 mb-12 max-w-md leading-relaxed">
              Whether you need bespoke software, cloud infrastructure, or enterprise AI, our team is ready to help you scale.
            </p>

            <div className="space-y-8">
              <div className="cs-item flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:info@zamclouds.com" className="text-gray-400 hover:text-white transition-colors">info@zamclouds.com</a>
                </div>
              </div>

              <div className="cs-item flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-400">1517 Findeco House<br/>Lusaka, Zambia</p>
                </div>
              </div>

              <div className="cs-item flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+260964373241" className="text-gray-400 hover:text-white transition-colors">+260 964 373 241</a>
                    <a href="tel:0976349897" className="text-gray-400 hover:text-white transition-colors">097 634 9897</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="cs-form bg-gray-950/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold font-display mb-8">Start a Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-dark transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-dark transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-dark transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-dark transition-colors"
                    placeholder="+260..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Project Type</label>
                <select className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-dark transition-colors appearance-none">
                  <option value="custom-software">Custom Software Engineering</option>
                  <option value="cloud-devops">Cloud & DevOps</option>
                  <option value="ai-automation">AI & Automation</option>
                  <option value="web-mobile">Web & Mobile Apps</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-dark transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
