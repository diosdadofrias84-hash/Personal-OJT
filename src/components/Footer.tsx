import React from 'react';
import { ArrowUp, Mail, ExternalLink, GraduationCap } from 'lucide-react';
import { INTERN_INFO } from '../data/ojtData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Intern Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-display font-bold text-sm">
                DF
              </span>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                {INTERN_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              On-the-Job Training Portfolio &amp; Internship Journal for {INTERN_INFO.degree} at {INTERN_INFO.institution}.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <a
                href={`mailto:${INTERN_INFO.email}`}
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors underline-offset-2 hover:underline"
              >
                {INTERN_INFO.email}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#overview" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Overview &amp; Student Profile
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Core Training Pillars
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Daily Journal &amp; Activity Logs
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Media Gallery &amp; Photographic Proof
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Applied Tech Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Student Contact
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              For academic verifications, project inquiries, or technical collaborations, reach out directly via email.
            </p>
            <div>
              <a
                href={`mailto:${INTERN_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-2xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Diosdado</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Diosdado A. Frias. All rights reserved. North Eastern Mindanao State University (NEMSU).
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>OJT Status: Active &amp; Documented</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
