'use client';

import React, { useState, useMemo } from 'react';
import { Sun, Moon, BatteryCharging, Zap, Home, ArrowRight, Play, Pause, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

export default function DayNightEnergyCycle() {
  const [timeHour, setTimeHour] = useState<number>(12); // 0 to 24
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gridOutage, setGridOutage] = useState<boolean>(false);

  // Auto-play interval
  React.useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTimeHour((prev) => (prev >= 23.5 ? 0 : Number((prev + 0.5).toFixed(1))));
    }, 800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Physics simulation calculations based on hour
  const sim = useMemo(() => {
    // Sun generation bell curve between 6:00 and 18:00, peak at 12:30
    let solarKw = 0;
    if (timeHour >= 6 && timeHour <= 18) {
      const peakDist = Math.abs(timeHour - 12.5) / 6; // 0 at peak, 1 at dawn/dusk
      const curve = Math.cos((peakDist * Math.PI) / 2);
      solarKw = Math.max(0, Number((curve * 5.4).toFixed(2)));
    }

    // Typical home load profile: higher in morning (7-9), low mid-day, high evening (18-23)
    let homeLoadKw = 1.2;
    if (timeHour >= 7 && timeHour <= 10) homeLoadKw = 1.8;
    else if (timeHour >= 18 && timeHour <= 23) homeLoadKw = 2.4;
    else if (timeHour >= 0 && timeHour <= 5) homeLoadKw = 0.9;

    // Battery state logic
    // Battery charges during solar surplus, discharges during evening
    let batteryAction: 'charging' | 'discharging' | 'idle' = 'idle';
    let batteryKw = 0;
    let gridKw = 0; // Positive = Exporting, Negative = Importing
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
        if (!gridOutage) {
          batteryAction = 'discharging';
          batteryKw = Number(deficit.toFixed(2));
          gridKw = 0; // Battery covers deficit, 0 grid bill!
          batteryPercentage = Math.max(35, Math.round(100 - (timeHour > 18 ? (timeHour - 18) * 8 : (timeHour + 6) * 5)));
        } else {
          // Grid power cut: battery covers 100% of load
          batteryAction = 'discharging';
          batteryKw = Number(deficit.toFixed(2));
          gridKw = 0;
          batteryPercentage = Math.max(25, Math.round(80 - (timeHour * 2)));
        }
      }
    }

    if (gridOutage) {
      gridKw = 0;
    }

    // Sky colors
    let skyGradient = 'from-[#030d07] via-[#04160d] to-[#020b05]'; // Night
    let skyLabel = 'Night • Silent Battery Backup';
    let sunIcon = Moon;
    let sunColor = 'text-blue-400';

    if (timeHour >= 5.5 && timeHour < 8) {
      skyGradient = 'from-[#1a1c0d] via-[#242b10] to-[#051a0d]'; // Dawn
      skyLabel = 'Dawn • Solar Waking Up';
      sunIcon = Sun;
      sunColor = 'text-amber-400';
    } else if (timeHour >= 8 && timeHour < 16.5) {
      skyGradient = 'from-[#072d17] via-[#094220] to-[#04180d]'; // Bright Day
      skyLabel = 'Midday Peak • Exporting Clean Power to Grid';
      sunIcon = Sun;
      sunColor = 'text-amber-300';
    } else if (timeHour >= 16.5 && timeHour < 19) {
      skyGradient = 'from-[#2b1708] via-[#331c0b] to-[#0a180f]'; // Sunset
      skyLabel = 'Golden Sunset • Battery Smooth Handover';
      sunIcon = Sun;
      sunColor = 'text-amber-500';
    }

    return {
      solarKw,
      homeLoadKw,
      batteryAction,
      batteryKw,
      gridKw,
      batteryPercentage,
      skyGradient,
      skyLabel,
      sunIcon,
      sunColor,
    };
  }, [timeHour, gridOutage]);

  const formattedTime = `${String(Math.floor(timeHour)).padStart(2, '0')}:${timeHour % 1 === 0 ? '00' : '30'}`;

  return (
    <div className="w-full rounded-3xl bg-gradient-to-b from-[#062213] via-[#04160c] to-[#020d06] border border-emerald-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Animated Glow Halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-52 bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE 24-HOUR ENERGY LIFECYCLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            See How Your Home Operates Around the Clock
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Drag the time slider below to witness how solar panels, lithium storage, and the TANGEDCO grid balance seamlessly.
          </p>
        </div>

        {/* Outage Toggle & Play/Pause */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setGridOutage(!gridOutage)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              gridOutage
                ? 'bg-red-500 text-white border-red-400 shadow-lg shadow-red-500/30 animate-pulse'
                : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900'
            }`}
          >
            {gridOutage ? '⚠️ TANGEDCO Grid Cut Active' : 'Simulate Grid Power Cut'}
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold transition-all shadow-md"
            title={isPlaying ? 'Pause auto-play' : 'Play 24-hour cycle'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Interactive Time Slider Controller */}
      <div className="relative z-10 p-5 rounded-2xl bg-[#031309] border border-emerald-500/30 mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-300 tracking-wider">
              {formattedTime}
            </span>
            <span className="text-xs font-semibold text-white px-2.5 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/30">
              {sim.skyLabel}
            </span>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold">
            <button
              onClick={() => setTimeHour(6.5)}
              className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 hover:text-white border border-emerald-800"
            >
              🌅 06:30 Sunrise
            </button>
            <button
              onClick={() => setTimeHour(12)}
              className="px-2.5 py-1 rounded-lg bg-emerald-950 text-amber-300 hover:text-white border border-amber-800"
            >
              ☀️ 12:00 Peak Sun
            </button>
            <button
              onClick={() => setTimeHour(18.5)}
              className="px-2.5 py-1 rounded-lg bg-emerald-950 text-amber-500 hover:text-white border border-amber-900"
            >
              🌇 18:30 Sunset
            </button>
            <button
              onClick={() => setTimeHour(22)}
              className="px-2.5 py-1 rounded-lg bg-emerald-950 text-blue-300 hover:text-white border border-blue-900"
            >
              🌙 22:00 Night
            </button>
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-1">
          <input
            type="range"
            min={0}
            max={23.5}
            step={0.5}
            value={timeHour}
            onChange={(e) => setTimeHour(Number(e.target.value))}
            className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>12:00 AM</span>
            <span>06:00 AM (Sunrise)</span>
            <span>12:00 PM (Noon)</span>
            <span>06:00 PM (Sunset)</span>
            <span>11:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Visual Stage (Sky & Power Flow Architecture) */}
      <div className={`relative z-10 rounded-2xl bg-gradient-to-b ${sim.skyGradient} border border-emerald-500/30 p-6 sm:p-8 transition-colors duration-700 shadow-xl space-y-8`}>
        {/* Dynamic Energy Meters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Solar Generation Meter */}
          <div className="p-4 rounded-xl bg-[#04150b]/80 backdrop-blur-md border border-emerald-500/30 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-amber-300">
                <Sun className={`w-4 h-4 ${sim.solarKw > 0 ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
                Solar Generation
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-400">Rooftop</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {sim.solarKw} <span className="text-sm font-normal text-emerald-400">kW</span>
            </p>
            <p className="text-[11px] text-slate-400">
              {sim.solarKw > 3 ? 'Peak Generation Window' : sim.solarKw > 0 ? 'Moderate Output' : 'Resting (Zero Sunlight)'}
            </p>
          </div>

          {/* 2. Home Load Consumption */}
          <div className="p-4 rounded-xl bg-[#04150b]/80 backdrop-blur-md border border-emerald-500/30 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
                <Home className="w-4 h-4 text-emerald-400" />
                Home Electricity Load
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-400">Live</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {sim.homeLoadKw} <span className="text-sm font-normal text-slate-400">kW</span>
            </p>
            <p className="text-[11px] text-slate-400">
              {timeHour >= 18 && timeHour <= 22 ? 'Peak Family Evening (ACs + Lights)' : 'Normal Household Base Load'}
            </p>
          </div>

          {/* 3. Lithium Battery Level & Flow */}
          <div className="p-4 rounded-xl bg-[#04150b]/80 backdrop-blur-md border border-emerald-500/30 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-teal-300">
                <BatteryCharging className="w-4 h-4 text-teal-400" />
                LiFePO4 Storage
              </span>
              <span className="text-[10px] uppercase font-bold text-teal-400">{sim.batteryPercentage}%</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {sim.batteryAction === 'charging' ? `+${sim.batteryKw}` : sim.batteryAction === 'discharging' ? `-${sim.batteryKw}` : '0.0'}
              <span className="text-sm font-normal text-teal-400"> kW</span>
            </p>
            <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                style={{ width: `${sim.batteryPercentage}%` }}
              />
            </div>
          </div>

          {/* 4. TANGEDCO Net Metering */}
          <div className="p-4 rounded-xl bg-[#04150b]/80 backdrop-blur-md border border-emerald-500/30 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-amber-300">
                <Zap className="w-4 h-4 text-amber-400" />
                TANGEDCO Grid
              </span>
              <span className={`text-[10px] uppercase font-bold ${gridOutage ? 'text-red-400' : 'text-emerald-400'}`}>
                {gridOutage ? 'Outage' : sim.gridKw > 0 ? 'Exporting' : 'Zero Draw'}
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {gridOutage ? '0.0' : sim.gridKw > 0 ? `+${sim.gridKw}` : '0.0'}
              <span className="text-sm font-normal text-amber-400"> kW</span>
            </p>
            <p className="text-[11px] text-slate-400">
              {gridOutage
                ? 'Safe Islanding (<10ms switch)'
                : sim.gridKw > 0
                ? 'Exporting Surplus (Spinning Meter Backwards)'
                : 'Zero Grid Power Needed'}
            </p>
          </div>
        </div>

        {/* Narrative Flow Explanation Box */}
        <div className="p-4 rounded-xl bg-[#03150b]/90 border border-emerald-500/40 text-xs text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Active Energy Dynamic: </strong>
              {sim.solarKw > 0 && sim.solarKw >= sim.homeLoadKw ? (
                <span>
                  Your solar system is generating <strong className="text-emerald-300">{sim.solarKw} kW</strong>. It powers your entire house ({sim.homeLoadKw} kW), fast-charges your lithium battery (+{sim.batteryKw} kW), and sends <strong className="text-amber-300">{sim.gridKw} kW excess</strong> to TANGEDCO to earn monetary unit credits.
                </span>
              ) : (
                <span>
                  At {formattedTime}, stored clean power in your LiFePO4 battery smoothly delivers <strong className="text-teal-300">{sim.batteryKw} kW</strong> to your home. You draw <strong className="text-emerald-300">0 units from the grid</strong> during peak evening electricity rates.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
