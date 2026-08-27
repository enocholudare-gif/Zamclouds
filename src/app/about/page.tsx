'use client';

import { useRef } from 'react';
import CTASection from '@/components/CTASection';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    gsap.fromTo('.about-hero-text', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
    
    // Parallax Image
    gsap.to('.parallax-img', {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Fade up sections
    const sections = gsap.utils.toArray('.fade-up-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%'
          }
        }
      );
    });

    // Staggered list items
    const lists = gsap.utils.toArray('.stagger-list');
    lists.forEach((list: any) => {
      gsap.fromTo(list.children,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: list,
            start: 'top 85%'
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 bg-dark text-white min-h-screen selection:bg-accent selection:text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,184,230,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <p className="about-hero-text text-accent text-sm uppercase tracking-widest font-bold mb-6 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-accent inline-block"></span>
            Who We Are
            <span className="w-8 h-px bg-accent inline-block"></span>
          </p>
          <h1 className="about-hero-text text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
            Zambian Cloud Programmers
          </h1>
          <h2 className="about-hero-text text-2xl md:text-3xl text-gray-300 font-light mb-12">
            We Help You <span className="text-white font-bold">Digitize → Automate → Scale</span>
          </h2>
          <p className="about-hero-text text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">
            At Zambian Cloud Programmers (ZCP), we are not just software vendors — we are transformation partners. We exist to empower businesses, institutions, and organizations across Zambia and Africa to embrace digital transformation with confidence, innovation, and impact.
          </p>
          <p className="about-hero-text text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between technology and business growth, ZCP provides custom-built digital solutions that simplify complex operations, enhance efficiency, and unlock new opportunities for scale. We believe that every organization deserves world-class technology, built locally, tailored to its needs, and aligned with its vision.
          </p>
        </div>
      </section>

      {/* Featured Image Parallax */}
      <section className="parallax-container relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-y border-white/10">
        <img 
          src="https://zamclouds.com/wp-content/uploads/2025/10/admin-uses-laptop-develop-technologically-advanced-artificial-intelligence-neural-networks-nodes-modeled-after-human-brain-worker-setting-up-ai-machine-learning-pattern-recognition-scaled.jpg" 
          alt="Admin uses laptop to develop technologically advanced artificial intelligence"
          className="parallax-img absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
        />
        <div className="absolute inset-0 bg-dark/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="fade-up-section bg-gray-900/50 p-12 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors" />
              <h3 className="text-accent text-sm uppercase tracking-widest font-bold mb-6">Mission</h3>
              <p className="text-2xl lg:text-3xl font-display font-medium leading-relaxed">
                To empower African businesses and institutions with reliable, intelligent, and scalable software solutions that transform operations, inspire innovation, and drive measurable growth.
              </p>
            </div>
            
            <div className="fade-up-section bg-gray-900/50 p-12 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors" />
              <h3 className="text-accent text-sm uppercase tracking-widest font-bold mb-6">Vision</h3>
              <p className="text-2xl lg:text-3xl font-display font-medium leading-relaxed">
                To be Zambia's leading digital transformation partner — building systems that redefine how Africa works, learns, and grows through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,184,230,0.05),transparent_70%)] -translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="fade-up-section mb-16 text-center max-w-3xl mx-auto">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">We design and implement smart, cloud-powered solutions.</h2>
            <p className="text-gray-400 text-lg">Covering every aspect of modern enterprise operations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-list">
            {[
              { title: 'ERP & Business Management', desc: 'Comprehensive platforms that streamline finance, HR, inventory, and operations.' },
              { title: 'School & University Systems', desc: 'End-to-end academic administration tools that empower institutions to manage students, staff, and finances efficiently.' },
              { title: 'Hospital & Clinic Systems', desc: 'Digital health solutions built to improve patient care, records management, and service delivery.' },
              { title: 'Church & NGO Systems', desc: 'Faith and community-based management platforms that bring structure and transparency to service.' },
              { title: 'Custom Software & Web', desc: 'Tailor-made applications and websites designed to reflect your brand and business goals.' },
              { title: 'Hosting, Cloud & Email', desc: 'Secure, fast, and affordable cloud hosting with unlimited professional emails and chatbot integration.' }
            ].map((service) => (
              <div key={service.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gray-950 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up-section">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                We dream together,<br/>we build together.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                At ZCP, we believe in co-creation — turning your ideas into practical, high-impact digital realities. Our process combines deep technical expertise with an understanding of business strategy, ensuring that every system we build truly transforms how you work.
              </p>
              
              <div className="space-y-6 mt-10 stagger-list">
                {[
                  { num: '01', title: 'Understand Your Vision', desc: 'We listen to your goals and challenges.' },
                  { num: '02', title: 'Design Smart Solutions', desc: 'We tailor every system to your exact needs.' },
                  { num: '03', title: 'Implement & Automate', desc: 'We deploy solutions that simplify operations and reduce manual work.' },
                  { num: '04', title: 'Support & Scale', desc: 'We walk with you as you grow, offering continuous updates, support, and innovation.' }
                ].map((step) => (
                  <div key={step.num} className="flex gap-6">
                    <span className="text-2xl font-mono text-accent font-bold mt-1">{step.num}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up-section bg-dark p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold font-display mb-8">Our Promise</h3>
              <p className="text-3xl font-display text-white mb-6 leading-tight">
                "You dream it — we build it."
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Together, we digitize your operations, automate your processes, and scale your impact.
              </p>
              <ul className="space-y-4 text-gray-300 stagger-list">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Locally grounded, globally minded 🇿🇲</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Proven expertise in cloud technology & ERP systems</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Dedicated support and customization</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Affordable and scalable digital solutions</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Passionate team of innovators and engineers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="fade-up-section max-w-4xl mx-auto text-center">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">Mr. Clement Kamanda</h2>
            <p className="text-xl text-white font-medium mb-8">
              Head of Business and Strategic Development
            </p>
            <div className="space-y-6 text-gray-400 text-lg text-left leading-relaxed font-sans">
              <p>
                Mr. Clement Kamanda is the visionary force behind Zambian Cloud Programmers. A dynamic leader and tech entrepreneur, Mr. Kamanda has dedicated his career to driving digital transformation and innovation across Zambia and Africa.
              </p>
              <p>
                With a strong background in business management, software systems development, and institutional growth strategy, he has guided ZCP from a local startup into a fast-rising technology brand known for its commitment to excellence, reliability, and innovation.
              </p>
              <p>
                Under his leadership, ZCP has developed and deployed cutting-edge ERP systems, educational platforms, hospital management systems, and automation tools that empower organizations to Digitize → Automate → Scale.
              </p>
              <p>
                Mr. Kamanda’s approach to leadership combines strategic vision, hands-on innovation, and people-centered management. He believes in nurturing local talent, building sustainable digital ecosystems, and helping African institutions compete confidently in the global technology landscape.
              </p>
              <p>
                Beyond ZCP, Mr. Kamanda is a passionate advocate for entrepreneurship, education, and youth empowerment, contributing his expertise to initiatives that promote skills development, digital literacy, and business mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
