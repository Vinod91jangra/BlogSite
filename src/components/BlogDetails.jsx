import React from 'react';

export default function BlogDetails({ post }) {
  if (!post) return null;
  return (
    <div className="p-8 rounded-3xl shadow-glass bg-glass-gradient backdrop-blur-md border border-white/20 animate-fadeIn mt-8">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 animate-slideUp">
        {post.title}
      </h2>
      <p className="mb-2 text-white/80">
        By <span className="italic font-semibold text-accent">{post.author}</span> on {post.date}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags && post.tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 rounded-lg bg-gradient-to-r from-primary to-secondary text-xs font-bold text-white shadow">
            #{tag}
          </span>
        ))}
      </div>
      <div className="text-lg text-white/90 leading-relaxed">
        {post.content}
      </div>
    </div>
  );
}
