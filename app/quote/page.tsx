'use client';

import React, { useState } from 'react';
import { Sun, CheckCircle2, ArrowRight, ShieldCheck, Zap, Home, Building, Factory, Phone, MessageCircle } from 'lucide-react';
import { calculateSolarSavings } from '@/data/solarCalculator';
import { formatCurrencyINR } from '@/lib/utils';
import { COMPANY_INFO } from '@/data/company';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('Independent House / Villa');
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
          notes: summaryMsg,
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
    <div className="bg-white text-[#17212B] min-h-[80vh] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#D9232E]">
            <Sun className="w-3.5 h-3.5 text-[#F4B323]" />
            <span>OFFICIAL SOLAR ESTIMATOR & ASSESSMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1722]">
            Get Your Customized Rooftop Solar Proposal
          </h1>
          <p className="text-[#647384] text-xs sm:text-sm max-w-xl mx-auto">
            Complete our quick 3-step solar assessment to get an indicative engineering sizing and book a free on-site roof measurement.
          </p>
        </div>

        {/* Progress Indicators */}
        <div className="grid grid-cols-3 gap-2">
          <div className={`p-3 rounded-lg border text-center text-xs font-semibold transition-all ${
            step >= 1 ? 'bg-[#0B1722] text-white border-[#0B1722]' : 'bg-[#F5F7FA] text-[#647384] border-[#E1E7ED]'
          }`}>
            1. Property & Bill
          </div>
          <div className={`p-3 rounded-lg border text-center text-xs font-semibold transition-all ${
            step >= 2 ? 'bg-[#0B1722] text-white border-[#0B1722]' : 'bg-[#F5F7FA] text-[#647384] border-[#E1E7ED]'
          }`}>
            2. Solar Architecture
          </div>
          <div className={`p-3 rounded-lg border text-center text-xs font-semibold transition-all ${
            step >= 3 ? 'bg-[#0B1722] text-white border-[#0B1722]' : 'bg-[#F5F7FA] text-[#647384] border-[#E1E7ED]'
          }`}>
            3. Final Proposal
          </div>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F5F7FA] border border-[#E1E7ED] text-center space-y-5 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#16835D]/10 flex items-center justify-center mx-auto text-[#16835D]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-[#0B1722]">Thank You, {name}!</h2>
              <p className="text-[#647384] text-sm">
                Your Solar Assessment for <strong className="text-[#0B1722]">{calculation.recommendedKw} kW</strong> has been recorded.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E1E7ED] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#647384]">Recommended Capacity:</span>
                <span className="font-bold text-[#0B1722] font-mono">{calculation.recommendedKw} kW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#647384]">Est. Annual Bill Savings:</span>
                <span className="font-bold text-[#D9232E] font-mono">{formatCurrencyINR(calculation.estimatedAnnualSavings)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#647384]">Central Subsidy:</span>
                <span className="font-bold text-[#16835D] font-mono">{formatCurrencyINR(calculation.estimatedSubsidy)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#647384]">Payback Period:</span>
                <span className="font-bold text-[#0B1722] font-mono">~{calculation.estimatedPaybackYears} Years</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#16835D] hover:bg-[#136C4D] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open in WhatsApp to Confirm Site Visit</span>
                </a>
              )}
              <a
                href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white border border-[#E1E7ED] text-[#0B1722] hover:bg-[#F5F7FA] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D9232E]" />
                <span>Call Store: {COMPANY_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E1E7ED] shadow-sm">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-[#0B1722]">Step 1: Your Property & Current Electricity Bill</h2>

                <div>
                  <label className="block text-xs font-semibold text-[#17212B] mb-2">Select Property Type</label>
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
                            ? 'bg-[#0B1722] text-white border-[#0B1722] shadow-sm'
                            : 'bg-[#F5F7FA] text-[#647384] border-[#E1E7ED] hover:border-[#CBD5E1]'
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
                    <span className="font-semibold text-[#17212B]">Average Monthly Electricity Bill:</span>
                    <span className="text-lg font-bold text-[#D9232E] font-mono">{formatCurrencyINR(billAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={30000}
                    step={500}
                    value={billAmount}
                    onChange={(e) => setBillAmount(Number(e.target.value))}
                    className="w-full h-2 bg-[#E1E7ED] rounded-lg appearance-none cursor-pointer accent-[#D9232E]"
                  />
                </div>

                <div className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] flex items-center justify-between text-xs">
                  <span className="text-[#647384]">Calculated Optimal Capacity:</span>
                  <span className="font-bold text-[#0B1722] font-mono text-sm">{calculation.recommendedKw} kW (~{calculation.monthlyGenerationKwh} Units/mo)</span>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-[#0B1722]">Step 2: Preferred Solar System Type</h2>

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
                          ? 'bg-[#F5F7FA] border-[#D9232E] shadow-sm'
                          : 'bg-white border-[#E1E7ED] hover:border-[#CBD5E1]'
                      }`}
                    >
                      <div>
                        <h4 className="text-sm font-bold text-[#0B1722]">{s.type}</h4>
                        <p className="text-xs text-[#647384] mt-2 leading-relaxed">{s.desc}</p>
                      </div>
                      <span className={`text-[11px] font-semibold ${systemType === s.type ? 'text-[#D9232E]' : 'text-slate-400'}`}>
                        {systemType === s.type ? '✓ Selected' : 'Click to select'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3.5 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-[#0B1722] text-xs font-semibold hover:bg-[#E1E7ED] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3.5 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
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
                <h2 className="text-lg font-bold text-[#0B1722]">Step 3: Confirm Details & Book Free Site Survey</h2>

                <div className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[#647384] block">Sizing:</span>
                    <strong className="text-[#0B1722] font-mono text-sm">{calculation.recommendedKw} kW</strong>
                  </div>
                  <div>
                    <span className="text-[#647384] block">Yearly Savings:</span>
                    <strong className="text-[#D9232E] font-mono text-sm">{formatCurrencyINR(calculation.estimatedAnnualSavings)}</strong>
                  </div>
                  <div>
                    <span className="text-[#647384] block">Subsidy:</span>
                    <strong className="text-[#16835D] font-mono text-sm">{formatCurrencyINR(calculation.estimatedSubsidy)}</strong>
                  </div>
                  <div>
                    <span className="text-[#647384] block">Payback:</span>
                    <strong className="text-[#0B1722] font-mono text-sm">~{calculation.estimatedPaybackYears} Yrs</strong>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#17212B] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. S. Ramanathan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-xs text-[#17212B] focus:outline-none focus:border-[#D9232E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#17212B] mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-xs text-[#17212B] focus:outline-none focus:border-[#D9232E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#17212B] mb-1">Location / Town</label>
                    <input
                      type="text"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      placeholder="Ramanathapuram / Rameswaram / Paramakudi"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-xs text-[#17212B] focus:outline-none focus:border-[#D9232E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#17212B] mb-1">Any Specific Requirements</label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="RCC roof, sheet roof, battery backup..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-xs text-[#17212B] focus:outline-none focus:border-[#D9232E]"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3.5 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-[#0B1722] text-xs font-semibold hover:bg-[#E1E7ED] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 py-3.5 rounded-lg bg-[#D9232E] hover:bg-[#B91F29] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm disabled:opacity-50"
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
    </div>
  );
}
