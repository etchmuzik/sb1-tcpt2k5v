import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/date';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  image: string;
}

export default function BlogPostCard({
  id,
  title,
  excerpt,
  author,
  date,
  category,
  image
}: BlogPostCardProps) {
  return (
    <Link 
      to={`/blog/${id}`}
      className="block bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-teal transition-colors"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-teal mb-2">{category}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{excerpt}</p>
        <div className="flex items-center">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <div className="text-sm text-white">{author.name}</div>
            <div className="text-xs text-zinc-400">{formatDate(date)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}