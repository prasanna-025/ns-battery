'use client';

import React, { useState } from 'react';
import { Sun, BatteryCharging, Home, Zap, RefreshCw, ShieldCheck, Radio } from 'lucide-react';

type SimulationMode = 'daytime' | 'evening' | 'outage';

export default function EnergyFlowSimulator() {
  const [mode, setMode] = useState<SimulationMode>('daytime');
  const [selectedNode, setSelectedNode] = useState<string | null>('inverter');

  const modeConfig = {
    daytime: {
      title: 'Daytime Solar Generation & Grid Export',
      badge: 'High Sunlight (Peak Generation)',
      solarKw: '4.8 kW',
      solarToInverter: true,
      inverterToBattery: true,
      batteryKw: '+1.6 kW (Charging)',
      batteryStatus: 'Charging 88%',
      inverterToHome: true,
      homeKw: '1.4 kW',
      inverterToGrid: true,
      gridKw: '1.8 kW Export',
      gridColor: 'text-[#16835D]',
      description: 'Solar panels generate 4.8 kW. The system powers the house, tops up the lithium battery, and exports the 1.8 kW surplus back to TANGEDCO to earn credits.',
    },
    evening: {
      title: 'Evening Battery Discharge (Zero Grid Bills)',
      badge: 'Zero Sunlight (Peak Tariff Hours)',
      solarKw: '0.0 kW (Night)',
      solarToInverter: false,
      inverterToBattery: false,
      batteryKw: '-1.8 kW (Discharging)',
      batteryStatus: 'Supplying House (92%)',
      inverterToHome: true,
      homeKw: '1.8 kW',
      inverterToGrid: false,
      gridKw: '0.0 kW (Zero Bill)',
      gridColor: 'text-[#647384]',
      description: 'Sun has set. Stored energy from the LiFePO4 battery smoothly powers refrigerators, fans, ACs and lights without drawing expensive electricity from the grid.',
    },
    outage: {
      title: 'TANGEDCO Grid Power Cut (Emergency Islanding)',
      badge: 'Grid Failure / Load Shedding',
      solarKw: '2.5 kW (Solar Active)',
      solarToInverter: true,
      inverterToBattery: false,
      batteryKw: '-1.2 kW (Combined)',
      batteryStatus: 'Emergency Backup Active',
      inverterToHome: true,
      homeKw: '3.7 kW (Full Backup)',
      inverterToGrid: false,
      gridKw: 'DISCONNECTED (Safe Islanding)',
      gridColor: 'text-[#16a34a]',
      description: 'Grid voltage drops to 0V. The NS Hybrid Inverter disconnects from the grid in <10ms to protect line workers, keeping your home completely illuminated with zero flicker.',
    },
  };

  const current = modeConfig[mode];

  const nodeDetails: Record<string, { title: string; subtitle: string; bullets: string[] }> = {
    sun: {
      title: 'Solar Radiance (Sun)',
      subtitle: 'Southern Tamil Nadu High Solar Irradiance',
      bullets: [
        'Ramanathapuram enjoys over 300 sunny days per year',
        'Average solar irradiation: 5.4 - 5.8 kWh/m²/day',
        'High generation potential for rooftop systems',
      ],
    },
    panels: {
      title: 'Mono PERC Bifacial Solar Modules',
      subtitle: '550W+ High-Efficiency Photovoltaic Modules',
      bullets: [
        'Half-cut cell design minimizes shadow losses',
        'Anti-reflective, marine-grade corrosion resistant frame',
        '25-year linear power performance warranty',
      ],
    },
    inverter: {
      title: 'NS Smart Hybrid rMPPT Inverter',
      subtitle: 'Brain of the Clean Energy System',
      bullets: [
        'Pure sine wave output with >98% tracking efficiency',
        'Bi-directional net metering export synchronization',
        '<10ms ultra-fast UPS transfer speed',
      ],
    },
    battery: {
      title: 'LiFePO4 Lithium / Solar Tall Tubular Storage',
      subtitle: 'Deep Cycle Energy Storage Bank',
      bullets: [
        'Lithium Iron Phosphate (3500+ cycles, 10-year lifespan) or C10 Tubular',
        'Zero acid odor, zero toxic fumes, maintenance-free',
        'Fast 2-hour recharge during sunny windows',
      ],
    },
    home: {
      title: 'Connected Residential / Commercial Load',
      subtitle: 'Continuous Clean Electricity',
      bullets: [
        'Powers refrigerators, LED lighting, fans, computers & TVs',
        'Pure sine wave prevents harmonic hum in fan motors',
        'Protected against sudden line surges and voltage drops',
      ],
    },
    grid: {
      title: 'TANGEDCO Utility Grid',
      subtitle: 'Bi-Directional Net Metering Connection',
      bullets: [
        'Exports excess solar units during daylight',
        'Banked units offset your nighttime consumption',
        'Reduces monthly electricity bills down to minimum slab',
      ],
    },
  };

  return (
    <div className="w-full bg-white border border-[#E1E7ED] rounded-2xl p-5 sm:p-8 shadow-sm">
      {/* Header & Mode Toggles */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#16a34a] mb-1">
            <Radio className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Interactive Energy Flow</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B1722]">
            See How Solar, Battery &amp; Grid Interact in Real Time
          </h3>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F5F7FA] rounded-xl border border-[#E1E7ED] shrink-0">
          <button
            onClick={() => setMode('daytime')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'daytime'
                ? 'bg-[#F4B323] text-[#0B1722] shadow-sm font-bold'
                : 'text-[#647384] hover:text-[#0B1722]'
            }`}
          >
            ☀️ Daytime Solar
          </button>
          <button
            onClick={() => setMode('evening')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'evening'
                ? 'bg-[#0B1722] text-white shadow-sm font-bold'
                : 'text-[#647384] hover:text-[#0B1722]'
            }`}
          >
            🌙 Evening Battery
          </button>
          <button
            onClick={() => setMode('outage')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'outage'
                ? 'bg-[#16a34a] text-white shadow-sm font-bold'
                : 'text-[#647384] hover:text-[#0B1722]'
            }`}
          >
            ⚡ Grid Power Cut
          </button>
        </div>
      </div>

      {/* Mode Status Bar */}
      <div className="mb-8 p-3.5 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#16835D] animate-ping" />
          <span className="font-bold text-[#0B1722]">{current.title}</span>
          <span className="text-[#647384]">({current.badge})</span>
        </div>
        <p className="text-[#647384] text-[11px] sm:text-right max-w-md">
          {current.description}
        </p>
      </div>

      {/* Node Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
        {/* Node 1: Sun */}
        <button
          onClick={() => setSelectedNode('sun')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'sun'
              ? 'bg-[#F4B323]/10 border-[#F4B323] shadow-sm'
              : 'bg-[#F5F7FA] border-[#E1E7ED] hover:border-[#F4B323]/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#F4B323]/20 flex items-center justify-center text-[#F4B323]">
              <Sun className={`w-5 h-5 ${mode === 'daytime' ? 'animate-spin' : ''}`} style={{ animationDuration: '12s' }} />
            </div>
            <span className="text-[10px] font-bold text-[#F4B323] uppercase">Input</span>
          </div>
          <div>
            <p className="text-xs text-[#647384]">Solar Sun</p>
            <p className="text-sm font-bold text-[#0B1722]">{mode === 'daytime' ? '100% Sunlight' : mode === 'evening' ? '0% (Night)' : '55% Radiance'}</p>
          </div>
        </button>

        {/* Node 2: Solar Panels */}
        <button
          onClick={() => setSelectedNode('panels')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'panels'
              ? 'bg-[#16835D]/10 border-[#16835D] shadow-sm'
              : 'bg-[#F5F7FA] border-[#E1E7ED] hover:border-[#16835D]/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#16835D]/15 flex items-center justify-center text-[#16835D]">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-[#16835D] uppercase">Generation</span>
          </div>
          <div>
            <p className="text-xs text-[#647384]">PV Modules</p>
            <p className="text-sm font-bold text-[#0B1722]">{current.solarKw}</p>
          </div>
        </button>

        {/* Node 3: Hybrid Inverter (Centerpiece) */}
        <button
          onClick={() => setSelectedNode('inverter')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between md:scale-105 ${
            selectedNode === 'inverter'
              ? 'bg-[#0B1722] border-[#0B1722] ring-2 ring-[#0B1722]/30 shadow-xl'
              : 'bg-[#122333] border-[#122333] hover:border-[#0B1722]'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <span className="text-[10px] font-extrabold text-white/70 uppercase">Core</span>
          </div>
          <div>
            <p className="text-xs text-white/60 font-medium">Hybrid PCU</p>
            <p className="text-sm font-bold text-white">rMPPT Smart Core</p>
          </div>
        </button>

        {/* Node 4: Battery */}
        <button
          onClick={() => setSelectedNode('battery')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'battery'
              ? 'bg-[#16835D]/10 border-[#16835D] shadow-sm'
              : 'bg-[#F5F7FA] border-[#E1E7ED] hover:border-[#16835D]/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#16835D]/15 flex items-center justify-center text-[#16835D]">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-[#16835D] uppercase">Storage</span>
          </div>
          <div>
            <p className="text-xs text-[#647384]">LiFePO4 Bank</p>
            <p className="text-sm font-bold text-[#0B1722]">{current.batteryKw}</p>
          </div>
        </button>

        {/* Node 5: Home & Grid */}
        <button
          onClick={() => setSelectedNode('home')}
          className={`col-span-2 md:col-span-1 p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'home'
              ? 'bg-[#16a34a]/10 border-[#16a34a] shadow-sm'
              : 'bg-[#F5F7FA] border-[#E1E7ED] hover:border-[#16a34a]/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#16a34a]/15 flex items-center justify-center text-[#16a34a]">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-[#16a34a] uppercase">Load</span>
          </div>
          <div>
            <p className="text-xs text-[#647384]">Home + Grid</p>
            <p className="text-sm font-bold text-[#0B1722]">{current.homeKw}</p>
          </div>
        </button>
      </div>

      {/* Selected Node Detail */}
      {selectedNode && nodeDetails[selectedNode] && (
        <div className="p-5 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h4 className="text-[#0B1722] font-bold text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16835D]" />
                {nodeDetails[selectedNode].title}
              </h4>
              <p className="text-xs text-[#647384] font-medium">
                {nodeDetails[selectedNode].subtitle}
              </p>
            </div>
            <span className="text-[11px] text-[#647384] italic">
              Click any module above to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#E1E7ED]">
            {nodeDetails[selectedNode].bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#647384]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16835D] shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
