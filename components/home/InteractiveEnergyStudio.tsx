'use client';

import React, { useState } from 'react';
import { Sun, Battery, Zap, Stethoscope, Layers, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import RoofSolarVisualizer3D from '@/components/interactive/RoofSolarVisualizer3D';
import DayNightEnergyCycle from '@/components/interactive/DayNightEnergyCycle';
import ApplianceLoadBuilder from '@/components/interactive/ApplianceLoadBuilder';
import BatteryTeardown3D from '@/components/interactive/BatteryTeardown3D';
import BatteryDiagnosticDoctor from '@/components/interactive/BatteryDiagnosticDoctor';
import CoastalResilienceEngine from '@/components/interactive/CoastalResilienceEngine';

type StudioTab = 'solar' | 'inverter' | 'battery' | 'coastal';

export default function InteractiveEnergyStudio() {
  const [activeTab, setActiveTab] = useState<StudioTab>('solar');
  const [solarSubView, setSolarSubView] = useState<'3d-roof' | '24h-cycle'>('3d-roof');
  const [batterySubView, setBatterySubView] = useState<'doctor' | 'teardown'>('doctor');

  return (
    <section className="w-full space-y-6">
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#0a1622] border-l-4 border-[#cd2028] border-y border-r border-white/10 text-xs font-bold text-white uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#cd2028]" />
            <span>INTERACTIVE ENERGY WORKBENCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight font-display">
            Explore Power Systems Through Interactive Software
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Switch between our specialized engineering tools below to configure your rooftop, calculate inverter loads, inspect battery anatomy, or diagnose vehicle issues.
          </p>
        </div>

        {/* Master Studio Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#0a1622] border border-white/10 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('solar')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'solar'
                ? 'bg-[#cd2028] text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Solar 3D Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('inverter')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'inverter'
                ? 'bg-[#cd2028] text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Inverter Sizer</span>
          </button>

          <button
            onClick={() => setActiveTab('battery')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'battery'
                ? 'bg-[#cd2028] text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Battery className="w-4 h-4" />
            <span>Battery Clinic</span>
          </button>

          <button
            onClick={() => setActiveTab('coastal')}
            className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'coastal'
                ? 'bg-[#cd2028] text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Coastal Shield</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Solar 3D Lab */}
      {activeTab === 'solar' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs pb-1">
            <span className="text-slate-400 uppercase font-semibold">Solar Engineering Views:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSolarSubView('3d-roof')}
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  solarSubView === '3d-roof'
                    ? 'bg-[#cd2028] text-white'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                3D Rooftop Configurator
              </button>
              <button
                onClick={() => setSolarSubView('24h-cycle')}
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  solarSubView === '24h-cycle'
                    ? 'bg-[#cd2028] text-white'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                24-Hour Energy Lifecycle
              </button>
            </div>
          </div>

          {solarSubView === '3d-roof' ? <RoofSolarVisualizer3D /> : <DayNightEnergyCycle />}
        </div>
      )}

      {/* Tab 2: Inverter Sizer & Load Matrix */}
      {activeTab === 'inverter' && (
        <div>
          <ApplianceLoadBuilder />
        </div>
      )}

      {/* Tab 3: Battery Clinic (Doctor + Teardown) */}
      {activeTab === 'battery' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs pb-1">
            <span className="text-slate-400 uppercase font-semibold">Battery Diagnostic Modes:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBatterySubView('doctor')}
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  batterySubView === 'doctor'
                    ? 'bg-[#cd2028] text-white'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                Virtual Battery Doctor
              </button>
              <button
                onClick={() => setBatterySubView('teardown')}
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  batterySubView === 'teardown'
                    ? 'bg-[#cd2028] text-white'
                    : 'text-slate-400 hover:text-white bg-white/5'
                }`}
              >
                Internal Cell Anatomy
              </button>
            </div>
          </div>

          {batterySubView === 'doctor' ? <BatteryDiagnosticDoctor /> : <BatteryTeardown3D />}
        </div>
      )}

      {/* Tab 4: Coastal Shield */}
      {activeTab === 'coastal' && (
        <div>
          <CoastalResilienceEngine />
        </div>
      )}
    </section>
  );
}
