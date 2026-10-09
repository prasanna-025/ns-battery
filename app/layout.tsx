import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import FloatingActions from '@/components/navigation/FloatingActions';

export const metadata: Metadata = {
  title: 'NS Batteries | Energy for People — Solar Solutions, Batteries & Inverters Ramanathapuram',
  description:
    'Ramanathapuram’s premier family-backed energy partner. High-yield rooftop solar systems (PM Surya Ghar), Amaron automotive batteries, Luminous inverter batteries, pure sine wave inverters, lithium energy storage, and Gulf Oil lubricants.',
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#05120a] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
