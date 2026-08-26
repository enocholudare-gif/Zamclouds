import { Shield, Lock, Server, CheckCircle2 } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function SecurityPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-dark text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6">
            Enterprise Security & Compliance
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            We build software with security as a foundational requirement, not an afterthought. Our systems are engineered to protect your operational data and ensure business continuity.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Lock className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display text-primary mb-4">Data Protection</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>AES-256 encryption at rest and TLS 1.3 in transit.</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Strict tenant data isolation in multi-tenant architectures.</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Automated daily backups and geographic redundancy.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Server className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display text-primary mb-4">Infrastructure</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>AWS/Azure cloud environments utilizing the Shared Responsibility Model.</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>DDoS protection and Web Application Firewalls (WAF) active by default.</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Zero-trust network architecture for internal services.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Shield className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display text-primary mb-4">Compliance</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Built to support ISO 27001 control frameworks.</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Compliance with Zambian Data Protection Act (2021) guidelines.</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Comprehensive audit logging and role-based access control (RBAC).</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
