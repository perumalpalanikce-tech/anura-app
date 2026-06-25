import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/utils/format';
import { PaymentForm } from '@/types';

export default function Checkout() {
  const { cartItems, subtotal, shipping, tax, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<PaymentForm>({
    cardNumber: '4242 4242 4242 4242',
    expiry: '12/28',
    cvc: '123',
    name: '',
    email: '',
  });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearCart();
      navigate('/order-confirmed');
    }, 1800);
  };

  if (cartItems.length === 0) {
    return (
      <div className="px-4 py-20 text-center">
        <p className="text-sm text-muted">Your bag is empty — add something beautiful first.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-0">
      <div className="overflow-hidden rounded-xl border border-ivory-line bg-ivory-card shadow-lg">
        <div className="bg-ink px-6 py-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">Secure Gateway Encryption</h3>
        </div>
        <form onSubmit={handlePayment} className="p-6">
          <label className="mb-1.5 block text-xs font-semibold">Cardholder Full Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Doe"
            className="mb-4 w-full rounded-sm border border-ivory-line px-3 py-3 text-sm outline-none"
          />

          <label className="mb-1.5 block text-xs font-semibold">Email Address</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@example.com"
            className="mb-5 w-full rounded-sm border border-ivory-line px-3 py-3 text-sm outline-none"
          />

          <div className="mb-6 rounded-sm border border-ivory-line bg-ivory p-4">
            <span className="mb-1.5 block text-[11px] font-bold text-gold">CARD DETAILS (DEMO MODE — NO REAL PAYMENT)</span>
            <div className="font-mono text-sm font-bold">{form.cardNumber}</div>
            <div className="mt-1.5 flex gap-5 font-mono text-xs text-[#666]">
              <span>EXP: {form.expiry}</span><span>CVC: {form.cvc}</span>
            </div>
          </div>

          <div className="mb-6 border-t border-ivory-line pt-4">
            <div className="space-y-1 text-[13px] text-[#444]">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatINR(shipping)}</span></div>
              <div className="flex justify-between"><span>Tax</span><span>{formatINR(tax)}</span></div>
              <div className="flex justify-between text-sm font-bold text-ink"><span>Total</span><span>{formatINR(total)}</span></div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md border border-gold bg-ink py-4 text-sm font-bold uppercase tracking-wide text-gold disabled:opacity-60"
          >
            {loading ? 'Authorizing…' : 'Authorize Transaction'}
          </button>
        </form>
      </div>
    </div>
  );
}
