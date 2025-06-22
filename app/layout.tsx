import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KD Singh - Product Manager | Technology, People & Business',
  description: 'Product manager transforming complex tech challenges into innovative products that drive growth. Explore my work at the intersection of technology, people, and business.',
  keywords: ['Product Manager', 'Technology', 'Innovation', 'Business Strategy', 'User Experience'],
  authors: [{ name: 'KD Singh' }],
  creator: 'KD Singh',
  openGraph: {
    title: 'KD Singh - Product Manager',
    description: 'Product manager transforming complex tech challenges into innovative products that drive growth.',
    url: 'https://kdsingh.ca',
    siteName: 'KD Singh Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KD Singh - Product Manager',
    description: 'Product manager transforming complex tech challenges into innovative products that drive growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}