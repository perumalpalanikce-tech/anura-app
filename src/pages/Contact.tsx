import React, { useState } from 'react';
import { ContactForm } from '@/types';

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-normal text-ink">Bespoke Consultation</h2>
        <p className="mt-2 text-sm text-[#666]">Connect with our private showroom division in Kerala, India.</p>
      </div>

      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex-[1.2] rounded-lg border border-ivory-line bg-ivory-card p-6 sm:p-8">
          <h3 className="mb-5 text-lg font-semibold text-ink">Request Showroom Appointment</h3>
          <form onSubmit={handleSubmit}>
            <label className="mb-1.5 block text-xs font-semibold">Your Name *</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mb-4 w-full rounded-sm border border-[#D1C4B5] px-3 py-3 outline-none" placeholder="Enter your name" />

            <label className="mb-1.5 block text-xs font-semibold">Email Address *</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mb-4 w-full rounded-sm border border-[#D1C4B5] px-3 py-3 outline-none" placeholder="name@domain.com" />

            <label className="mb-1.5 block text-xs font-semibold">Contact Phone *</label>
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mb-4 w-full rounded-sm border border-[#D1C4B5] px-3 py-3 outline-none" placeholder="+91 XXXX" />

            <label className="mb-1.5 block text-xs font-semibold">Bespoke Requirements</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mb-6 w-full rounded-sm border border-[#D1C4B5] px-3 py-3 outline-none" placeholder="Describe what you have in mind..." />

            <button type="submit" className="w-full rounded-sm border border-gold bg-ink py-3.5 text-sm font-bold uppercase tracking-wide text-gold">
              Submit Request
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-center text-sm font-semibold text-gold">✓ Request registered — we'll be in touch shortly.</p>
          )}
        </div>

        <div className="flex-1 rounded-lg border border-ink-line bg-ink p-6 text-white">
          <h4 className="mb-3 text-[15px] tracking-wide text-gold">ANURA FLAGSHIP SHOWROOM</h4>
          <p className="mb-4 text-sm leading-relaxed text-[#E5E5EA]">
            Anura Couture Hub,<br />
            MG Road Retail Arcade,<br />
            Kochi, Kerala – 682016<br />
            India
          </p>
          <div className="space-y-1.5 text-[13px] text-[#AEAEB2]">
            <div>📞 +91 484 239 4000</div>
            <div>✉️ support@anurabyanjana.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
