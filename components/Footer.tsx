import Link from 'next/link';
import { Zap, Github, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Auto<span className="text-gradient">Market</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              The leading car marketplace connecting buyers and sellers. Find your dream car today.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/cars', label: 'Browse Cars' },
                { href: '/sell', label: 'Sell Your Car' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-slate-200 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Types */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Browse by Type</h3>
            <ul className="space-y-3 text-sm">
              {['Sedans', 'SUVs', 'Trucks', 'Sports Cars', 'Electric', 'Luxury'].map((type) => (
                <li key={type}>
                  <Link href={`/cars?category=${type.toLowerCase()}`} className="text-slate-500 hover:text-slate-200 transition-colors">
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-slate-300 transition-colors">support@automarket.com</li>
              <li className="hover:text-slate-300 transition-colors">1-800-AUTO-MKT</li>
              <li className="hover:text-slate-300 transition-colors">123 Motor Ave, Detroit, MI</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2024 AutoMarket. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
