import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useOutlet } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Job Seekers', path: '/job-seekers' },
  { name: 'Employers', path: '/employers' },
  { name: 'Services', path: '/services' },
  { name: 'Locations', path: '/locations' },
  { name: 'Why PPS', path: '/why-pps' },
  { name: 'Resources', path: '/blog' },
];

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-navy bg-light selection:bg-orange/20 selection:text-navy">
      {/* Main Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-gray-100 ${
          scrolled ? 'py-4 shadow-sm' : 'py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 bg-navy text-white">
                <span className="font-bold text-lg tracking-tighter">PPS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold leading-none tracking-tight text-navy">Pacesetter</h1>
                <span className="text-[10px] font-medium uppercase tracking-widest text-gray-500">Personnel Services</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center xl:gap-8 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-orange whitespace-nowrap ${
                    location.pathname === link.path 
                      ? 'text-orange' 
                      : 'text-navy/80 hover:text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center xl:gap-6 gap-4 shrink-0">
              <Link 
                to="/contact" 
                className="text-sm font-medium transition-colors hover:text-orange text-navy"
              >
                Contact
              </Link>
              <Link to="/employers">
                <Button variant="primary" size="sm" className="whitespace-nowrap">Hire Talent</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden text-navy"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-medium tracking-tight ${
                      location.pathname === link.path ? 'text-orange' : 'text-navy'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-gray-100 my-4" />
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium tracking-tight text-navy">Contact</Link>
                <Link to="/employers" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                  <Button variant="primary" className="w-full h-14 text-lg">Hire Talent</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow flex flex-col"
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-xl tracking-tighter">PPS</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white leading-none tracking-tight">Pacesetter</h2>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Personnel Services</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                Elevating the standard of industrial staffing in Dallas-Fort Worth since 1994. Safety, reliability, and excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-navy transition-all">
                  <span className="text-sm font-medium">in</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Company</h3>
              <ul className="space-y-4">
                {['About', 'Services', 'Locations', 'Why PPS', 'Resources'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                      {item}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Services</h3>
              <ul className="space-y-4">
                {['Construction', 'Warehouse', 'Manufacturing', 'Skilled Trades'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Contact</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li>1234 Staffing Blvd, Suite 100<br />Dallas, TX 75201</li>
                <li><a href="tel:8005551234" className="hover:text-white transition-colors">(800) 555-1234</a></li>
                <li><a href="mailto:info@pacesetterpersonnel.com" className="hover:text-white transition-colors break-all">info@pacesetterpersonnel.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Pacesetter Personnel Services. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
