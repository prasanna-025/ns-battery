'use client';

import React, { useState, useMemo } from 'react';
import { Sun, Moon, BatteryCharging, Zap, Home, Play, Pause, ShieldCheck } from 'lucide-react';

export default function DayNightEnergyCycle() {
  const [timeHour, setTimeHour] = useState<number>(12);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gridOutage, setGridOutage] = useState<boolean>(false);

  React.useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTimeHour((prev) => (prev >= 23.5 ? 0 : Number((prev + 0.5).toFixed(1))));
    }, 800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const sim = useMemo(() => {
    let solarKw = 0;
    if (timeHour >= 6 && timeHour <= 18) {
      const peakDist = Math.abs(timeHour - 12.5) / 6;
      const curve = Math.cos((peakDist * Math.PI) / 2);
      solarKw = Math.max(0, Number((curve * 5.4).toFixed(2)));
    }

    let homeLoadKw = 1.2;
    if (timeHour >= 7 && timeHour <= 10) homeLoadKw = 1.8;
    else if (timeHour >= 18 && timeHour <= 23) homeLoadKw = 2.4;
    else if (timeHour >= 0 && timeHour <= 5) homeLoadKw = 0.9;

    let batteryAction: 'charging' | 'discharging' | 'idle' = 'idle';
    let batteryKw = 0;
    let gridKw = 0;
    let batteryPercentage = 85;

    if (solarKw > homeLoadKw) {
      const surplus = solarKw - homeLoadKw;
      batteryAction = 'charging';
      batteryKw = Math.min(2.2, Number(surplus.toFixed(2)));
      gridKw = Number((surplus - batteryKw).toFixed(2));
      batteryPercentage = Math.min(100, Math.round(70 + (timeHour - 6) * 3));
    } else {
      const deficit = homeLoadKw - solarKw;
      if (deficit > 0) {
        batteryAction = 'discharging';
        batteryKw = Number(deficit.toFixed(2));
        gridKw = 0;
        batteryPercentage = Math.max(35, Math.round(100 - (timeHour > 18 ? (timeHour - 18) * 8 : (timeHour + 6) * 5)));
      }
    }

    if (gridOutage) gridKw = 0;

    // Sky label only (removed dark gradient colors)
    let skyLabel = 'Night • Silent Battery Backup';
    let isDaytime = false;
    let isSunset = false;

    if (timeHour >= 5.5 && timeHour < 8) {
      skyLabel = 'Dawn • Solar Waking Up';
      isDaytime = true;
    } else if (timeHour >= 8 && timeHour < 16.5) {
      skyLabel = 'Midday Peak • Exporting Clean Power to Grid';
      isDaytime = true;
    } else if (timeHour >= 16.5 && timeHour < 19) {
      skyLabel = 'Golden Sunset • Battery Smooth Handover';
      isSunset = true;
    }

    return { solarKw, homeLoadKw, batteryAction, batteryKw, gridKw, batteryPercentage, skyLabel, isDaytime, isSunset };
  }, [timeHour, gridOutage]);

  const formattedTime = `${String(Math.floor(timeHour)).padStart(2, '0')}:${timeHour % 1 === 0 ? '00' : '30'}`;

  return (
    <div className="w-full bg-white border border-[#E1E7ED] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E1E7ED] text-xs font-semibold text-[#16835D] uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5" />
            <span>24-Hour Energy Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1722] tracking-tight">
            See How Your Home Operates Around the Clock
          </h2>
          <p className="text-xs sm:text-sm text-[#647384]">
            Drag the time slider to witness how solar panels, lithium storage, and the TANGEDCO grid balance seamlessly.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setGridOutage(!gridOutage)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              gridOutage
                ? 'bg-[#16a34a] text-white border-[#16a34a] shadow-sm animate-pulse'
                : 'bg-[#F5F7FA] text-[#647384] border-[#E1E7ED] hover:border-[#16a34a] hover:text-[#16a34a]'
            }`}
          >
            {gridOutage ? '⚠️ Grid Cut Active' : 'Simulate Grid Cut'}
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-xl bg-[#0B1722] hover:bg-[#122333] text-white font-bold transition-colors shadow-sm"
            title={isPlaying ? 'Pause auto-play' : 'Play 24-hour cycle'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Time Slider */}
      <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E1E7ED] mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#0B1722] tracking-wider">
              {formattedTime}
            </span>
            <span className="text-xs font-semibold text-[#647384] px-2.5 py-0.5 rounded-full bg-white border border-[#E1E7ED]">
              {sim.skyLabel}
            </span>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold">
            <button onClick={() => setTimeHour(6.5)} className="px-2.5 py-1 rounded-lg bg-white text-[#647384] hover:text-[#0B1722] border border-[#E1E7ED] whitespace-nowrap">
              🌅 06:30
            </button>
            <button onClick={() => setTimeHour(12)} className="px-2.5 py-1 rounded-lg bg-white text-[#F4B323] hover:text-[#0B1722] border border-[#E1E7ED] whitespace-nowrap">
              ☀️ 12:00
            </button>
            <button onClick={() => setTimeHour(18.5)} className="px-2.5 py-1 rounded-lg bg-white text-[#647384] hover:text-[#0B1722] border border-[#E1E7ED] whitespace-nowrap">
              🌇 18:30
            </button>
            <button onClick={() => setTimeHour(22)} className="px-2.5 py-1 rounded-lg bg-white text-[#0B1722] border border-[#E1E7ED] whitespace-nowrap">
              🌙 22:00
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <input
            type="range"
            min={0}
            max={23.5}
            step={0.5}
            value={timeHour}
            onChange={(e) => setTimeHour(Number(e.target.value))}
            className="w-full h-2 bg-[#E1E7ED] rounded-lg appearance-none cursor-pointer accent-[#16a34a]"
          />
          <div className="flex justify-between text-[10px] text-[#647384] font-mono">
            <span>12:00 AM</span>
            <span>06:00 AM</span>
            <span>12:00 PM</span>
            <span>06:00 PM</span>
            <span>11:30 PM</span>
          </div>
        </div>
      </div>

      {/* Energy Meters Grid */}
      <div className={`rounded-2xl border p-6 sm:p-8 transition-colors duration-700 space-y-6 ${
        sim.isDaytime ? 'bg-[#F5F7FA] border-[#F4B323]/30' : sim.isSunset ? 'bg-[#F5F7FA] border-[#F4B323]/20' : 'bg-[#0B1722] border-[#0B1722]'
      }`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Solar Generation */}
          <div className={`p-4 rounded-xl border space-y-1 ${sim.isDaytime || sim.isSunset ? 'bg-white border-[#E1E7ED]' : 'bg-white/10 border-white/10'}`}>
            <div className={`flex items-center justify-between text-xs ${sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/60'}`}>
              <span className="flex items-center gap-1.5 font-semibold text-[#F4B323]">
                <Sun className={`w-4 h-4 ${sim.solarKw > 0 ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
                Solar Generation
              </span>
              <span className="text-[10px] uppercase font-bold text-[#16835D]">Rooftop</span>
            </div>
            <p className={`text-2xl sm:text-3xl font-extrabold font-mono ${sim.isDaytime || sim.isSunset ? 'text-[#0B1722]' : 'text-white'}`}>
              {sim.solarKw} <span className="text-sm font-normal text-[#16835D]">kW</span>
            </p>
            <p className={`text-[11px] ${sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/50'}`}>
              {sim.solarKw > 3 ? 'Peak Generation Window' : sim.solarKw > 0 ? 'Moderate Output' : 'Resting (Zero Sunlight)'}
            </p>
          </div>

          {/* Home Load */}
          <div className={`p-4 rounded-xl border space-y-1 ${sim.isDaytime || sim.isSunset ? 'bg-white border-[#E1E7ED]' : 'bg-white/10 border-white/10'}`}>
            <div className={`flex items-center justify-between text-xs ${sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/60'}`}>
              <span className="flex items-center gap-1.5 font-semibold text-[#16a34a]">
                <Home className="w-4 h-4" />
                Home Load
              </span>
              <span className="text-[10px] uppercase font-bold text-[#16a34a]">Live</span>
            </div>
            <p className={`text-2xl sm:text-3xl font-extrabold font-mono ${sim.isDaytime || sim.isSunset ? 'text-[#0B1722]' : 'text-white'}`}>
              {sim.homeLoadKw} <span className="text-sm font-normal text-[#647384]">kW</span>
            </p>
            <p className={`text-[11px] ${sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/50'}`}>
              {timeHour >= 18 && timeHour <= 22 ? 'Peak Evening (ACs + Lights)' : 'Normal Base Load'}
            </p>
          </div>

          {/* Battery */}
          <div className={`p-4 rounded-xl border space-y-1 ${sim.isDaytime || sim.isSunset ? 'bg-white border-[#E1E7ED]' : 'bg-white/10 border-white/10'}`}>
            <div className={`flex items-center justify-between text-xs ${sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/60'}`}>
              <span className="flex items-center gap-1.5 font-semibold text-[#16835D]">
                <BatteryCharging className="w-4 h-4" />
                LiFePO4 Storage
              </span>
              <span className="text-[10px] uppercase font-bold text-[#16835D]">{sim.batteryPercentage}%</span>
            </div>
            <p className={`text-2xl sm:text-3xl font-extrabold font-mono ${sim.isDaytime || sim.isSunset ? 'text-[#0B1722]' : 'text-white'}`}>
              {sim.batteryAction === 'charging' ? `+${sim.batteryKw}` : sim.batteryAction === 'discharging' ? `-${sim.batteryKw}` : '0.0'}
              <span className="text-sm font-normal text-[#16835D]"> kW</span>
            </p>
            <div className="w-full h-1.5 bg-[#E1E7ED] rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-[#16835D] transition-all duration-300"
                style={{ width: `${sim.batteryPercentage}%` }}
              />
            </div>
          </div>

          {/* Grid */}
          <div className={`p-4 rounded-xl border space-y-1 ${sim.isDaytime || sim.isSunset ? 'bg-white border-[#E1E7ED]' : 'bg-white/10 border-white/10'}`}>
            <div className={`flex items-center justify-between text-xs ${sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/60'}`}>
              <span className="flex items-center gap-1.5 font-semibold text-[#F4B323]">
                <Zap className="w-4 h-4" />
                TANGEDCO Grid
              </span>
              <span className={`text-[10px] uppercase font-bold ${gridOutage ? 'text-[#16a34a]' : 'text-[#16835D]'}`}>
                {gridOutage ? 'Outage' : sim.gridKw > 0 ? 'Exporting' : 'Zero Draw'}
              </span>
            </div>
            <p className={`text-2xl sm:text-3xl font-extrabold font-mono ${sim.isDaytime || sim.isSunset ? 'text-[#0B1722]' : 'text-white'}`}>
              {gridOutage ? '0.0' : sim.gridKw > 0 ? `+${sim.gridKw}` : '0.0'}
              <span className="text-sm font-normal text-[#F4B323]"> kW</span>
            </p>
            <p className={`text-[11px] ${sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/50'}`}>
              {gridOutage ? 'Safe Islanding (<10ms switch)' : sim.gridKw > 0 ? 'Exporting Surplus' : 'Zero Grid Power Needed'}
            </p>
          </div>
        </div>

        {/* Narrative Box */}
        <div className={`p-4 rounded-xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          sim.isDaytime || sim.isSunset ? 'bg-[#F5F7FA] border-[#E1E7ED]' : 'bg-white/5 border-white/10'
        }`}>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${sim.isDaytime || sim.isSunset ? 'text-[#16835D]' : 'text-[#16835D]'}`} />
            <div className={sim.isDaytime || sim.isSunset ? 'text-[#647384]' : 'text-white/70'}>
              <strong className={sim.isDaytime || sim.isSunset ? 'text-[#0B1722]' : 'text-white'}>Active Energy Dynamic: </strong>
              {sim.solarKw > 0 && sim.solarKw >= sim.homeLoadKw ? (
                <span>
                  Your solar system is generating <strong className="text-[#16835D]">{sim.solarKw} kW</strong>. It powers your entire house ({sim.homeLoadKw} kW), charges your battery (+{sim.batteryKw} kW), and sends <strong className="text-[#F4B323]">{sim.gridKw} kW</strong> to TANGEDCO to earn unit credits.
                </span>
              ) : (
                <span>
                  At {formattedTime}, stored clean power in your LiFePO4 battery delivers <strong className="text-[#16835D]">{sim.batteryKw} kW</strong> to your home. You draw <strong className="text-[#16a34a]">0 units from the grid</strong> during peak evening electricity rates.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
