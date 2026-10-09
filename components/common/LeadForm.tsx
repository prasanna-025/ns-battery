'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, Sun, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface LeadFormProps {
  defaultService?: string;
  defaultMonthlyBill?: number;
  onSuccess?: () => void;
  className?: string;
}

export default function LeadForm({
  defaultService = 'Rooftop Solar Consultation',
  defaultMonthlyBill,
  onSuccess,
  className = '',
}: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState(defaultService);
  const [monthlyBill, setMonthlyBill] = useState(defaultMonthlyBill ? String(defaultMonthlyBill) : '');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
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
          email: email.trim(),
          serviceType,
          monthlyBill: monthlyBill ? Number(monthlyBill) : undefined,
          address: address.trim(),
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmittedSuccess(true);
        if (data.whatsappRedirectUrl) {
          setWhatsappUrl(data.whatsappRedirectUrl);
        }
        if (onSuccess) onSuccess();
      } else {
        setError(data.error || 'Something went wrong. Please call us directly.');
      }
    } catch {
      setError('Unable to reach server. Please call or WhatsApp our store directly.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submittedSuccess) {
    return (
      <div className={`p-6 sm:p-8 rounded-2xl bg-[#041d10] border border-emerald-400 text-center space-y-4 shadow-xl ${className}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white">Thank You, {name}!</h3>
          <p className="text-emerald-300 text-sm font-medium">
            Your enquiry has been received by our Ramanathapuram store team.
          </p>
        </div>

        <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
          We will review your requirements and get in touch shortly. For immediate response or rooftop scheduling, chat with us directly on WhatsApp:
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950" />
              <span>Connect on WhatsApp Now</span>
            </a>
          )}

          <a
            href={`tel:+91${COMPANY_INFO.phones[0].raw.slice(2)}`}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call: {COMPANY_INFO.phones[0].display}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {error && (
        <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-emerald-300 mb-1">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. K. Murugesan"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-300 mb-1">
            Mobile Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>
      </div>

      {/* Service Type & Monthly Bill */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-emerald-300 mb-1">
            Required Service / Division
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
          >
            <option value="Rooftop Solar Consultation">Rooftop Solar (On-grid / Hybrid)</option>
            <option value="Automobile Battery Replacement">Car / Bike / Truck Battery</option>
            <option value="Home Inverter & Tubular Battery">Home Inverter & Battery UPS</option>
            <option value="Lithium LiFePO4 Storage">Lithium LiFePO4 Battery Pack</option>
            <option value="Gulf Oil Lubricants">Gulf Oil Lubricants (Fleet/Marine)</option>
            <option value="SKF Bearings & Greases">SKF Bearings & Greases</option>
            <option value="General Store Inquiry">General Store Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-300 mb-1">
            Monthly Power Bill (₹ Approx)
          </label>
          <input
            type="number"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(e.target.value)}
            placeholder="e.g. 4500 (for solar sizing)"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>
      </div>

      {/* Location / Town */}
      <div>
        <label className="block text-xs font-semibold text-emerald-300 mb-1">
          Your Location / Town (Tamil Nadu)
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="e.g. Ramanathapuram, Paramakudi, Rameswaram, Kilakarai..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
        />
      </div>

      {/* Message / Requirement */}
      <div>
        <label className="block text-xs font-semibold text-emerald-300 mb-1">
          Specific Notes or Vehicle / Capacity Details
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your home roof space, vehicle model, or inverter backup hours..."
          className="w-full px-3.5 py-2 rounded-xl bg-[#03140a] border border-emerald-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 rounded-xl font-bold text-xs text-emerald-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 hover:from-emerald-300 hover:to-amber-200 shadow-xl shadow-emerald-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-emerald-950" />
            <span>Submitting to Store Team...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-emerald-950" />
            <span>Submit Enquiry & Request Free Survey</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        🔒 We never spam. Your details are sent directly to the NS Batteries store desk.
      </p>
    </form>
  );
}
