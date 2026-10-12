'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function HomeQuoteSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Solar Rooftop Installation');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          serviceType: service,
          address: location.trim(),
          notes: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError('Could not submit request. Please call us directly at 88701 20911.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24 border-b border-[#E1E7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Supporting Info & Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] border border-[#E1E7ED] text-[11px] font-bold uppercase tracking-wider text-[#15803d]">
                DIRECT ADVISORY & ESTIMATES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1722] tracking-tight">
                Let's Find the Right Energy Solution for You.
              </h2>
              <p className="text-sm sm:text-base text-[#647384] leading-relaxed">
                Tell us what you need. Our team can help you explore suitable products, solar installation options, and available subsidy guidance.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="p-6 rounded-xl bg-[#F5F7FA] border border-[#E1E7ED] space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1722]">
                Ramanathapuram Flagship Counter
              </h3>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#17212B]">
                <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-[#647384] mt-0.5">{COMPANY_INFO.landmark}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E1E7ED] space-y-2">
                <span className="text-[11px] font-medium text-[#647384] uppercase">Direct Store Helplines:</span>
                <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-[#0B1722] font-mono">
                  <a href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`} className="hover:text-[#16a34a] flex items-center gap-1.5 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
                    <span>{COMPANY_INFO.phones[0].display}</span>
                  </a>
                  <span className="text-slate-300">/</span>
                  <a href={`tel:+91${COMPANY_INFO.phones[1].raw.slice(2)}`} className="hover:text-[#16a34a] flex items-center gap-1.5 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
                    <span>{COMPANY_INFO.phones[1].display}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E1E7ED] shadow-sm">
              {isSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#16835D]/10 text-[#16835D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1722]">Thank You! Enquiry Received.</h3>
                  <p className="text-sm text-[#647384] max-w-md mx-auto">
                    Our Ramanathapuram technical advisor will review your requirement and call you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setName('');
                      setPhone('');
                      setLocation('');
                      setMessage('');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F7FA] border border-[#E1E7ED] text-xs font-semibold text-[#0B1722] hover:bg-[#E1E7ED] transition-colors"
                  >
                    <span>Send Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#16a34a]" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#17212B]">
                        Full Name <span className="text-[#16a34a]">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Syed Ibrahim"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E7ED] text-sm text-[#17212B] bg-[#F5F7FA] focus:bg-white focus:border-[#16a34a] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#17212B]">
                        Mobile Number <span className="text-[#16a34a]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit number"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E7ED] text-sm text-[#17212B] bg-[#F5F7FA] focus:bg-white focus:border-[#16a34a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Area of Interest */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#17212B]">
                        Area of Interest
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E7ED] text-sm text-[#17212B] bg-[#F5F7FA] focus:bg-white focus:border-[#16a34a] focus:outline-none transition-colors"
                      >
                        <option value="Solar Rooftop Installation">Solar Rooftop Installation</option>
                        <option value="PM Surya Ghar Subsidy">PM Surya Ghar Subsidy Assistance</option>
                        <option value="Automotive Batteries">Automotive Batteries (Car / Bike / Truck)</option>
                        <option value="Inverter & Home UPS">Inverter & Home UPS</option>
                        <option value="Lithium LiFePO4 Storage">Lithium LiFePO4 Battery Storage</option>
                        <option value="Gulf Oil & SKF Bearings">Gulf Oil Lubricants & SKF Bearings</option>
                        <option value="Other Commercial Project">Other Commercial Project</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#17212B]">
                        Location / Town
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Ramanathapuram, Kilakarai"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E7ED] text-sm text-[#17212B] bg-[#F5F7FA] focus:bg-white focus:border-[#16a34a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#17212B]">
                      Additional Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention your estimated monthly power bill or required capacity..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1E7ED] text-sm text-[#17212B] bg-[#F5F7FA] focus:bg-white focus:border-[#16a34a] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#15803d] hover:bg-[#166534] hover:scale-[1.02] active:scale-[1.07] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request a Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#647384] text-center pt-1">
                    Your contact details are strictly kept confidential and only used for your requested consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
