import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    slug: 'mining',
    emoji: '⛏',
    title: 'Mining & Resources',
    description: 'Operational management systems, production data platforms, safety compliance tools, workforce management and real-time site analytics for extractive industries.',
    tags: ['ERP', 'Data Analytics', 'Safety Systems', 'Compliance'],
  },
  {
    slug: 'agriculture',
    emoji: '🌾',
    title: 'Agriculture',
    description: 'Digital platforms for supply-chain traceability, crop management, market pricing tools, cooperative management systems and agricultural data intelligence.',
    tags: ['Supply Chain', 'Market Data', 'Field Systems', 'Cooperatives'],
  },
  {
    slug: 'finance',
    emoji: '🏦',
    title: 'Finance & Banking',
    description: 'Secure financial software, digital customer experiences, loan management, data platforms, compliance tooling and process automation for financial institutions.',
    tags: ['Core Banking', 'Automation', 'Compliance', 'Customer Portals'],
  },
  {
    slug: 'government',
    emoji: '🏛',
    title: 'Government & Public Sector',
    description: 'Public-facing digital services, internal workflow platforms, data management and reporting systems built for government and regulatory environments.',
    tags: ['Digital Services', 'Workflow', 'Reporting', 'Data Management'],
  },
  {
    slug: 'retail',
    emoji: '📦',
    title: 'Retail & Logistics',
    description: 'Inventory management, point-of-sale systems, e-commerce platforms, fleet and delivery management and supply-chain visibility tools.',
    tags: ['POS', 'E-Commerce', 'Inventory', 'Fleet'],
  },
  {
    slug: 'enterprise',
    emoji: '🏢',
    title: 'Enterprise & Professional Services',
    description: 'Custom enterprise software, business intelligence platforms, HR systems and integrated applications for growing Zambian and regional organisations.',
    tags: ['Enterprise Software', 'BI', 'HR Systems', 'Integration'],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm uppercase tracking-widest font-semibold mb-4">Industries We Serve</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary leading-tight mb-4">
            Technology built around your sector.
          </h2>
          <p className="text-gray-500 text-lg">
            We bring software engineering to the industries that form the backbone of Zambia's economy — with an understanding of their specific operational realities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div key={industry.slug} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-accent/40 hover:shadow-md transition-all duration-300 group">
              <div className="text-4xl mb-5">{industry.emoji}</div>
              <h3 className="text-xl font-bold font-display text-primary mb-3">{industry.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{industry.description}</p>
              <div className="flex flex-wrap gap-2">
                {industry.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/industries" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
            Explore industry solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
