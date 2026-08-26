import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import HowWeWork from '@/components/HowWeWork';
import AISection from '@/components/AISection';
import Differentiators from '@/components/Differentiators';
import InsightsSection from '@/components/InsightsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Products />
      <Industries />
      <CaseStudies />
      <HowWeWork />
      <AISection />
      <Differentiators />
      {/* Testimonials placeholder */}
      <InsightsSection />
      <ContactSection />
    </>
  );
}
