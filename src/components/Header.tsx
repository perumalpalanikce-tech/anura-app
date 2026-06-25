import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/contact', label: 'Contact' },
];

export default function Header({ onCartClick, searchQuery, onSearchChange }: HeaderProps) {
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    onSearchChange(value);
    navigate('/collections');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-soft bg-ink px-4 py-3.5 text-white sm:px-10 sm:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex flex-col items-start">
          <img
            src="https://pub-ffa3ad4198b746aa88d918af2625c508.r2.dev/anura%20black%20logo.jpeg"
            alt="Anura by Anjana"
            className="mb-0.5 h-5 w-auto object-contain sm:h-6"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex items-center gap-1.5">
            <h1 className="font-display text-base font-medium tracking-[0.2em] text-white sm:text-lg">ANURA</h1>
            <span className="text-[8px] font-medium uppercase tracking-wide text-gold sm:text-[9px]">By Anjana</span>
          </div>
        </Link>

        <nav className="hidden gap-8 text-xs uppercase tracking-widest sm:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `border-b pb-1 transition-colors ${
                  isActive ? 'border-gold text-gold' : 'border-transparent text-[#AEAEB2] hover:text-gold'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search treasury..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="hidden w-44 rounded-sm border border-ink-line bg-ink-soft px-3 py-2 text-[13px] text-white outline-none placeholder:text-[#8E8E93] sm:block"
          />
          <button onClick={onCartClick} className="relative p-1 text-gold" aria-label="Open shopping bag">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-ink">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* mobile sub-nav */}
      <nav className="-mx-4 mt-3 flex justify-center gap-7 border-t border-ink-line pt-3 text-[11px] uppercase tracking-wide sm:hidden">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'font-semibold text-gold' : 'text-[#8E8E93]')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}