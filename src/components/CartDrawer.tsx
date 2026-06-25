import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/utils/format';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cartItems, updateQuantity, subtotal, shipping, tax, total } = useCart();
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-stretch justify-end bg-black/40 sm:items-stretch"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-[440px] flex-col bg-ivory-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ivory-line bg-ink px-5 py-5 text-white">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">Your Selections</h3>
          <button onClick={onClose} aria-label="Close bag">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-4 flex gap-3.5 border-b border-ivory-line pb-4">
                  <img src={item.image} alt={item.name} className="h-15 w-15 rounded-sm border border-ivory-line object-cover" />
                  <div className="flex-1">
                    <h4 className="mb-1 text-sm font-semibold text-ink">{item.name}</h4>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-6.5 w-6.5 bg-[#F4F4F4] font-bold text-ink"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-[13px]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-6.5 w-6.5 bg-[#F4F4F4] font-bold text-ink"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold">{formatINR(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-ivory-line bg-ivory p-5">
              <div className="mb-4 space-y-1 text-[13px] text-[#444]">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatINR(shipping)}</span></div>
                <div className="flex justify-between"><span>Tax</span><span>{formatINR(tax)}</span></div>
                <div className="flex justify-between border-t border-ivory-line pt-2 text-sm font-bold text-ink"><span>Total</span><span>{formatINR(total)}</span></div>
              </div>
              <button
                onClick={() => { onClose(); navigate('/checkout'); }}
                className="w-full rounded-sm border border-gold bg-ink py-4 text-sm font-bold uppercase tracking-wide text-gold"
              >
                Proceed to Settlement
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center px-6 text-center text-[13px] text-[#999]">
            Your premium item bag is empty.
          </div>
        )}
      </div>
    </div>
  );
}
