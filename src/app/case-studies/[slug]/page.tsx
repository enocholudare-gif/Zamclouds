import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  // Mock data for layout purposes
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <div className="pt-20">
      
      {/* Hero */}
      <section className="py-24 bg-dark text-white relative border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <Link href="/case-studies" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>
          <div className="flex justify-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-dark bg-white px-4 py-2 rounded-full">
              Enterprise
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-8">
            {title}
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            A comprehensive look at how we architected and deployed a highly scalable solution to solve complex operational challenges.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="grid md:grid-cols-3 gap-12 mb-20 pb-20 border-b border-gray-200">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">The Client</h4>
              <p className="font-bold text-primary text-lg">Confidential Enterprise</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Industry</h4>
              <p className="font-bold text-primary text-lg">Financial Services</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Tech Stack</h4>
              <p className="font-bold text-primary text-lg">Next.js, Node, AWS</p>
            </div>
          </div>

          <div className="max-w-none">
            <h2 className="text-3xl font-bold font-display text-primary mb-6">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              The client was struggling with fragmented legacy systems that required significant manual intervention to sync data across departments. They needed a unified, secure platform capable of handling high transaction volumes without latency, while strictly adhering to local data protection regulations.
            </p>

            <h2 className="text-3xl font-bold font-display text-primary mb-6">Our Approach</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We engineered a bespoke microservices architecture using Node.js and deployed it on AWS with strict security protocols. 
            </p>
            <ul className="space-y-4 mb-12 list-none p-0">
              <li className="flex gap-3 text-gray-600">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span><strong>Discovery & Audit:</strong> Mapped out the entire operational workflow to identify bottlenecks.</span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span><strong>Architecture:</strong> Designed a resilient, cloud-native system with geographic redundancy.</span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span><strong>Deployment:</strong> Executed a phased rollout with zero operational downtime for the client.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold font-display text-primary mb-6">The Impact</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                <div className="text-gray-600 font-medium">Reduction in manual data entry time.</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Uptime guaranteed across all services.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
