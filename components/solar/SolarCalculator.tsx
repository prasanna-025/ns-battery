'use client';

import React, { useState, useMemo } from 'react';
import { Sun, IndianRupee, ShieldCheck, TreePine, Zap, ArrowRight, CheckCircle2, Building, Home } from 'lucide-react';
import { calculateSolarSavings } from '@/data/solarCalculator';
import { formatCurrencyINR } from '@/lib/utils';
import Link from 'next/link';

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<number>(4500);
  const [connectionType, setConnectionType] = useState<'residential' | 'commercial'>('residential');

  const result = useMemo(() => {
    return calculateSolarSavings(monthlyBill, connectionType);
  }, [monthlyBill, connectionType]);

  return (
    <div id="calculator" className="w-full rounded-2xl bg-white border border-[#E1E7ED] p-6 sm:p-8 md:p-10 shadow-sm relative">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#D9232E]">
          <Sun className="w-3.5 h-3.5 text-[#F4B323]" />
          <span>SOLAR CALCULATOR & PM SURYA GHAR SUBSIDY ESTIMATOR</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
          Calculate Your Rooftop Solar Savings & Subsidies
        </h2>
        <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
          See how quickly rooftop solar pays for itself in Tamil Nadu with net metering and the central PM Surya Ghar Muft Bijli Yojana.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-5 space-y-6 bg-[#F5F7FA] p-5 sm:p-6 rounded-xl border border-[#E1E7ED]">
          {/* Connection Type Switcher */}
          <div>
            <label className="block text-xs font-bold text-[#0B1722] uppercase tracking-wider mb-2">
              Property / Connection Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConnectionType('residential')}
                className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  connectionType === 'residential'
                    ? 'bg-[#D9232E] text-white shadow-sm'
                    : 'bg-white text-[#647384] hover:text-[#0B1722] border border-[#E1E7ED]'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Residential Home</span>
              </button>
              <button
                type="button"
                onClick={() => setConnectionType('commercial')}
                className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  connectionType === 'commercial'
                    ? 'bg-[#D9232E] text-white shadow-sm'
                    : 'bg-white text-[#647384] hover:text-[#0B1722] border border-[#E1E7ED]'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Commercial Facility</span>
              </button>
            </div>
          </div>

          {/* Monthly Bill Input */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#0B1722] uppercase tracking-wider">
                Current Monthly Power Bill
              </label>
              <span className="text-base font-bold text-[#D9232E] font-mono">
                {formatCurrencyINR(monthlyBill)}
              </span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full h-2 bg-[#E1E7ED] rounded-lg appearance-none cursor-pointer accent-[#D9232E]"
            />

            <div className="flex justify-between text-[11px] text-[#647384] font-mono">
              <span>₹1,000</span>
              <span>₹25,000</span>
              <span>₹50,000+</span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-[#647384]">Quick Presets:</span>
            <div className="flex flex-wrap gap-2">
              {[2500, 4500, 8000, 15000, 25000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setMonthlyBill(preset)}
                  className={`text-xs px-2.5 py-1 rounded border font-mono transition-colors ${
                    monthlyBill === preset
                      ? 'bg-[#0B1722] text-white border-[#0B1722]'
                      : 'bg-white text-[#647384] border-[#E1E7ED] hover:border-[#CBD5E1]'
                  }`}
                >
                  ₹{preset.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-[#E1E7ED] text-xs text-[#647384] space-y-1">
            <p className="font-semibold text-[#0B1722]">TANGEDCO Sizing Formula:</p>
            <p>Calculated assuming ~4.5 to 5 peak sun hours in coastal Ramanathapuram district with bi-directional net metering.</p>
          </div>
        </div>

        {/* Right Column: Calculated Results */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Output Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Recommended Capacity */}
            <div className="p-5 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase text-[#647384] block">Recommended System</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1722] font-mono mt-1">
                {result.recommendedKw} <span className="text-base text-[#D9232E]">kW</span>
              </div>
              <span className="text-[11px] text-[#647384] mt-1 block">Rooftop Area: ~{result.roofAreaSqFt} sq.ft</span>
            </div>

            {/* Central Subsidy */}
            <div className="p-5 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase text-[#16835D] block">PM Surya Ghar Subsidy</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#16835D] font-mono mt-1">
                {formatCurrencyINR(result.estimatedSubsidy)}
              </div>
              <span className="text-[11px] text-[#647384] mt-1 block">Direct DBT bank transfer</span>
            </div>

            {/* Estimated Annual Savings */}
            <div className="p-5 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase text-[#647384] block">Annual Bill Savings</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1722] font-mono mt-1">
                {formatCurrencyINR(result.estimatedAnnualSavings)}
              </div>
              <span className="text-[11px] text-[#647384] mt-1 block">Estimated Payback: ~{result.estimatedPaybackYears} Years</span>
            </div>
          </div>

          {/* Detailed Financial Overview Box */}
          <div className="p-6 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1722]">
              Estimated Investment Breakdown
            </h4>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-[#E1E7ED]">
                <span className="text-[#647384]">Estimated Turnkey System Cost:</span>
                <span className="font-bold text-[#0B1722] font-mono">{formatCurrencyINR(result.estimatedSystemCost)}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#E1E7ED] text-[#16835D]">
                <span>Less: PM Surya Ghar Central Subsidy (DBT):</span>
                <span className="font-bold font-mono">- {formatCurrencyINR(result.estimatedSubsidy)}</span>
              </div>

              <div className="flex justify-between pt-2 text-sm sm:text-base font-extrabold text-[#0B1722]">
                <span>Estimated Net Investment:</span>
                <span className="text-[#D9232E] font-mono">{formatCurrencyINR(result.netInvestmentCost)}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#647384] leading-relaxed pt-1">
              * Note: Calculations are estimates based on standard residential rooftop guidelines in Tamil Nadu. Actual pricing depends on structural requirements, wiring runs, and shadow profiles.
            </p>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href="/quote"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm text-center flex items-center justify-center gap-2"
            >
              <span>Get Free Site Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/solar#pm-surya-ghar"
              className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-[#E1E7ED] text-[#0B1722] text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Learn About Subsidy Rules
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
