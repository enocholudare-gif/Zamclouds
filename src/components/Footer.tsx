import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const services = [
  { label: 'Custom Software Development', href: '/services#software' },
  { label: 'Cloud Solutions', href: '/services#cloud' },
  { label: 'Web & Mobile Development', href: '/services#web-mobile' },
  { label: 'E-Commerce Solutions', href: '/services#ecommerce' },
  { label: 'AI & Data Analytics', href: '/services#ai' },
  { label: 'IT Consulting', href: '/services#consulting' },
  { label: 'Hosting', href: '/hosting' },
];

const company = [
  { label: 'About ZCP', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Industries', href: '/industries' },
  { label: 'AI & Solutions', href: '/solutions' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-lg font-display">Z</div>
              <span className="font-bold text-white text-lg font-display">ZCP</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Zambian Cloud Programmers builds bespoke software, cloud infrastructure and practical AI systems for businesses operating in Zambia and beyond.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Lusaka, Zambia</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@zamclouds.com" className="hover:text-white transition-colors">info@zamclouds.com</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Start a Project</h4>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Ready to build something? Tell us about your requirements and we will respond within one business day.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-amber-600 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Zambian Cloud Programmers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
