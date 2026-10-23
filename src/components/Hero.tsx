import React from 'react';
import { BookOpen, ExternalLink, Mail, CheckCircle2, MapPin } from 'lucide-react';
import { INTERN_INFO } from '../data/ojtData';

interface HeroProps {
  onScrollToBlog: () => void;
  onScrollToGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBlog, onScrollToGallery }) => {
  return (
    <section id="overview" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed Metadata Kicker (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-purple-700 dark:text-purple-400 mb-3 tracking-wide uppercase">
              <span>{INTERN_INFO.degree}</span>
              <span aria-hidden="true">·</span>
              <span>NEMSU Main Campus</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2026</span>
            </div>

            {/* Display Title with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight lg:leading-[1.15] text-balance mb-4">
              OJT Experience &amp; Internship Journal
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-purple-900/80 dark:text-purple-200/90 mb-4">
              Documenting Hands-On Technical Training, Web &amp; Graphic Design, and Hardware Maintenance
            </p>

            {/* Narrative Lead */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 max-w-2xl">
              Welcome to the official internship portfolio of <strong className="font-semibold text-slate-900 dark:text-slate-100">{INTERN_INFO.name}</strong>, 
              a Computer Science intern at <strong className="font-semibold text-slate-900 dark:text-slate-100">{INTERN_INFO.institution}</strong>. 
              This digital archive documents real-world technical training, bench-level PC diagnostics, visual digital branding, and full-stack software development.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToBlog();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Read Daily Logs</span>
              </a>

              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToGallery();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/40 border border-purple-200 dark:border-purple-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <span>Explore Photo Gallery</span>
              </a>

              <a
                href={`mailto:${INTERN_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500"
                aria-label={`Send email to ${INTERN_INFO.email}`}
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{INTERN_INFO.email}</span>
              </a>
            </div>

            {/* University & Location Markers */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/70 dark:border-slate-800/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                {INTERN_INFO.campusLocation}
              </span>
              <span aria-hidden="true">·</span>
              <span>{INTERN_INFO.department}</span>
            </div>
          </div>

          {/* Right Column: Framed Visual Container of Diosdado A. Frias */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative subtle backdrop border */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="aspect-4/5 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={INTERN_INFO.portraitImage}
                    alt={`Official portrait of ${INTERN_INFO.name}, BS Computer Science student in professional attire`}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Scrim and info footer */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display font-bold text-slate-900 dark:text-white text-base">
                        {INTERN_INFO.name}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        BS Computer Science · Intern
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/80">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>OJT Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI Metric Strip below hero split */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {INTERN_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
              <div className="font-display text-2xl sm:text-3xl font-bold text-purple-700 dark:text-purple-400 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
