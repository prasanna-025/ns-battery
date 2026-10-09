'use client';

import React, { useState } from 'react';
import { Battery, ShieldCheck, Zap, Layers, Sparkles, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function BatteryTeardown3D() {
  const [batteryType, setBatteryType] = useState<'lithium' | 'tubular'>('lithium');
  const [selectedPartIndex, setSelectedPartIndex] = useState<number>(0);
  const [isExploded, setIsExploded] = useState<boolean>(true);

  const lithiumParts = [
    {
      name: 'Intelligent Smart Active BMS',
      role: 'Brain & Thermal Guardian',
      specs: '100A continuous discharge • Active cell balancing',
      detail:
        'Continuously samples individual cell voltages, temperature gradients, and current draws. Automatically cuts power within 2ms if short circuits or overheating occur.',
      nsAdvantage: 'Original Japanese MCU processor with dual thermal probes (unlike unbranded Chinese boards).',
    },
    {
      name: 'Grade-A Prismatic LiFePO4 Cells',
      role: 'Energy Core (3500+ Cycles)',
      specs: '3.2V 100Ah per cell • Zero fire hazard chemistry',
      detail:
        'Lithium Iron Phosphate is thermally stable up to 500°C and cannot catch fire even under nail penetration tests. Retains >80% capacity after 10 years of daily usage.',
      nsAdvantage: 'Brand-new Grade-A barcode-matched cells. Zero second-life / recycled cells used.',
    },
    {
      name: 'Solid Pure Copper Busbars',
      role: 'Zero-Resistance Interconnects',
      specs: '99.9% Electrolytic Copper • Nickel plated',
      detail:
        'Heavy cross-section laser-welded busbars prevent voltage drop during heavy startup surges from water pumps and inverter refrigerators.',
      nsAdvantage: 'Laser micro-welded with zero mechanical vibration loosening.',
    },
    {
      name: 'Aviation Fireproof Aluminum Case',
      role: 'Chassis & Heat Dissipation',
      specs: 'IP65 Weatherproof • Wall-mount bracket included',
      detail:
        'Sleek wall-hanging architectural enclosure that dissipates heat without noisy internal cooling fans. Completely sealed with zero toxic acid fumes.',
      nsAdvantage: 'Saves 70% floor space compared to heavy, messy acid battery trolleys.',
    },
  ];

  const tubularParts = [
    {
      name: 'HADI High-Pressure Spine Casting',
      role: 'Positive Plate Spine Architecture',
      specs: '100 Bar Pressure Cast • Low Antimony Lead',
      detail:
        'Cast under 100 bar high pressure to ensure void-free crystal structure. Prevents spine corrosion and plate shedding during prolonged daily power cuts.',
      nsAdvantage: 'Genuine Luminous / Powerzone factory-cast spines with longest deep-cycle lifespan.',
    },
    {
      name: 'Ceramic Float Level Indicators',
      role: 'Distilled Water Monitoring',
      specs: '6 Color-coded floats included',
      detail:
        'Ceramic micro-filter traps acid fumes while allowing gas to escape. Float rings visually alert you when distilled water top-up is needed.',
      nsAdvantage: 'Pre-fitted on all tall tubular batteries purchased at our Ramanathapuram counter.',
    },
    {
      name: 'High-Volume Acid Reservoir',
      role: 'Electrolyte Thermal Buffer',
      specs: 'Extra volume tall container • High specific gravity',
      detail:
        'Extra acid volume above plates ensures plates stay submerged even during prolonged summer heat, drastically reducing water topping-up frequency.',
      nsAdvantage: 'Requires water top-up only once every 6 to 9 months.',
    },
    {
      name: 'Porous Polyethylene Envelope Separator',
      role: 'Short-Circuit Prevention',
      specs: 'Microporous PE with glass mat',
      detail:
        'Envelopes positive and negative plates completely to eliminate bottom sediment short-circuits, extending working life by over 30%.',
      nsAdvantage: 'Factory sealed against internal shorting.',
    },
  ];

  const currentParts = batteryType === 'lithium' ? lithiumParts : tubularParts;
  const activePart = currentParts[selectedPartIndex] || currentParts[0];

  return (
    <div className="w-full rounded-3xl bg-gradient-to-b from-[#062413] via-[#04160c] to-[#020d06] border border-emerald-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE BATTERY ANATOMY & TEARDOWN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Look Inside: Why NS Batteries Never Fail Prematurely
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Click internal components below to inspect the engineering differences between genuine OEM cells and cheap market alternatives.
          </p>
        </div>

        {/* Battery Chemistry Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#031309] rounded-xl border border-emerald-500/20 shrink-0">
          <button
            onClick={() => {
              setBatteryType('lithium');
              setSelectedPartIndex(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              batteryType === 'lithium'
                ? 'bg-teal-500 text-teal-950 shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            ⚡ LiFePO4 Lithium
          </button>
          <button
            onClick={() => {
              setBatteryType('tubular');
              setSelectedPartIndex(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              batteryType === 'tubular'
                ? 'bg-emerald-500 text-emerald-950 shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            🔋 Tall Tubular
          </button>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Layered Exploded Teardown Stack */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
            <span className="font-semibold text-emerald-300">
              {batteryType === 'lithium' ? 'LiFePO4 Internal Architecture' : 'Tall Tubular Cell Architecture'}
            </span>
            <button
              onClick={() => setIsExploded(!isExploded)}
              className="text-emerald-400 hover:text-white underline font-medium"
            >
              {isExploded ? 'Compact View' : 'Exploded View'}
            </button>
          </div>

          {/* Interactive Stack Cards */}
          <div className="space-y-2.5">
            {currentParts.map((part, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPartIndex(idx)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                  selectedPartIndex === idx
                    ? 'bg-gradient-to-r from-emerald-950 to-[#072916] border-emerald-400 ring-2 ring-emerald-400/30 shadow-lg translate-x-1.5'
                    : 'bg-[#04160c]/80 border-emerald-900/50 hover:border-emerald-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      selectedPartIndex === idx
                        ? 'bg-emerald-400 text-emerald-950'
                        : 'bg-emerald-950 text-emerald-300'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{part.name}</h4>
                    <p className="text-[11px] text-emerald-400">{part.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                    {part.specs}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedPartIndex === idx ? 'text-emerald-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All batteries include official manufacturer serial QR code for digital warranty registration.</span>
          </div>
        </div>

        {/* Right Column: Deep-Dive Component Inspector */}
        <div className="lg:col-span-6 bg-[#03140a] p-6 sm:p-7 rounded-2xl border border-emerald-500/30 space-y-5 shadow-xl">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              INSPECTED COMPONENT #{selectedPartIndex + 1}
            </span>
            <h3 className="text-xl font-bold text-white">
              {activePart.name}
            </h3>
            <p className="text-xs font-semibold text-amber-300 font-mono">
              Function: {activePart.role}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activePart.detail}
          </p>

          {/* Technical Spec Box */}
          <div className="p-3.5 rounded-xl bg-[#061e11] border border-emerald-950 text-xs space-y-1">
            <span className="text-slate-400 text-[11px] block">Factory Specification:</span>
            <p className="font-mono font-bold text-white">{activePart.specs}</p>
          </div>

          {/* NS Batteries Difference Guarantee */}
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>The NS Batteries Quality Standard:</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {activePart.nsAdvantage}
            </p>
          </div>

          {/* Warning against cheap alternatives */}
          <div className="flex items-start gap-2.5 text-xs text-amber-300/90 pt-1">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              Beware of unbranded street batteries using recycled lead scraps or uncertified BMS boards that swell and pose fire hazards.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
