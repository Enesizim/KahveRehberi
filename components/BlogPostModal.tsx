import React, { useEffect } from 'react';
import type { BlogPost } from '../types';

interface BlogPostModalProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-post-title"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-4 right-4 bg-stone-100/80 rounded-full p-2 hover:bg-stone-200 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="p-8 pt-16">
          <h2 id="blog-post-title" className="text-3xl font-bold text-stone-900 mb-4">{post.title}</h2>
          <div className="flex items-center text-sm text-stone-500 mb-6">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <div className="prose max-w-none text-stone-700 whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostModal;