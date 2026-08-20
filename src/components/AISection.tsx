import { Bot, BarChart3, FileText, MessageSquare, TrendingUp, Cog, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const aiApplications = [
  { icon: Cog, title: 'Business Process Automation', desc: 'Automating repetitive, rule-based processes to reduce errors and free up operational capacity.' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'Data models that identify trends, forecast demand and support better commercial decisions.' },
  { icon: TrendingUp, title: 'Intelligent Reporting', desc: 'Dashboards and reporting systems that surface the right information at the right time.' },
  { icon: FileText, title: 'Document Processing', desc: 'Automated extraction, classification and routing of documents — invoices, forms, contracts.' },
  { icon: MessageSquare, title: 'Customer Service Automation', desc: 'Intelligent query handling, ticket routing and automated response systems.' },
  { icon: Bot, title: 'Decision-Support Systems', desc: 'Operational tools that present data-driven recommendations to improve human decisions.' },
];

export default function AISection() {
  return (
    <section id="ai" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,115,51,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-sm uppercase tracking-widest font-semibold mb-4">AI & Intelligent Systems</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight mb-6">
              AI as a practical tool for business improvement.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We build AI systems focused on measurable operational outcomes — not demonstration projects. Every AI capability we implement is tied to a specific business problem and a clear improvement in efficiency, accuracy or decision quality.
            </p>
            <Link href="/solutions" className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition-colors">
              Explore AI solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiApplications.map((app) => {
              const Icon = app.icon;
              return (
                <div key={app.title} className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-accent mb-3" />
                  <h4 className="font-bold text-sm mb-1">{app.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{app.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
