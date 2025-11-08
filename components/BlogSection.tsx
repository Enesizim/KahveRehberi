import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';
import BlogPostModal from './BlogPostModal';

const BlogPostCard: React.FC<{ post: BlogPost; onReadMore: () => void }> = ({ post, onReadMore }) => (
  <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-stone-900 mb-2 h-14">{post.title}</h3>
      <p className="text-stone-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
      <div className="flex justify-between items-center text-xs text-stone-500 border-t pt-3">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
      <button onClick={onReadMore} className="inline-block mt-4 bg-amber-800 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-amber-900 transition-colors self-start">
        Devamını Oku
      </button>
    </div>
  </article>
);


const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Kahve Dünyasından Yazılar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <BlogPostCard key={post.id} post={post} onReadMore={() => setSelectedPost(post)} />
        ))}
      </div>
      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

export default BlogSection;