import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ExternalLink, GraduationCap } from 'lucide-react';
import { INTERN_INFO } from '../data/ojtData';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Daily Logs', href: '#blog' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Tech Stack', href: '#tech-stack' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-white dark:bg-slate-950 border-slate-200/50 dark:border-slate-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="#overview"
            className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-lg tracking-tight whitespace-nowrap shrink-0 group focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
          >
            <span className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-display font-bold text-sm shadow-xs group-hover:bg-purple-700 transition-colors">
              DF
            </span>
            <span className="font-display">Diosdado A. Frias</span>
          </a>

          {/* Zone 2: 4-5 Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleDark}
              type="button"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={`mailto:${INTERN_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              <span>Contact Intern</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <div className="px-2 pb-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-purple-600 dark:text-purple-400">NEMSU BSCS</span> · On-the-Job Training Journal
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href={`mailto:${INTERN_INFO.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-xs"
              >
                <span>Contact: {INTERN_INFO.email}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
