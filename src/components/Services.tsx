'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  LineChart, 
  Send, 
  ShieldCheck, 
  Lock, 
  Layers, 
  Headset, 
  LifeBuoy
} from 'lucide-react';
import Link from 'next/link';

// Extracted directly from zamclouds.com live content
const services = [
  {
    icon: Lock,
    title: 'IT Consulting',
    description: 'Our experts provide insights and strategies to help you navigate the ever-evolving technological landscape.',
    href: '/contact',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Send,
    title: 'Digital Marketing',
    description: 'We help businesses grow their online presence and reach their target audience through effective digital marketing strategies.',
    href: '/contact',
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Our data analytics services provide actionable insights to drive informed business decisions and improve performance.',
    href: '/contact',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: Layers,
    title: 'Scalability',
    description: 'Our solutions are built to grow with your business, ensuring long-term success and adaptable infrastructure.',
    href: '/contact',
    gradient: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    icon: Headset,
    title: 'User-Friendly Interfaces',
    description: 'We prioritize user experience in all our software, making it easy for everyone to navigate and utilize.',
    href: '/contact',
    gradient: 'from-amber-500/20 to-orange-500/20'
  },
  {
    icon: ShieldCheck,
    title: '24/7 Technical Support',
    description: 'Our dedicated support team is available around the clock to assist you and ensure your systems are running smoothly.',
    href: '/contact',
    gradient: 'from-red-500/20 to-pink-500/20'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 50, duration: 0.5 }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/4" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              Our Services & Features
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary leading-tight">
              Discover comprehensive services tailored for your business.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center text-accent font-semibold hover:text-accent-light transition-colors gap-2 shrink-0 group">
            Explore Our Services 
            <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants} className="h-full">
                <Link
                  href={service.href}
                  className="group relative flex flex-col p-8 rounded-2xl border border-gray-200 bg-white hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden h-full z-10"
                >
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                  
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:shadow-md transition-all duration-300 relative">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors relative z-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 font-display group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1 mb-8 group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-accent text-sm font-bold gap-2 overflow-hidden">
                    <span className="transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="absolute transform translate-x-0 opacity-100 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300">
                      Explore
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
