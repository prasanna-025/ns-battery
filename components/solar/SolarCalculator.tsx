'use client';

import React, { useState, useMemo } from 'react';
import { Sun, IndianRupee, ShieldCheck, TreePine, Zap, ArrowRight, CheckCircle2, Building, Home, Sparkles } from 'lucide-react';
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
    <div id="calculator" className="w-full rounded-xl bg-[#0a1622] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cd2028]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#07111a] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-white text-xs font-bold uppercase tracking-wider">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>SOLAR CALCULATOR & PM SURYA GHAR SUBSIDY ESTIMATOR</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight font-display">
          Calculate Your Rooftop Solar Savings & Subsidies
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          See how quickly rooftop solar pays for itself in Tamil Nadu with net metering and the central PM Surya Ghar Muft Bijli Yojana.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-5 space-y-6 bg-[#08121c] p-5 sm:p-6 rounded-xl border border-white/10 backdrop-blur-md">
          {/* Connection Type Switcher */}
          <div>
            <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
              Property / Connection Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConnectionType('residential')}
                className={`py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  connectionType === 'residential'
                    ? 'bg-[#cd2028] text-white shadow-md'
                    : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Residential Home</span>
              </button>
              <button
                type="button"
                onClick={() => setConnectionType('commercial')}
                className={`py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  connectionType === 'commercial'
                    ? 'bg-[#cd2028] text-white shadow-md'
                    : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Commercial / Shop</span>
              </button>
            </div>
            {connectionType === 'residential' && (
              <p className="text-[11px] text-amber-300 mt-2 flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3 h-3 text-amber-400" />
                PM Surya Ghar Subsidy applied automatically (Up to ₹78,000)
              </p>
            )}
          </div>

          {/* Monthly Electricity Bill Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Average Monthly Power Bill
              </label>
              <span className="text-lg font-extrabold text-amber-400 font-mono">
                {formatCurrencyINR(monthlyBill)}
              </span>
            </div>

            <input
              type="range"
              min={1000}
              max={30000}
              step={500}
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />

            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>₹1,000/mo</span>
              <span>₹15,000/mo</span>
              <span>₹30,000+/mo</span>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="space-y-1.5">
            <p className="text-[11px] text-slate-400 font-medium">Quick Select Bill:</p>
            <div className="flex flex-wrap gap-2">
              {[2000, 3500, 5000, 8000, 15000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setMonthlyBill(preset)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                    monthlyBill === preset
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-emerald-950/80 text-emerald-300 hover:bg-emerald-900 border border-emerald-800/40'
                  }`}
                >
                  ₹{preset.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* Consultation Note */}
          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 space-y-1">
            <p className="font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Tailored Ramanathapuram Engineering
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Our certified technicians visit your premises to assess shadow-free roof angles, structural strength, and grid connectivity.
            </p>
          </div>
        </div>

        {/* Right Column: Calculated Results Display */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Key Highlights Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* System Size */}
            <div className="p-4 rounded-xl bg-[#051a0e] border border-emerald-500/30 space-y-1">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                Recommended Size
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                {result.recommendedKw} <span className="text-base text-emerald-400 font-normal">kW</span>
              </p>
              <p className="text-[11px] text-slate-400">
                ~{result.panelCount} Mono PERC Panels
              </p>
            </div>

            {/* Annual Savings */}
            <div className="p-4 rounded-xl bg-[#051a0e] border border-amber-500/30 space-y-1">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                Yearly Savings
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">
                {formatCurrencyINR(result.estimatedAnnualSavings)}
              </p>
              <p className="text-[11px] text-slate-400">
                ~{result.monthlyGenerationKwh} Units / month
              </p>
            </div>

            {/* Payback Period */}
            <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-[#051a0e] border border-emerald-500/30 space-y-1">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                Est. Payback Time
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-300">
                {result.estimatedPaybackYears} <span className="text-base text-slate-300 font-normal">Years</span>
              </p>
              <p className="text-[11px] text-slate-400">
                25-Yr Free Energy Post ROI
              </p>
            </div>
          </div>

          {/* Financial Breakdown Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#08121c] border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between">
              <span>Estimated Cost & Subsidy Breakdown</span>
              <span className="text-xs text-slate-400 font-normal">(Indicative Estimates)</span>
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/5">
                <span>Indicative Turnkey System Cost ({result.recommendedKw} kW)</span>
                <span className="font-semibold text-white font-mono">{formatCurrencyINR(result.estimatedSystemCost)}</span>
              </div>

              {connectionType === 'residential' && (
                <div className="flex justify-between items-center text-amber-400 font-medium pb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Central Govt Subsidy (PM Surya Ghar)
                  </span>
                  <span className="font-bold font-mono">- {formatCurrencyINR(result.estimatedSubsidy)}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-white font-bold pt-1 text-sm sm:text-base">
                <span className="text-slate-300">Estimated Net Investment</span>
                <span className="text-[#cd2028] text-lg sm:text-xl font-mono">
                  {formatCurrencyINR(result.netInvestmentCost)}
                </span>
              </div>
            </div>

            {/* Practical Technical Specs */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Roof Required: <strong className="text-white">~{result.roofAreaSqFt} sq. ft</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Offset: <strong className="text-white">{result.co2ReductionTonsPerYear} Tons CO₂/yr</strong></span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={`/quote?kw=${result.recommendedKw}&bill=${monthlyBill}&type=${connectionType}`}
              className="vikram-btn flex-1 py-3.5 px-6 rounded text-xs font-bold uppercase tracking-wider text-center text-white flex items-center justify-center gap-2"
            >
              <span>Book Free Site Assessment for {result.recommendedKw} kW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/918870120911?text=${encodeURIComponent(
                `Hello NS Batteries, I calculated my rooftop solar on your website. My bill is ₹${monthlyBill}/month and recommended size is ${result.recommendedKw} kW. Please provide an official quotation.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#0c1a27] border border-white/10 hover:bg-[#25D366] hover:text-white transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>Instant WhatsApp Quote</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 text-center italic">
            *Estimates based on southern Tamil Nadu solar irradiance and current TANGEDCO residential slabs. Exact capacity confirmed upon physical roof survey.
          </p>
        </div>
      </div>
    </div>
  );
}
