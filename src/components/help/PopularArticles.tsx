import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { popularArticles } from '../../data/help/articles';

export default function PopularArticles() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-6">Popular Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {popularArticles.map((article) => (
          <Link
            key={article.id}
            to={`/help/articles/${article.id}`}
            className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-teal transition-colors"
          >
            <div className="p-2 bg-teal/10 rounded-lg">
              <FileText className="h-5 w-5 text-teal" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
              <p className="text-zinc-400 text-sm mb-2">{article.excerpt}</p>
              <div className="text-sm text-zinc-500">{article.views.toLocaleString()} views</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}