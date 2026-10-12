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
    <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#E1E7ED] hover:border-[#CBD5E1] transition-shadow duration-200 hover:shadow-sm text-center sm:text-left">
      <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1722] tracking-tight font-sans">
        {animated}
      </div>
      <div className="text-sm font-bold text-[#17212B] mt-2">{stat.label}</div>
      {'sub' in stat && (
        <div className="text-xs text-[#647384] mt-1 font-medium">
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
