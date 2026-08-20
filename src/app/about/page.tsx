import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-accent inline-block"></span>
            Who We Are
            <span className="w-8 h-px bg-accent inline-block"></span>
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold font-display text-primary mb-8">
            About Zambian Cloud Programmers
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            You Dream It, We Build It — From Paper to Cloud ERP Transformation, your partner from idea to enterprise. We specialize in delivering reliable, secure, and scalable hosting solutions tailored to meet the needs of businesses and individuals in Zambia and beyond.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Whether you're launching a website, managing applications, or building custom software, our expert team ensures seamless performance and innovative designs to support your digital growth.
          </p>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
