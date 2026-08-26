import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

const caseStudies = [
  {
    slug: 'project-management-system',
    industry: 'Enterprise',
    tag: 'Workflow Automation',
    title: 'Project Management System',
    description: 'Replaced fragmented processes with software built around the way businesses actually operate, improving delivery times by 40%.',
  },
  {
    slug: 'ecommerce-platform',
    industry: 'Retail',
    tag: 'Digital Commerce',
    title: 'E-commerce Platform',
    description: 'End-to-end e-commerce platform handling complex product catalogues and local payment integration for a leading retailer.',
  },
  {
    slug: 'cloud-inventory',
    industry: 'Logistics',
    tag: 'Supply Chain',
    title: 'Cloud-Based Inventory Management',
    description: 'Provided supply-chain visibility and tracking capabilities across multiple warehouses with real-time syncing.',
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-dark text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-accent inline-block"></span>
            Our Work
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold font-display max-w-3xl mb-8">
            Systems that deliver measurable impact.
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Explore our featured case studies detailing how we've helped African enterprises digitize operations, automate workflows, and scale their platforms.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col hover-target" data-cursor="view">
                <div className="w-full h-64 bg-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark/80 backdrop-blur-sm z-10">
                    <span className="text-white font-bold tracking-widest uppercase text-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-dark transition-colors">Read Case Study</span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-primary mb-4 group-hover:text-accent transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {cs.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-primary font-bold text-sm uppercase tracking-widest group-hover:text-accent transition-colors">
                    Explore Details <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
