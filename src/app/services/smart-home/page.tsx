import HeroInner from '@/components/HeroInner';
import CTASection from '@/components/CTASection';

export default function Page() {
  return (
    <>
      <HeroInner 
        title="Smart Home Solutions" 
        subtitle="Intelligent home automation for security, energy management, and comfort."
        category="Solution Platform"
      />
      
      <section className="py-24 bg-white text-dark">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="max-w-none text-gray-600">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Overview</h2>
            <p className="mb-6 text-lg">
              We provide state-of-the-art Smart Home Solutions services that go beyond off-the-shelf capabilities. Our approach ensures that your systems are designed precisely around your operational reality, eliminating bottlenecks and enabling limitless scale.
            </p>
            <p className="mb-12 text-lg">
              By prioritizing secure, resilient architectures, we ensure that as your requirements grow, your infrastructure scales effortlessly without compromising performance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">Key Capabilities</h3>
                <ul className="space-y-4 m-0 p-0 list-none font-medium">
                  <li className="border-b border-gray-200 pb-2">Highly scalable architecture</li>
                  <li className="border-b border-gray-200 pb-2">Industry-standard security</li>
                  <li className="border-b border-gray-200 pb-2">Seamless integration</li>
                  <li>Custom workflow automation</li>
                </ul>
              </div>
              <div className="bg-dark text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-white">Business Value</h3>
                <ul className="space-y-4 m-0 p-0 list-none text-gray-400 font-medium">
                  <li className="border-b border-white/10 pb-2">Reduced operational costs</li>
                  <li className="border-b border-white/10 pb-2">Enhanced security & safety</li>
                  <li className="border-b border-white/10 pb-2">Improved efficiency</li>
                  <li>Future-proof technology</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
