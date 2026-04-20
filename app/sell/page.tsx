'use client';
import { useState } from 'react';
import { CheckCircle, Upload, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    description: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-slate-800/50 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all";
  const labelClass = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2";

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Header */}
      <div className="relative bg-slate-900 border-b border-white/5 py-14 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Sell</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">Sell Your Car</h1>
          <p className="text-slate-400">List your vehicle and reach thousands of buyers</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {submitted ? (
          <div className="text-center py-24">
            <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-400" size={48} />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Listing Submitted!</h2>
            <p className="text-slate-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
              Your car listing has been submitted for review. We&apos;ll notify you once it&apos;s approved and live.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20"
            >
              Submit Another Listing
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Car Details */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Sparkles size={15} className="text-blue-400" />
                </div>
                <h2 className="text-lg font-bold text-white">Car Details</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Make *</label>
                  <input type="text" name="make" required value={form.make} onChange={handleChange} placeholder="e.g. Toyota" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Model *</label>
                  <input type="text" name="model" required value={form.model} onChange={handleChange} placeholder="e.g. Camry" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Year *</label>
                  <input type="number" name="year" required value={form.year} onChange={handleChange} placeholder="e.g. 2022" min="1990" max="2025" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Mileage (miles) *</label>
                  <input type="number" name="mileage" required value={form.mileage} onChange={handleChange} placeholder="e.g. 25000" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Asking Price ($) *</label>
                  <input type="number" name="price" required value={form.price} onChange={handleChange} placeholder="e.g. 25000" className={inputClass} />
                </div>
              </div>
              <div className="mt-5">
                <label className={labelClass}>Description</label>
                <textarea
                  name="description"
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your car, condition, history, etc."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Upload size={15} className="text-violet-400" />
                </div>
                <h2 className="text-lg font-bold text-white">Photos</h2>
              </div>
              <div className="border-2 border-dashed border-white/10 hover:border-blue-500/40 rounded-2xl p-12 text-center transition-colors cursor-pointer group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/10 transition-colors">
                  <Upload className="text-slate-500 group-hover:text-blue-400 transition-colors" size={24} />
                </div>
                <p className="text-slate-400 font-medium text-sm">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-600 mt-1">PNG, JPG up to 10MB each (max 10 photos)</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <h2 className="text-lg font-bold text-white">Contact Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold py-4 rounded-xl text-base transition-all shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Submit Listing
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
