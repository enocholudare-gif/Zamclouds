import Services from '@/components/Services';
import HostingPackages from '@/components/HostingPackages';
import CTASection from '@/components/CTASection';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <HostingPackages />
      <CTASection />
    </div>
  );
}
