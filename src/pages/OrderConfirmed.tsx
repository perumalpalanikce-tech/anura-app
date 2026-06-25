import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderConfirmed() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-gold bg-ivory-card p-10 text-center">
        <div className="mx-auto mb-3.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ink text-lg font-bold text-gold">
          ✓
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-ink">Acquisition Complete</h3>
        <p className="mb-6 text-[13px] leading-relaxed text-[#444]">
          Your transaction with Anura by Anjana completed successfully.
        </p>
        <Link to="/collections" className="text-sm font-semibold text-gold">Continue browsing →</Link>
      </div>
    </div>
  );
}
