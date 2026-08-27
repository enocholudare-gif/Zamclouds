'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'CSR', href: '/csr' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'expo.inOut' }
      );

      gsap.fromTo(
        linksRef.current,
        { y: '100%', rotateZ: 5, opacity: 0 },
        { y: '0%', rotateZ: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power4.out', delay: 0.4 }
      );
    }
  }, [open]);

  const closeMenu = () => {
    gsap.to(linksRef.current, {
      y: '-100%',
      opacity: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power3.in'
    });
    
    gsap.to(menuRef.current, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.6,
      ease: 'expo.inOut',
      delay: 0.2,
      onComplete: () => setOpen(false)
    });
  };

  const addLinkRef = (el: HTMLAnchorElement) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-dark-elevated/90 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 relative z-[60] group hover-target" onClick={() => open && closeMenu()}>
              <img src="https://cdn.phototourl.com/free/2026-08-26-292fda2e-7a31-44fe-8e5d-266a456c1b1f.png" alt="Zamclouds Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide uppercase text-gray-300 hover:text-white transition-colors hover-target"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 relative z-[60]">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-dark font-bold text-sm tracking-wide uppercase hover:bg-gray-200 transition-colors hover-target"
              >
                Start a Project
              </Link>
              
              <button
                onClick={() => (open ? closeMenu() : setOpen(true))}
                className="lg:hidden w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover-target"
                aria-label="Toggle menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-dark flex flex-col pt-24 pb-8 overflow-y-auto px-6 lg:px-20 ${!open && 'pointer-events-none opacity-0'}`}
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      >
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        
        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <div key={link.href} className="overflow-hidden">
              <Link
                ref={addLinkRef}
                href={link.href}
                onClick={closeMenu}
                className="block text-4xl md:text-6xl font-display font-bold text-white hover:text-accent transition-colors origin-bottom-left"
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="overflow-hidden mt-8">
            <Link
              ref={addLinkRef}
              href="/contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-4 text-2xl font-bold text-accent hover:text-white transition-colors origin-bottom-left"
            >
              Start a Project <ArrowRight className="w-8 h-8" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
