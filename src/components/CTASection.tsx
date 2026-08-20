'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,115,51,0.2),transparent_60%)]" />
      </div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold font-display leading-tight mb-6">
          Have a business problem technology can solve?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Tell us what you are building, improving or automating. Our team will assess your requirements and outline how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-light transition-colors text-lg"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            Talk to Our Team
          </Link>
        </div>

        {/* Contact form strip */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto text-left">
          <h3 className="text-xl font-bold mb-6">Send us a message</h3>
          <form className="grid sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-gray-400 font-medium">Full Name</label>
              <input id="name" type="text" placeholder="Jane Mwale" required className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="company" className="text-sm text-gray-400 font-medium">Company</label>
              <input id="company" type="text" placeholder="Acme Corp" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-gray-400 font-medium">Email Address</label>
              <input id="email" type="email" placeholder="jane@company.zm" required className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-sm text-gray-400 font-medium">Phone Number</label>
              <input id="phone" type="tel" placeholder="+260 97 000 0000" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent text-sm" />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="service" className="text-sm text-gray-400 font-medium">Service of Interest</label>
              <select id="service" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent text-sm">
                <option value="" className="bg-gray-900">Select a service</option>
                <option value="software" className="bg-gray-900">Custom Software Development</option>
                <option value="cloud" className="bg-gray-900">Cloud Solutions</option>
                <option value="web-mobile" className="bg-gray-900">Web &amp; Mobile Development</option>
                <option value="ecommerce" className="bg-gray-900">E-Commerce</option>
                <option value="ai" className="bg-gray-900">AI &amp; Data Analytics</option>
                <option value="consulting" className="bg-gray-900">IT Consulting</option>
                <option value="hosting" className="bg-gray-900">Hosting</option>
                <option value="other" className="bg-gray-900">Other / Not Sure</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="message" className="text-sm text-gray-400 font-medium">Project Description</label>
              <textarea id="message" rows={4} required placeholder="Briefly describe your project, problem or what you would like to achieve..." className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent text-sm resize-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-light transition-colors">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
