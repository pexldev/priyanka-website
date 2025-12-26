import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VerticalConsultButton from '@/components/VerticalConsultButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Priyanka Prosthodontics - Luxury Smile Design & Prosthodontics',
  description: '100,000+ smiles designed. Luxury dental services that are truly accessible. Expert prosthodontics including implants, veneers, dentures, and full mouth rehabilitation.',
  keywords: ['dental implants', 'veneers', 'dentures', 'smile design', 'prosthodontics', 'full mouth rehabilitation', 'luxury dental', 'cosmetic dentistry'],
  authors: [{ name: 'Priyanka Prosthodontics' }],
  openGraph: {
    title: 'Priyanka Prosthodontics - Luxury Smile Design & Prosthodontics',
    description: '100,000+ smiles designed. Luxury dental services that are truly accessible.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <VerticalConsultButton />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
