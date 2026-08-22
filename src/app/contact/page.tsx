'use client';

import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for reaching out! We will get back to you shortly.');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 bg-dark text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">
              Let's build <br className="hidden md:block" /> something <span className="text-accent">great.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Whether you need bespoke software, cloud infrastructure, or enterprise AI, our team is ready to help you scale.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400">info@zamclouds.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-400">Lusaka, Zambia<br/>Remote & On-site</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400">Available Mon-Fri, 9am - 5pm CAT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-950 p-8 md:p-12 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8">Start a Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Project Type</label>
                <select className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option value="software">Custom Software Development</option>
                  <option value="cloud">Cloud Infrastructure</option>
                  <option value="ai">AI & Analytics</option>
                  <option value="web">Web & Mobile Apps</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your requirements, timeline, and budget..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
