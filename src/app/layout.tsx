import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Zambian Cloud Programmers | Custom Software, Cloud & AI Solutions',
  description:
    'Bespoke enterprise software, cloud infrastructure, AI automation, data and integration solutions engineered in Zambia for organisations ready to scale.',
  metadataBase: new URL('https://zamclouds.com'),
  openGraph: {
    title: 'Zambian Cloud Programmers | Custom Software, Cloud & AI Solutions',
    description:
      'Bespoke enterprise software, cloud infrastructure, AI automation, data and integration solutions engineered in Zambia for organisations ready to scale.',
    url: 'https://zamclouds.com',
    siteName: 'Zambian Cloud Programmers',
    type: 'website',
    locale: 'en_ZM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zambian Cloud Programmers | Custom Software, Cloud & AI Solutions',
    description: 'Bespoke enterprise software, cloud infrastructure, AI automation, data and integration solutions engineered in Zambia for organisations ready to scale.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://zamclouds.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans text-gray-200 bg-[#050505]">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
