import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Clock, Mail, MessageCircle, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import LeadForm from '@/components/common/LeadForm';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Contact NS Batteries | Store Location & Phone Ramanathapuram',
  description:
    'Visit NS Batteries at AKB Complex, GH Road, Ramanathapuram. Call 88701 20911 or 95145 20911 for battery testing, solar surveys, and emergency service.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-20 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#062413] via-[#09351c] to-[#04150b] border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>DIRECT STORE CONTACT & LOCATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get in Touch with NS Batteries
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Have a question about solar net metering, need an urgent battery replacement, or want to pick up Gulf Oil and SKF bearings? Visit our store or reach out through phone and WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Store Address Card */}
            <div className="p-6 rounded-2xl bg-[#061e11] border border-emerald-500/30 space-y-3 shadow-xl">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Store Address</span>
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">
                {COMPANY_INFO.address}
              </p>
              <p className="text-xs text-slate-400">
                Landmark: {COMPANY_INFO.landmark}
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-6 rounded-2xl bg-[#061e11] border border-emerald-500/30 space-y-3 shadow-xl">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Direct Phone Lines</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Store Line 1:</span>
                  <a
                    href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
                    className="font-bold text-emerald-300 hover:text-white"
                  >
                    +91 {COMPANY_INFO.phones[0].display}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Store Line 2:</span>
                  <a
                    href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`}
                    className="font-bold text-emerald-300 hover:text-white"
                  >
                    +91 {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp & Email */}
            <div className="p-6 rounded-2xl bg-[#061e11] border border-emerald-500/30 space-y-3 shadow-xl">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Instant Messaging & Email</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">WhatsApp:</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:underline"
                  >
                    +91 {COMPANY_INFO.phones[0].display}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Email:</span>
                  <span className="text-slate-200 font-mono">{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-[#061e11] border border-emerald-500/30 space-y-2 shadow-xl text-xs">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm mb-1">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Operating Hours</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Monday – Saturday:</span>
                <span className="font-semibold text-white">{COMPANY_INFO.workingHours.weekdays}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Sunday:</span>
                <span className="font-semibold text-white">{COMPANY_INFO.workingHours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#061d10] border border-emerald-500/40 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Send Us an Online Enquiry</span>
            </h3>
            <p className="text-xs text-slate-400">
              Fill in your details below and our store manager will connect with you right away.
            </p>
            <LeadForm defaultService="General Store Inquiry" />
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-black">
          <div className="p-4 bg-[#05180e] border-b border-emerald-900/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">Google Map View: Ramanathapuram Store</span>
            </div>
            <a
              href="https://maps.google.com/?q=21/20+AKB+Complex+GH+Road+Ramanathapuram+623501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-white underline font-semibold"
            >
              Open Interactive App Map
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.352494916898!2d78.825!3d9.366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01b34e5684db43%3A0x6b6c891398bb2c2e!2sRamanathapuram%2C%20Tamil%20Nadu%20623501!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="360"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NS Batteries Location Map"
          />
        </div>
      </section>
    </div>
  );
}
