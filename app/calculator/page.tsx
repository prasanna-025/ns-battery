import React from 'react';
import type { Metadata } from 'next';
import SolarCalculator from '@/components/solar/SolarCalculator';

export const metadata: Metadata = {
  title: 'Solar Savings Calculator | NS Batteries Ramanathapuram',
  description: 'Calculate your rooftop solar savings, recommended system size, and PM Surya Ghar subsidy eligibility. Free estimate for Tamil Nadu homes.',
};

export default function CalculatorPage() {
  return (
    <div className="bg-white">
      {/* Page Banner */}
      <div className="bg-[#0B1722] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/70 uppercase tracking-wider mb-4">
            <span>Free Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Solar Savings Calculator
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl">
            Enter your monthly electricity bill and roof area to get an instant estimate of your system size, monthly savings, PM Surya Ghar subsidy, and payback period.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <SolarCalculator />
      </div>
    </div>
  );
}
