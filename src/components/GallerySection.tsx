import React, { useState, useMemo } from 'react';
import { Maximize2, Tag, Calendar, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/ojtData';
import { GalleryItem, GalleryCategory } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [selectedMonth, setSelectedMonth] = useState<'All' | 'August' | 'September'>('All');

  const categories: GalleryCategory[] = [
    'All',
    'Hardware Repair',
    'Design & Layout',
    'Web & Coding',
    'Team & Workspace',
  ];

  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesMonth =
        selectedMonth === 'All' || item.date.toLowerCase().includes(selectedMonth.toLowerCase());
      return matchesCategory && matchesMonth;
    });
  }, [selectedCategory, selectedMonth]);

  const augustCount = useMemo(
    () => GALLERY_ITEMS.filter((i) => i.date.includes('August')).length,
    []
  );
  const septemberCount = useMemo(
    () => GALLERY_ITEMS.filter((i) => i.date.includes('September')).length,
    []
  );

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-slate-100/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-2">
              03. Photographic Evidence &amp; Visual Archive
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Hands-On Activity Media Gallery
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              A curated photographic record of authentic internship activities—from PC disassembly and screwdriving power supplies to pair programming, graphic layout composition, and cohort team collaboration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Month Filter Selector */}
            <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <button
                type="button"
                onClick={() => setSelectedMonth('All')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  selectedMonth === 'All'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                All Months ({GALLERY_ITEMS.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedMonth('August')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  selectedMonth === 'August'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                August ({augustCount})
              </button>
              <button
                type="button"
                onClick={() => setSelectedMonth('September')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  selectedMonth === 'September'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                September ({septemberCount})
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters (Functional Buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl max-w-full overflow-x-auto mb-8 border border-slate-200 dark:border-slate-800 shadow-2xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  isActive
                    ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0 || index === 7;
            const isAugust = item.date.includes('August');
            return (
              <figure
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700/60 transition-all duration-300 cursor-pointer ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with Prominent Inside Date Badge */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-200 dark:bg-slate-800 ${
                    isFeatured ? 'aspect-16/10' : 'aspect-4/3'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Left: Category Badge Inside Image */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-xs text-purple-300 text-2xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                    {item.category}
                  </div>

                  {/* Top Right: Date Badge Inside Image (Side of Image) */}
                  <div className="absolute top-3 right-12 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-xs border border-white/10 text-white text-xs font-semibold shadow-sm">
                    <Calendar className={`w-3.5 h-3.5 ${isAugust ? 'text-amber-400' : 'text-purple-400'}`} aria-hidden="true" />
                    <span className="tabular-nums tracking-tight">{item.date}</span>
                  </div>

                  {/* Expand Icon Button on Side Inside Image */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(item);
                    }}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-950/85 hover:bg-purple-600 text-white transition-colors border border-white/10 focus-visible:ring-2 focus-visible:ring-purple-400 shadow-sm"
                    aria-label={`Enlarge photo: ${item.title}`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Bottom Image Overlay Description */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-2xs text-purple-200 mb-1">
                      <span className="font-semibold text-white">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-purple-300" aria-hidden="true" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-white tracking-tight leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Caption Footer */}
                <figcaption className="p-4 flex flex-col justify-between flex-1">
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-2 leading-relaxed">
                    {item.caption}
                  </p>
                  <div className="flex items-center justify-between text-2xs text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-400">
                      <Calendar className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      <span>{item.date}</span>
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:underline shrink-0">
                      View High-Res
                    </span>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

      </div>
    </section>
  );
};
