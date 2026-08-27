import CTASection from '@/components/CTASection';

export default function CSRPage() {
  return (
    <div className="pt-24 bg-dark text-white min-h-screen selection:bg-accent selection:text-white">
      <section className="relative pt-20 pb-24 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-accent text-sm uppercase tracking-widest font-bold mb-6 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-accent inline-block"></span>
            Making an Impact
            <span className="w-8 h-px bg-accent inline-block"></span>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Zambian Cloud Programmers, our commitment to technology is matched by our commitment to our community. We believe in using our skills, resources, and influence to create positive change across Zambia and beyond.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900/50 p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">Empowering the Next Generation</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We are dedicated to fostering digital literacy among youths. Through various mentorship programs, free coding workshops, and partnerships with local schools, we equip young Zambians with the skills they need to thrive in a digital-first world.
              </p>
            </div>
            <div className="bg-gray-900/50 p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">Supporting Local Tech Ecosystems</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Innovation thrives in community. We actively sponsor, host, and participate in technology summits, hackathons, and developer meetups to build a robust support network for tech entrepreneurs and startups in Africa.
              </p>
            </div>
            <div className="bg-gray-900/50 p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">Sustainable Tech Solutions</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We advocate for and implement green technology solutions. From optimizing cloud infrastructure to reduce energy consumption to supporting non-profits with subsidized IT services, our goal is to ensure technology serves the planet as much as it serves people.
              </p>
            </div>
            <div className="bg-gray-900/50 p-10 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">Diversity & Inclusion</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We are committed to building an inclusive workplace that reflects the diverse communities we serve. We champion initiatives that encourage more women and underrepresented groups to pursue careers in STEM fields.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
