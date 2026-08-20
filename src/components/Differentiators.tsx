import { Layers, MapPin, Zap, Shield, Wrench } from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'Built Around Your Business',
    body: 'Bespoke systems designed around actual operational workflows, not forcing your business into generic off-the-shelf software.',
  },
  {
    icon: MapPin,
    title: 'Local Business Understanding',
    body: 'Technology solutions designed with real knowledge of Zambian business environments, regulatory realities, and industry conditions.',
  },
  {
    icon: Zap,
    title: 'AI Where It Creates Value',
    body: 'Practical AI focused on automation, decision support, analytics and operational efficiency — not technology for its own sake.',
  },
  {
    icon: Shield,
    title: 'Cloud-Ready Architecture',
    body: 'Secure, scalable infrastructure engineered for modern business operations with a focus on reliability and long-term maintainability.',
  },
  {
    icon: Wrench,
    title: 'Engineering-Led Delivery',
    body: 'Emphasis on software engineering quality — clean code, comprehensive testing, security-first thinking and long-term support.',
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-2xl mb-16">
          <p className="text-accent text-sm uppercase tracking-widest font-semibold mb-4">Why ZCP</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight">
            What makes us a different kind of technology partner.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{d.title}</h3>
                <p className="text-gray-400 leading-relaxed">{d.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
