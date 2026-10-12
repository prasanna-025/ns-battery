'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export default function InstallationGallery() {
  const projects = [
    {
      title: '10 kWp Grid-Tied Commercial Rooftop',
      location: 'Ramanathapuram Town',
      type: 'Commercial Solar EPC',
      image: '/images/ecosystem/solar-10kwp.jpeg',
      description: 'High-yield bifacial installation with bi-directional net meter sync, reducing commercial tariff consumption by 85%.',
    },
    {
      title: '5 kWp Hybrid Residential Solar System',
      location: 'Kilakarai, Coastal Tamil Nadu',
      type: 'Residential Rooftop',
      image: '/images/ecosystem/solar-dealership.jpg',
      description: 'Turnkey rooftop array with heavy-duty coastal anti-corrosion mounts and LiFePO4 battery storage backup.',
    },
    {
      title: '3 kWp PM Surya Ghar On-Grid Installation',
      location: 'Paramakudi',
      type: 'Government Subsidy Project',
      image: '/images/ecosystem/hybrid-solar-flow.png',
      description: 'Completed under National Rooftop Solar portal with ₹78,000 DBT subsidy successfully credited.',
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#16a34a]">
              PROVEN FIELD EXPERIENCE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
              Solar Solutions in Action
            </h2>
            <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
              Real residential, commercial, and rural energy installations commissioned across Southern Tamil Nadu.
            </p>
          </div>

          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-[#F1F5F9] border border-[#E1E7ED] text-xs font-bold uppercase tracking-wider text-[#0B1722] transition-colors self-start md:self-auto shrink-0"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="w-4 h-4 text-[#16a34a]" />
          </Link>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white border border-[#E1E7ED] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full bg-[#E1E7ED] overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#0B1722]/85 text-white text-[11px] font-semibold backdrop-blur-sm">
                    {proj.type}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-[#647384]">
                    <MapPin className="w-3.5 h-3.5 text-[#16a34a]" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1722]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#647384] leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
