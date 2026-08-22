'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const insights = [
  {
    id: 1,
    category: 'Cloud Engineering',
    title: 'Migrating Legacy Systems to Cloud-Native Architecture',
    date: 'Oct 24, 2025',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: 2,
    category: 'Artificial Intelligence',
    title: 'Practical AI for Supply Chain Optimization',
    date: 'Oct 18, 2025',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: 3,
    category: 'Software Architecture',
    title: 'Building Resilient Microservices in 2026',
    date: 'Oct 12, 2025',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  }
];

export default function InsightsSection() {
  const featured = insights.find(i => i.featured)!;
  const standard = insights.filter(i => !i.featured);

  return (
    <section id="insights" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block"></span>
              Insights
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight">
              Thinking out loud.
            </h2>
          </div>
          <Link href="/insights" className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-wide hover:text-accent transition-colors hover-target" data-cursor="interactive">
            Read all articles <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Link href={`/insights/${featured.id}`} className="group block relative h-[500px] lg:h-auto rounded-3xl overflow-hidden hover-target" data-cursor="view">
            <div className="absolute inset-0 bg-primary z-0">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-dark bg-white px-4 py-2 rounded-full w-max">
                {featured.category}
              </span>
              <div>
                <p className="text-white/70 text-sm font-medium mb-3">{featured.date}</p>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-white group-hover:text-accent transition-colors">
                  {featured.title}
                </h3>
              </div>
            </div>
          </Link>

          {/* Standard Articles */}
          <div className="flex flex-col gap-8">
            {standard.map((article) => (
              <Link href={`/insights/${article.id}`} key={article.id} className="group flex flex-col md:flex-row gap-6 bg-white p-6 rounded-3xl border border-gray-200 hover:border-accent/30 hover:shadow-lg transition-all duration-300 hover-target" data-cursor="interactive">
                <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden shrink-0">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                    {article.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-primary mb-4 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mt-auto">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
