import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoMarket — Buy & Sell Premium Cars',
  description: 'The most modern car marketplace to buy and sell vehicles. Browse thousands of listings and read our expert car blogs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 font-sans antialiased">{children}</body>
    </html>
  );
}
