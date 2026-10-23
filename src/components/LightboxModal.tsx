import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Info, BookOpen } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
  onReadRelatedBlog?: (blogId: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
  onReadRelatedBlog,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with count & close */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950/60 text-white">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
            <span className="font-semibold text-purple-400">{item.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-sm bg-slate-800 text-purple-300 border border-purple-900/50">
              <Calendar className="w-3 h-3 text-purple-400" aria-hidden="true" />
              <span>{item.date}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums text-slate-400">
              {currentIndex + 1} of {totalCount}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Close photo preview (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image viewer with navigation buttons */}
        <div className="relative w-full bg-black/60 flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[65vh] object-contain select-none"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Controls */}
          {totalCount > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus-visible:ring-2 focus-visible:ring-purple-400"
                aria-label="Previous photo (Left arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus-visible:ring-2 focus-visible:ring-purple-400"
                aria-label="Next photo (Right arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Technical Details */}
        <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 text-white space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {item.title}
            </h3>
            <span className="text-xs text-slate-400 flex items-center gap-1 shrink-0">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{item.date}</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {item.caption}
          </p>

          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-normal">
            <strong className="text-slate-200">Activity Context:</strong> {item.details}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="text-2xs text-slate-500">
              <strong className="text-slate-400">Accessibility Alt Text:</strong> {item.alt}
            </div>

            {item.relatedBlogId && onReadRelatedBlog && (
              <button
                type="button"
                onClick={() => onReadRelatedBlog(item.relatedBlogId!)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/80 hover:bg-purple-900 border border-purple-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 ml-auto shrink-0"
              >
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Read Full Journal Log</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
