import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Calendar, Filter } from 'lucide-react';
import { BLOG_POSTS } from '../data/ojtData';
import { BlogPost, BlogCategory } from '../types';

interface BlogSectionProps {
  onOpenBlogModal: (post: BlogPost) => void;
  selectedCategory: BlogCategory;
  onSelectCategory: (cat: BlogCategory) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenBlogModal,
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: BlogCategory[] = [
    'All',
    'Hardware',
    'Graphic Design',
    'Web Development',
    'Teamwork',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.toolsUsed.some((t) => t.toLowerCase().includes(q)) ||
        post.keyLearnings.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="blog" className="py-16 lg:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-2">
              02. Activity Chronicle &amp; Daily Logs
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Interactive OJT Blog &amp; Journal Entries
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Detailed technical logs recording practical experiences in hardware diagnostics, visual graphic layout, and collaborative web systems engineering.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <label htmlFor="blog-search" className="sr-only">
              Search journal logs
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
              <input
                id="blog-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search logs or tools..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus-visible:ring-2 focus-visible:ring-purple-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl max-w-full overflow-x-auto mb-8 border border-slate-200/60 dark:border-slate-800/60">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
              No matching journal entries found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Try adjusting your search query or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onOpenBlogModal(post)}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700/60 transition-all duration-300 cursor-pointer"
              >
                {/* Image Thumbnail */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  
                  {/* Category unboxed marker overlay */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-purple-300 text-2xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  
                  {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Tools snippet */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {post.toolsUsed.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-2xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-sm"
                        >
                          {tool}
                        </span>
                      ))}
                      {post.toolsUsed.length > 3 && (
                        <span className="text-2xs text-slate-400">
                          +{post.toolsUsed.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                      <span>Read Log</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
