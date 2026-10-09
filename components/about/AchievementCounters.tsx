'use client';

import React, { useEffect, useRef, useState } from 'react';
import { COMPANY_INFO } from '@/data/company';

function useCountUp(target: string, isVisible: boolean) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isVisible) return;
    const isNumeric = /^\d+/.test(target);
    if (!isNumeric) {
      setDisplay(target);
      return;
    }
    const num = parseInt(target.replace(/[^0-9]/g, ''), 10);
    const suffix = target.replace(/[0-9]/g, '');
    let start = 0;
    const steps = 40;
    const increment = Math.ceil(num / steps);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay(String(start) + suffix);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return display;
}

function StatCard({ stat, isVisible }: { stat: typeof COMPANY_INFO.stats[0]; isVisible: boolean }) {
  const animated = useCountUp(stat.value, isVisible);
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1017] border border-white/10 hover:border-red-500/30 transition-all group text-center sm:text-left">
      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors font-mono">
        {animated}
      </div>
      <div className="text-sm font-semibold text-slate-200 mt-2">{stat.label}</div>
      {'sub' in stat && (
        <div className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider font-mono">
          {(stat as any).sub}
        </div>
      )}
    </div>
  );
}

export default function AchievementCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {COMPANY_INFO.stats.map((stat, idx) => (
        <StatCard key={idx} stat={stat} isVisible={isVisible} />
      ))}
    </div>
  );
}
