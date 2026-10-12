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
    <div className="w-full bg-white border border-[#E1E7ED] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E1E7ED] text-xs font-semibold text-[#16835D] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Battery Anatomy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1722] tracking-tight">
            Look Inside: Why NS Batteries Never Fail Prematurely
          </h2>
          <p className="text-xs sm:text-sm text-[#647384]">
            Click internal components below to inspect the engineering differences between genuine OEM cells and cheap market alternatives.
          </p>
        </div>

        {/* Battery Chemistry Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F5F7FA] rounded-xl border border-[#E1E7ED] shrink-0">
          <button
            onClick={() => {
              setBatteryType('lithium');
              setSelectedPartIndex(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              batteryType === 'lithium'
                ? 'bg-[#0B1722] text-white shadow-sm font-bold'
                : 'text-[#647384] hover:text-[#0B1722]'
            }`}
          >
            ⚡ LiFePO4 Lithium
          </button>
          <button
            onClick={() => {
              setBatteryType('tubular');
              setSelectedPartIndex(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              batteryType === 'tubular'
                ? 'bg-[#0B1722] text-white shadow-sm font-bold'
                : 'text-[#647384] hover:text-[#0B1722]'
            }`}
          >
            🔋 Tall Tubular
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Layered Stack */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#647384] pb-1">
            <span className="font-semibold text-[#0B1722]">
              {batteryType === 'lithium' ? 'LiFePO4 Internal Architecture' : 'Tall Tubular Cell Architecture'}
            </span>
            <button
              onClick={() => setIsExploded(!isExploded)}
              className="text-[#D9232E] hover:underline font-semibold"
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
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                  selectedPartIndex === idx
                    ? 'bg-white border-[#D9232E] shadow-sm translate-x-1'
                    : 'bg-[#F5F7FA] border-[#E1E7ED] hover:border-[#D9232E]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      selectedPartIndex === idx
                        ? 'bg-[#D9232E] text-white'
                        : 'bg-[#E1E7ED] text-[#0B1722]'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1722]">{part.name}</h4>
                    <p className="text-[11px] text-[#647384]">{part.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#647384] font-mono hidden sm:inline">
                    {part.specs}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedPartIndex === idx ? 'text-[#D9232E] translate-x-1' : 'text-[#647384]'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] text-xs text-[#647384] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#16835D] shrink-0" />
            <span>All batteries include official manufacturer serial QR code for digital warranty registration.</span>
          </div>
        </div>

        {/* Right Column: Deep-Dive Component Inspector */}
        <div className="lg:col-span-6 bg-[#F5F7FA] p-6 sm:p-7 rounded-2xl border border-[#E1E7ED] space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-[#D9232E] uppercase tracking-wider">
              Component #{selectedPartIndex + 1}
            </span>
            <h3 className="text-xl font-bold text-[#0B1722]">
              {activePart.name}
            </h3>
            <p className="text-xs font-semibold text-[#647384]">
              Function: {activePart.role}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#647384] leading-relaxed">
            {activePart.detail}
          </p>

          {/* Technical Spec Box */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E1E7ED] text-xs space-y-1">
            <span className="text-[#647384] text-[11px] block">Factory Specification:</span>
            <p className="font-mono font-bold text-[#0B1722]">{activePart.specs}</p>
          </div>

          {/* NS Batteries Difference Guarantee */}
          <div className="p-4 rounded-xl bg-white border border-[#16835D]/30 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#16835D]">
              <ShieldCheck className="w-4 h-4 text-[#16835D]" />
              <span>The NS Batteries Quality Standard:</span>
            </div>
            <p className="text-xs text-[#647384] leading-relaxed">
              {activePart.nsAdvantage}
            </p>
          </div>

          {/* Warning against cheap alternatives */}
          <div className="flex items-start gap-2.5 text-xs text-[#647384] pt-1">
            <AlertTriangle className="w-4 h-4 text-[#F4B323] shrink-0 mt-0.5" />
            <span>
              Beware of unbranded street batteries using recycled lead scraps or uncertified BMS boards that swell and pose fire hazards.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
