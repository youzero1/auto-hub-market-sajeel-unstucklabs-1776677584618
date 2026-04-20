'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cars', label: 'Browse Cars' },
    { href: '/blog', label: 'Blog' },
    { href: '/sell', label: 'Sell Your Car' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-blue-600 font-extrabold text-xl">
            <Car size={28} />
            <span>AutoMarket</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/sell" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
              List a Car
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href="/sell" className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-center text-sm">
                List a Car
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
