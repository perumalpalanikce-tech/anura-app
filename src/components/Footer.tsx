import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink-soft bg-ink px-4 py-10 text-center text-[13px] text-[#AEAEB2]">
      <p className="mb-2 tracking-widest text-white">ANURA BY ANJANA</p>
      <p className="mb-4 text-[11px] text-gold">Premium Certified Couture Guild • Kerala, India</p>
      <p className="opacity-50">© {new Date().getFullYear()} Anura Registry. All Rights Reserved.</p>
    </footer>
  );
}
