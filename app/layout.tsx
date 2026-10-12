import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import FloatingActions from '@/components/navigation/FloatingActions';

const displayFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NS Batteries | Energy for People — Solar, Batteries & Power Systems Ramanathapuram',
  description:
    'Ramanathapuram’s premier clean energy partner. High-efficiency rooftop solar systems (PM Surya Ghar), Amaron automotive batteries, Luminous inverter batteries, pure sine wave inverters, lithium energy storage, and Gulf Oil lubricants.',
  keywords: [
    'NS Batteries',
    'Energy for People',
    'Rooftop Solar Ramanathapuram',
    'Solar Panels Ramanathapuram',
    'Amaron Car Battery Ramanathapuram',
    'Luminous Inverter Battery',
    'UTL Solar Inverter Tamil Nadu',
    'Lithium Battery LiFePO4 Ramanathapuram',
    'Gulf Oil Ramanathapuram',
    'SKF Bearings',
    'PM Surya Ghar Solar Subsidy TN',
  ],
  authors: [{ name: 'NS Batteries' }],
  openGraph: {
    title: 'NS Batteries — Energy for People',
    description:
      'Powering homes, businesses, and the next generation across Tamil Nadu with advanced solar systems and trusted battery solutions.',
    siteName: 'NS Batteries',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#17212B] font-sans antialiased selection:bg-[#16A34A] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
