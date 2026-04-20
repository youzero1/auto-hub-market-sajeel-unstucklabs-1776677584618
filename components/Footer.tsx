import Link from 'next/link';
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-xl mb-4">
              <Car size={28} className="text-blue-400" />
              <span>AutoMarket</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              The leading car marketplace connecting buyers and sellers across the country. Find your dream car today.
            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/cars', label: 'Browse Cars' },
                { href: '/sell', label: 'Sell Your Car' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Types */}
          <div>
            <h3 className="text-white font-bold mb-4">Browse by Type</h3>
            <ul className="space-y-2 text-sm">
              {['Sedans', 'SUVs', 'Trucks', 'Sports Cars', 'Electric', 'Luxury'].map((type) => (
                <li key={type}>
                  <Link href={`/cars?category=${type.toLowerCase()}`} className="hover:text-white transition-colors">
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 support@automarket.com</li>
              <li>📞 1-800-AUTO-MKT</li>
              <li>📍 123 Motor Ave, Detroit, MI</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2024 AutoMarket. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
