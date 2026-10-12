'use client';

import React, { useState } from 'react';
import { Stethoscope, AlertTriangle, CheckCircle2, Phone, MessageCircle, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface Symptom {
  id: string;
  label: string;
  category: 'automobile' | 'inverter';
  diagnosis: string;
  urgency: 'critical' | 'moderate' | 'maintenance';
  healthScore: number;
  explanation: string;
  solution: string;
}

export default function BatteryDiagnosticDoctor() {
  const symptoms: Symptom[] = [
    {
      id: 'clicking',
      label: 'Rapid clicking sound when pressing self-start / turning ignition key',
      category: 'automobile',
      diagnosis: 'Severe Under-Voltage / Dead Cell',
      urgency: 'critical',
      healthScore: 15,
      explanation:
        'The starter relay clicks because the battery open-circuit voltage has collapsed below 10.5V. The starter motor cannot draw sufficient Cold Cranking Amps (CCA) to turn the flywheel.',
      solution:
        'Requires immediate battery jumpstart or replacement. Free testing with printed load slip available at our Ramanathapuram counter.',
    },
    {
      id: 'dim_lights',
      label: 'Headlights are very dim at idle, but brighten when engine revs up',
      category: 'automobile',
      diagnosis: 'Aging Battery / Alternator Under-Charging',
      urgency: 'moderate',
      healthScore: 40,
      explanation:
        'The battery has lost its reserve capacity to buffer electrical load, forcing headlights to run solely off the alternator output.',
      solution:
        'Visit our Ramanathapuram store for a free 2-minute conductance test to confirm whether the battery or alternator diode needs service.',
    },
    {
      id: 'low_backup',
      label: 'Home inverter cuts off within 20 to 30 minutes during power outage',
      category: 'inverter',
      diagnosis: 'Deep Plate Sulfation / Active Material Shedding',
      urgency: 'critical',
      healthScore: 25,
      explanation:
        'Over prolonged usage and under-charging, lead sulfate crystals have permanently hardened on positive spines, reducing effective ampere-hour capacity.',
      solution:
        'Bring the battery for a desulfation charge test. If capacity cannot be recovered, trade it in for best scrap exchange value against a new Luminous or LiFePO4 battery.',
    },
    {
      id: 'white_crust',
      label: 'White or bluish powdery crust accumulated on battery terminals',
      category: 'automobile',
      diagnosis: 'Terminal Oxidation & Acid Vapor Leaks',
      urgency: 'maintenance',
      healthScore: 60,
      explanation:
        'Copper sulfate or lead sulfate crystals are forming from minor acid vapor venting. This increases electrical contact resistance and prevents proper charging.',
      solution:
        'Clean terminals with hot baking soda water, wire brush, and coat with SKF petroleum jelly. Our store provides this servicing complimentary.',
    },
    {
      id: 'acid_odor',
      label: 'Rotten egg smell or excessive battery casing bulging / heat',
      category: 'inverter',
      diagnosis: 'Thermal Runaway / Inverter Over-Charging',
      urgency: 'critical',
      healthScore: 10,
      explanation:
        'The inverter charger cut-off voltage has failed, continuously boiling the electrolyte and releasing dangerous hydrogen sulfide gas.',
      solution:
        'Disconnect inverter immediately from AC mains. Do not smoke or ignite sparks nearby. Call our emergency helpline for urgent inspection.',
    },
  ];

  const [selectedId, setSelectedId] = useState<string>('clicking');

  const current = symptoms.find((s) => s.id === selectedId) || symptoms[0];

  return (
    <div className="w-full bg-white border border-[#E1E7ED] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Title */}
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E1E7ED] text-xs font-semibold text-[#16a34a] uppercase tracking-wider">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Battery Diagnostic Guide</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1722] tracking-tight">
          Experiencing Battery Trouble? Diagnose It in Seconds
        </h2>
        <p className="text-xs sm:text-sm text-[#647384]">
          Select what your vehicle or inverter is doing. Our diagnostic tool pinpoints the likely cause and recommended action.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Symptom Picker List */}
        <div className="lg:col-span-6 space-y-2.5">
          <label className="block text-xs font-bold text-[#0B1722] uppercase tracking-wider mb-1">
            Choose What You Are Experiencing:
          </label>

          <div className="space-y-2">
            {symptoms.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all text-xs font-medium flex items-center justify-between ${
                  selectedId === item.id
                    ? 'bg-white border-[#16a34a] text-[#0B1722] font-semibold shadow-sm'
                    : 'bg-[#F5F7FA] border-[#E1E7ED] text-[#647384] hover:border-[#16a34a]/40 hover:text-[#0B1722]'
                }`}
              >
                <div className="flex items-center gap-2.5 pr-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${
                    item.urgency === 'critical' ? 'bg-[#16a34a]' : item.urgency === 'moderate' ? 'bg-[#F4B323]' : 'bg-[#16835D]'
                  }`} />
                  <span>{item.label}</span>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${selectedId === item.id ? 'text-[#16a34a]' : 'text-[#647384]'}`} />
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] text-xs text-[#647384] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#16835D] shrink-0" />
            <span>We never recommend battery replacement if a simple terminal cleaning or recharge solves the issue.</span>
          </div>
        </div>

        {/* Right Column: Diagnostic Result Card */}
        <div className="lg:col-span-6 bg-[#F5F7FA] p-6 sm:p-7 rounded-2xl border border-[#E1E7ED] space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-[#647384] uppercase tracking-wider block">
                Diagnosed Condition
              </span>
              <h3 className="text-xl font-bold text-[#0B1722] mt-0.5">{current.diagnosis}</h3>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
              current.urgency === 'critical'
                ? 'bg-red-50 text-[#16a34a] border-red-200'
                : current.urgency === 'moderate'
                ? 'bg-amber-50 text-[#F4B323] border-amber-200'
                : 'bg-emerald-50 text-[#16835D] border-emerald-200'
            }`}>
              {current.urgency} Urgency
            </span>
          </div>

          {/* Health Score Meter */}
          <div className="space-y-1.5 p-3.5 rounded-xl bg-white border border-[#E1E7ED]">
            <div className="flex justify-between text-xs">
              <span className="text-[#647384]">Estimated Battery Health:</span>
              <span className={`font-mono font-bold ${
                current.healthScore <= 20 ? 'text-[#16a34a]' : current.healthScore <= 50 ? 'text-[#F4B323]' : 'text-[#16835D]'
              }`}>
                {current.healthScore}%
              </span>
            </div>
            <div className="w-full h-2 bg-[#E1E7ED] rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  current.healthScore <= 20
                    ? 'bg-[#16a34a]'
                    : current.healthScore <= 50
                    ? 'bg-[#F4B323]'
                    : 'bg-[#16835D]'
                }`}
                style={{ width: `${current.healthScore}%` }}
              />
            </div>
          </div>

          {/* Technical Explanation */}
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#0B1722] uppercase">What Is Happening:</h4>
            <p className="text-xs text-[#647384] leading-relaxed">
              {current.explanation}
            </p>
          </div>

          {/* Recommended Solution */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E1E7ED] space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1722]">
              <ShieldCheck className="w-4 h-4 text-[#16835D]" />
              <span>Recommended Action:</span>
            </div>
            <p className="text-xs text-[#647384] leading-relaxed">
              {current.solution}
            </p>
          </div>

          {/* Action Triggers */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Hello NS Batteries, I ran your online diagnostic: ${current.label} (${current.diagnosis}). Please advise if you have replacement stock or can test my battery at your Ramanathapuram counter.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Store Desk</span>
            </a>

            <a
              href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white border border-[#E1E7ED] text-[#0B1722] hover:text-[#16a34a] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#16a34a]" />
              <span>Call: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
