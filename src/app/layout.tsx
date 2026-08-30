import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.highdownautomotive.com'),
  title: 'Highdown Automotive — Exceptional Collector Cars',
  description:
    'Highdown Automotive is a specialized collector car dealership. Curated sourcing, documented provenance, and discreet sales of investment-grade automobiles.',
  openGraph: {
    title: 'Highdown Automotive — Exceptional Collector Cars',
    description:
      'A specialized collector car dealership. Curated sourcing, documented provenance, and discreet sales of investment-grade automobiles.',
    type: 'website',
    url: '/',
    siteName: 'Highdown Automotive',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Highdown Automotive — collector car in dramatic light',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Highdown Automotive — Exceptional Collector Cars',
    description:
      'A specialized collector car dealership. Curated sourcing, documented provenance, and discreet sales of investment-grade automobiles.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
