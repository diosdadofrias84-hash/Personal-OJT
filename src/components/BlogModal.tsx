import React, { useEffect } from 'react';
import { X, Calendar, Clock, Wrench, CheckCircle, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenPhotoLightbox?: (imageSrc: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onOpenPhotoLightbox }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-post-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Photo */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on cover scrim */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-medium text-purple-300 mb-1">
              <span>{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 id="modal-post-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Narrative Content */}
          <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
            {post.fullContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Learnings */}
          <div className="p-5 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50">
            <h3 className="flex items-center gap-2 text-sm font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wider mb-3">
              <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Key Learnings &amp; Core Takeaways</span>
            </h3>
            <ul className="space-y-2">
              {post.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 shrink-0" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Equipment Used */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>Tools &amp; Environments Utilized</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Attached Gallery Evidence */}
          {post.galleryImages && post.galleryImages.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Hands-On Photographic Evidence ({post.galleryImages.length})</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {post.galleryImages.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onOpenPhotoLightbox && onOpenPhotoLightbox(imgSrc)}
                    className="relative aspect-4/3 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group focus-visible:ring-2 focus-visible:ring-purple-500"
                    title="Click to view high-resolution photo"
                  >
                    <img
                      src={imgSrc}
                      alt={`OJT activity documentation photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white text-xs font-medium px-2 py-1 rounded-sm bg-black/60">
                        View Full Photo
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 sm:py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Intern: <strong className="text-slate-700 dark:text-slate-300">Diosdado A. Frias</strong> · NEMSU Main Campus
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            Close Entry
          </button>
        </div>
      </div>
    </div>
  );
};
