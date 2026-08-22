import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Differentiators from '@/components/Differentiators';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import AboutSection from '@/components/AboutSection';
import Industries from '@/components/Industries';
import InsightsSection from '@/components/InsightsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Differentiators />
      <Services />
      <CaseStudies />
      <AboutSection />
      <Industries />
      <InsightsSection />
      <CTASection />
    </>
  );
}
