/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { GallerySection } from './components/GallerySection';
import { TechStackSection } from './components/TechStackSection';
import { Footer } from './components/Footer';
import { BlogModal } from './components/BlogModal';
import { LightboxModal } from './components/LightboxModal';
import { BlogPost, GalleryItem, BlogCategory } from './types';
import { BLOG_POSTS, GALLERY_ITEMS, INTERN_INFO } from './data/ojtData';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  // Blog modal state
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogCategory, setBlogCategory] = useState<BlogCategory>('All');

  // Lightbox modal state
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Gallery Navigation
  const currentGalleryIndex = selectedGalleryItem
    ? GALLERY_ITEMS.findIndex((item) => item.id === selectedGalleryItem.id)
    : -1;

  const handleNextPhoto = () => {
    if (currentGalleryIndex >= 0) {
      const nextIndex = (currentGalleryIndex + 1) % GALLERY_ITEMS.length;
      setSelectedGalleryItem(GALLERY_ITEMS[nextIndex]);
    }
  };

  const handlePrevPhoto = () => {
    if (currentGalleryIndex >= 0) {
      const prevIndex = (currentGalleryIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setSelectedGalleryItem(GALLERY_ITEMS[prevIndex]);
    }
  };

  // Open Lightbox from attached image inside blog
  const handleOpenPhotoFromBlog = (imageSrc: string) => {
    const matched = GALLERY_ITEMS.find((item) => item.src === imageSrc);
    if (matched) {
      setSelectedGalleryItem(matched);
    } else {
      // Fallback custom gallery item
      setSelectedGalleryItem({
        id: 'temp-preview',
        title: selectedPost?.title || 'OJT Documentation Photo',
        src: imageSrc,
        category: (selectedPost?.category as any) || 'Hardware Repair',
        date: selectedPost?.date || 'October 2026',
        alt: `Documentation photo from ${selectedPost?.title || 'internship activity'}`,
        caption: `Activity photo attached to ${selectedPost?.title || 'OJT journal log'}`,
        details: 'Captured during on-site On-the-Job Training at NEMSU Main Campus.',
      });
    }
  };

  // Open Blog post from lightbox "Read Related Log"
  const handleOpenBlogFromLightbox = (blogId: string) => {
    const post = BLOG_POSTS.find((p) => p.id === blogId);
    if (post) {
      setSelectedGalleryItem(null);
      setSelectedPost(post);
    }
  };

  // Category switch from About section
  const handleSelectCategoryFromAbout = (category: 'Hardware' | 'Graphic Design' | 'Web Development' | 'Teamwork') => {
    setBlogCategory(category);
    const blogEl = document.getElementById('blog');
    if (blogEl) {
      blogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-body transition-colors duration-200">
      
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-purple-600 text-white rounded-md shadow-lg outline-none ring-2 ring-white font-medium text-sm"
      >
        Skip to main content
      </a>

      {/* Top Bar Contract Navbar */}
      <Navbar
        isDark={isDark}
        toggleDark={toggleDark}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToBlog={() => {
            document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onScrollToGallery={() => {
            document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* About & Core Internship Pillars */}
        <AboutSection onSelectCategory={handleSelectCategoryFromAbout} />

        {/* Interactive OJT Blog Posts & Daily Logs */}
        <BlogSection
          onOpenBlogModal={(post) => setSelectedPost(post)}
          selectedCategory={blogCategory}
          onSelectCategory={(cat) => setBlogCategory(cat)}
        />

        {/* Media Gallery / Activity Highlights with Lightbox */}
        <GallerySection
          onOpenLightbox={(item) => setSelectedGalleryItem(item)}
        />

        {/* Applied Tech Stack & Proficiencies */}
        <TechStackSection />
      </main>

      {/* Accessible Footer */}
      <Footer />

      {/* Interactive Blog Detail Modal */}
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenPhotoLightbox={handleOpenPhotoFromBlog}
      />

      {/* Fullscreen Accessible Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        currentIndex={currentGalleryIndex}
        totalCount={GALLERY_ITEMS.length}
        onReadRelatedBlog={handleOpenBlogFromLightbox}
      />
    </div>
  );
}
