'use client';

import React, { useState } from 'react';
import { Sun, BatteryCharging, Home, Zap, ArrowRight, ShieldCheck, RefreshCw, Radio } from 'lucide-react';

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
      gridColor: 'text-emerald-400',
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
      gridColor: 'text-slate-400',
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
      gridColor: 'text-red-400',
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
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#072113] to-[#04140b] border border-emerald-500/30 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Header & Mode Toggles */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>INTERACTIVE ENERGY FLOW ARCHITECTURE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            See How Solar, Battery & Grid Interact in Real Time
          </h3>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#031309] rounded-xl border border-emerald-500/20 shrink-0">
          <button
            onClick={() => setMode('daytime')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'daytime'
                ? 'bg-emerald-500 text-emerald-950 shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            ☀️ Daytime Solar
          </button>
          <button
            onClick={() => setMode('evening')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'evening'
                ? 'bg-amber-500 text-amber-950 shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            🌙 Evening Battery
          </button>
          <button
            onClick={() => setMode('outage')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'outage'
                ? 'bg-red-500 text-white shadow-md font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            ⚡ Grid Power Cut
          </button>
        </div>
      </div>

      {/* Mode Status Callout */}
      <div className="relative z-10 mb-8 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-white">{current.title}</span>
          <span className="text-emerald-400/80">({current.badge})</span>
        </div>
        <p className="text-slate-300 text-[11px] sm:text-right max-w-md">
          {current.description}
        </p>
      </div>

      {/* The Interactive Visual Nodes Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
        {/* Node 1: Sun */}
        <button
          onClick={() => setSelectedNode('sun')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'sun'
              ? 'bg-amber-950/60 border-amber-400 shadow-lg shadow-amber-500/20'
              : 'bg-[#061e11]/80 border-emerald-500/20 hover:border-emerald-400/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
              <Sun className={`w-5 h-5 ${mode === 'daytime' ? 'animate-spin' : ''}`} style={{ animationDuration: '12s' }} />
            </div>
            <span className="text-[10px] font-bold text-amber-400 uppercase">Input</span>
          </div>
          <div>
            <p className="text-xs text-slate-400">Solar Sun</p>
            <p className="text-sm font-bold text-white">{mode === 'daytime' ? '100% Sunlight' : mode === 'evening' ? '0% (Night)' : '55% Radiance'}</p>
          </div>
        </button>

        {/* Node 2: Solar Panels */}
        <button
          onClick={() => setSelectedNode('panels')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'panels'
              ? 'bg-emerald-950/80 border-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-[#061e11]/80 border-emerald-500/20 hover:border-emerald-400/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase">Generation</span>
          </div>
          <div>
            <p className="text-xs text-slate-400">PV Modules</p>
            <p className="text-sm font-bold text-white">{current.solarKw}</p>
          </div>
        </button>

        {/* Node 3: Hybrid Inverter (Centerpiece) */}
        <button
          onClick={() => setSelectedNode('inverter')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between md:scale-105 ${
            selectedNode === 'inverter'
              ? 'bg-gradient-to-b from-emerald-900/90 to-emerald-950 border-emerald-400 ring-2 ring-emerald-400/30 shadow-xl'
              : 'bg-[#082a17] border-emerald-500/40 hover:border-emerald-300'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-400 text-emerald-950 flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <span className="text-[10px] font-extrabold text-emerald-300 uppercase">Core</span>
          </div>
          <div>
            <p className="text-xs text-emerald-300 font-medium">Hybrid PCU</p>
            <p className="text-sm font-bold text-white">rMPPT Smart Core</p>
          </div>
        </button>

        {/* Node 4: Battery Storage */}
        <button
          onClick={() => setSelectedNode('battery')}
          className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'battery'
              ? 'bg-emerald-950/80 border-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-[#061e11]/80 border-emerald-500/20 hover:border-emerald-400/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase">Storage</span>
          </div>
          <div>
            <p className="text-xs text-slate-400">LiFePO4 Bank</p>
            <p className="text-sm font-bold text-white">{current.batteryKw}</p>
          </div>
        </button>

        {/* Node 5: Home & Grid */}
        <button
          onClick={() => setSelectedNode('home')}
          className={`col-span-2 md:col-span-1 p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
            selectedNode === 'home'
              ? 'bg-emerald-950/80 border-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-[#061e11]/80 border-emerald-500/20 hover:border-emerald-400/50'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase">Load & Grid</span>
          </div>
          <div>
            <p className="text-xs text-slate-400">Home + Grid</p>
            <p className="text-sm font-bold text-white">{current.homeKw}</p>
          </div>
        </button>
      </div>

      {/* Selected Node Deep Dive Details Card */}
      {selectedNode && nodeDetails[selectedNode] && (
        <div className="relative z-10 p-5 rounded-xl bg-[#04170d] border border-emerald-500/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {nodeDetails[selectedNode].title}
              </h4>
              <p className="text-xs text-emerald-400 font-medium">
                {nodeDetails[selectedNode].subtitle}
              </p>
            </div>
            <span className="text-[11px] text-slate-400 italic">
              Click any module above to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-emerald-900/50">
            {nodeDetails[selectedNode].bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
