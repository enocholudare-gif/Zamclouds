import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Differentiators from '@/components/Differentiators';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import AISection from '@/components/AISection';
import CaseStudies from '@/components/CaseStudies';
import TechCredibility from '@/components/TechCredibility';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Differentiators />
      <Services />
      <Industries />
      <AISection />
      <CaseStudies />
      <TechCredibility />
      <CTASection />
    </>
  );
}
