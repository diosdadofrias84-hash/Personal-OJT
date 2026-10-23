import React, { useState } from 'react';
import { Terminal, Layout, Cpu, Layers } from 'lucide-react';
import { TECH_SKILLS } from '../data/ojtData';

export const TechStackSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Programming' | 'Design' | 'Hardware' | 'Tools'>('All');

  const categories: ('All' | 'Programming' | 'Design' | 'Hardware' | 'Tools')[] = [
    'All',
    'Programming',
    'Design',
    'Hardware',
    'Tools',
  ];

  const filteredSkills = filter === 'All' ? TECH_SKILLS : TECH_SKILLS.filter((s) => s.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Programming':
        return <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Design':
        return <Layout className="w-4 h-4 text-pink-600 dark:text-pink-400" />;
      case 'Hardware':
        return <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="tech-stack" className="py-16 lg:py-20 bg-slate-100/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-2">
              04. Technical Competencies &amp; Tooling
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Applied Tech Stack &amp; Hardware Proficiencies
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Industry tools, programming languages, creative design suites, and physical bench equipment utilized throughout the On-the-Job Training program.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  filter === cat
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Badges & Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-purple-300 dark:hover:border-purple-700/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(skill.category)}
                    <span className="text-2xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-2xs font-medium px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {skill.proficiency}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-2xs text-purple-700 dark:text-purple-400 font-medium">
                <span>Hands-on OJT Verified</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
