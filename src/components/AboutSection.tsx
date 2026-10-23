import React from 'react';
import { Cpu, Palette, Code, Check, ShieldCheck, Laptop, Wrench, Users } from 'lucide-react';
import { INTERN_INFO } from '../data/ojtData';

interface AboutSectionProps {
  onSelectCategory: (category: 'Hardware' | 'Graphic Design' | 'Web Development' | 'Teamwork') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectCategory }) => {
  const pillars = [
    {
      title: 'PC Hardware Maintenance & Assembly',
      icon: Cpu,
      categoryKey: 'Hardware' as const,
      description:
        'Hands-on troubleshooting, component bench testing, ATX power supply diagnostics, memory testing, heatsink thermal paste application, and workstation reassembly.',
      tasks: [
        'Diagnosed and eliminated hardware boot faults and RAM beep loops',
        'Refurbished workstation chassis with clean cable management and airflow design',
        'Conducted component stress testing and thermal paste replacements',
        'Configured BIOS/UEFI settings and automated OS deployment drives'
      ],
      tagline: 'Physical Silicon & Systems Reliability'
    },
    {
      title: 'Web Layout & Graphic Design',
      icon: Palette,
      categoryKey: 'Graphic Design' as const,
      description:
        'Translating institutional branding and e-commerce visual needs into polished graphic banners, product visual layouts, and responsive web mockups in Photoshop and Canva.',
      tasks: [
        'Crafted multi-panel product visual arrangements with precise typography',
        'Engineered accessible color schemes respecting WCAG AA contrast',
        'Optimized raster assets into WebP and SVG for rapid web delivery',
        'Designed social promotional materials and university event assets'
      ],
      tagline: 'Visual Hierarchy & Digital Aesthetics'
    },
    {
      title: 'Software & Web Systems Development',
      icon: Code,
      categoryKey: 'Web Development' as const,
      description:
        'Writing maintainable frontend and backend code in VS Code, performing pair programming, verifying API endpoints, and implementing secure user input validation.',
      tasks: [
        'Developed modular React and PHP web interfaces with clean state flows',
        'Resolved cross-browser viewport bugs and mobile layout shifts',
        'Implemented secure form handlers with sanitization and validation',
        'Participated in peer code reviews and version control commits'
      ],
      tagline: 'Full-Stack Logic & Accessible Engineering'
    }
  ];

  return (
    <section id="pillars" className="py-16 lg:py-20 bg-slate-100/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-2">
            01. Internship Profile &amp; Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            About the Intern &amp; Training Focus
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            As a graduating Computer Science student at <span className="font-semibold text-slate-900 dark:text-white">NEMSU - Main Campus</span>, 
            my On-the-Job Training has bridged the gap between academic computer theory and high-standard workplace execution. 
            From bench-level circuit and cable diagnostics to full-stack web platforms and digital asset design, my training spans three fundamental pillars.
          </p>
        </div>

        {/* 3 Core Specialization Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-purple-300 dark:hover:border-purple-700/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">
                  {pillar.tagline}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="mt-auto">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Hands-On Training Activities:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {pillar.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onSelectCategory(pillar.categoryKey)}
                    className="w-full py-2 px-3 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 rounded-lg transition-colors border border-purple-200/60 dark:border-purple-800/40 focus-visible:ring-2 focus-visible:ring-purple-500"
                  >
                    View {pillar.categoryKey} Logs &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institution & Training Context Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Accredited Academic Requirement</span>
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              North Eastern Mindanao State University (NEMSU) Internship Program
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Supervised under the College of Information Technology Education (CITE) industry partnership guidelines.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300 shrink-0">
            <span className="flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-purple-600" />
              IT &amp; Dev Workstation
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-purple-600" />
              Hardware Bench
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-purple-600" />
              Agile Standups
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
