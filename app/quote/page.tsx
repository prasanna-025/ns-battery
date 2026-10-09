'use client';

import React, { useState } from 'react';
import { Sun, CheckCircle2, ArrowRight, ShieldCheck, Zap, Home, Building, Factory, Phone, MessageCircle } from 'lucide-react';
import { calculateSolarSavings } from '@/data/solarCalculator';
import { formatCurrencyINR } from '@/lib/utils';
import { COMPANY_INFO } from '@/data/company';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('Independent House');
  const [billAmount, setBillAmount] = useState(4500);
  const [systemType, setSystemType] = useState('On-Grid Net Metering');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [town, setTown] = useState('Ramanathapuram');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const calculation = calculateSolarSavings(
    billAmount,
    propertyType.includes('Commercial') ? 'commercial' : 'residential'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) {
      alert('Please provide your name and a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const summaryMsg = `Solar Quote Request: ${propertyType}, ₹${billAmount}/mo bill, Recommended ${calculation.recommendedKw}kW ${systemType}, Town: ${town}, Notes: ${notes}`;

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          serviceType: `Solar Quote (${calculation.recommendedKw} kW ${systemType})`,
          monthlyBill: billAmount,
          address: town.trim(),
          message: summaryMsg,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        if (data.whatsappRedirectUrl) {
          setWhatsappLink(data.whatsappRedirectUrl);
        }
      }
    } catch {
      alert('Error submitting enquiry. Please contact store directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>OFFICIAL SOLAR ESTIMATOR & ASSESSMENT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Get Your Customized Rooftop Solar Proposal
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Complete our quick 3-step solar assessment to get an indicative engineering sizing and book a free on-site roof measurement.
        </p>
      </div>

      {/* Progress Indicators */}
      <div className="grid grid-cols-3 gap-2">
        <div className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
          step >= 1 ? 'bg-emerald-950 border-emerald-400 text-emerald-300' : 'bg-[#04140b] border-emerald-950 text-slate-500'
        }`}>
          1. Property & Bill
        </div>
        <div className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
          step >= 2 ? 'bg-emerald-950 border-emerald-400 text-emerald-300' : 'bg-[#04140b] border-emerald-950 text-slate-500'
        }`}>
          2. Solar Architecture
        </div>
        <div className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
          step >= 3 ? 'bg-emerald-950 border-emerald-400 text-emerald-300' : 'bg-[#04140b] border-emerald-950 text-slate-500'
        }`}>
          3. Final Proposal
        </div>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-[#041e11] border border-emerald-400 text-center space-y-5 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white">Thank You, {name}!</h2>
            <p className="text-emerald-300 text-sm">
              Your Solar Assessment for <strong className="text-white">{calculation.recommendedKw} kW</strong> has been recorded.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#062413] border border-emerald-500/30 max-w-md mx-auto text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Recommended Capacity:</span>
              <span className="font-bold text-white font-mono">{calculation.recommendedKw} kW (~{calculation.panelCount} Panels)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Est. Annual Bill Savings:</span>
              <span className="font-bold text-amber-300 font-mono">{formatCurrencyINR(calculation.estimatedAnnualSavings)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Central Subsidy:</span>
              <span className="font-bold text-emerald-300 font-mono">{formatCurrencyINR(calculation.estimatedSubsidy)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Payback Period:</span>
              <span className="font-bold text-white font-mono">{calculation.estimatedPaybackYears} Years</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950" />
                <span>Open in WhatsApp to Confirm Site Visit</span>
              </a>
            )}
            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-200 font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Store: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="p-6 sm:p-10 rounded-2xl bg-[#061e11] border border-emerald-500/30 shadow-2xl">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white">Step 1: Your Property & Current Electricity Bill</h2>

              <div>
                <label className="block text-xs font-semibold text-emerald-300 mb-2">Select Property Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Independent House / Villa', icon: Home },
                    { label: 'Apartment Building', icon: Building },
                    { label: 'Commercial Shop / Office', icon: Building },
                    { label: 'Factory / Agricultural Farm', icon: Factory },
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPropertyType(p.label)}
                      className={`p-4 rounded-xl border flex flex-col items-center gap-2 text-center text-xs font-semibold transition-all ${
                        propertyType === p.label
                          ? 'bg-emerald-500 text-emerald-950 border-emerald-400 font-bold shadow-md'
                          : 'bg-[#04150b] text-slate-300 border-emerald-900/50 hover:border-emerald-700'
                      }`}
                    >
                      <p.icon className="w-5 h-5" />
                      <span>{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-emerald-300">Average Monthly Electricity Bill:</span>
                  <span className="text-lg font-extrabold text-amber-400 font-mono">{formatCurrencyINR(billAmount)}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={30000}
                  step={500}
                  value={billAmount}
                  onChange={(e) => setBillAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#04150b] border border-emerald-950 flex items-center justify-between text-xs">
                <span className="text-slate-400">Calculated Optimal Capacity:</span>
                <span className="font-bold text-emerald-300 font-mono text-sm">{calculation.recommendedKw} kW (~{calculation.monthlyGenerationKwh} Units/mo)</span>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-amber-300 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-white">Step 2: Preferred Solar System Type</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    type: 'On-Grid Net Metering',
                    desc: 'Connected to TANGEDCO grid. Maximum bill savings, lowest cost, eligible for PM Surya Ghar subsidy.',
                  },
                  {
                    type: 'Smart Hybrid with Lithium',
                    desc: 'Grid connected + high-density LiFePO4 battery backup. Zero disruption during power cuts.',
                  },
                  {
                    type: 'Off-Grid Standalone',
                    desc: '100% independent system with deep-discharge solar tubular battery bank for remote sites.',
                  },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSystemType(s.type)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                      systemType === s.type
                        ? 'bg-emerald-950 border-emerald-400 ring-2 ring-emerald-400/30'
                        : 'bg-[#04150b] border-emerald-900/50 hover:border-emerald-700'
                    }`}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white">{s.type}</h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{s.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400">
                      {systemType === s.type ? '✓ Selected' : 'Click to select'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-xl bg-emerald-950 border border-emerald-800 text-slate-300 text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-amber-300 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
                >
                  <span>Continue to Proposal Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-lg font-bold text-white">Step 3: Confirm Details & Book Free Site Survey</h2>

              <div className="p-4 rounded-xl bg-[#04150b] border border-emerald-500/30 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Sizing:</span>
                  <strong className="text-emerald-300 font-mono text-sm">{calculation.recommendedKw} kW</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Yearly Savings:</span>
                  <strong className="text-amber-300 font-mono text-sm">{formatCurrencyINR(calculation.estimatedAnnualSavings)}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Subsidy:</span>
                  <strong className="text-emerald-400 font-mono text-sm">{formatCurrencyINR(calculation.estimatedSubsidy)}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Payback:</span>
                  <strong className="text-white font-mono text-sm">~{calculation.estimatedPaybackYears} Yrs</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-emerald-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. S. Ramanathan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-emerald-300 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-emerald-300 mb-1">Location / Town</label>
                  <input
                    type="text"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    placeholder="Ramanathapuram / Rameswaram / Paramakudi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-emerald-300 mb-1">Any Specific Requirements</label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="RCC roof, sheet roof, battery backup..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3 rounded-xl bg-emerald-950 border border-emerald-800 text-slate-300 text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Generating Proposal...' : 'Submit & Book Free Roof Inspection'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
