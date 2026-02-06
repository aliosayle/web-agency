import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
