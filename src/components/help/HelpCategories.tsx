import React from 'react';
import { Link } from 'react-router-dom';
import { helpCategories } from '../../data/help/categories';

export default function HelpCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {helpCategories.map((category) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.id}
            to={`/help/${category.id}`}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-teal transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal/10 rounded-lg">
                <Icon className="h-5 w-5 text-teal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                <span className="text-sm text-zinc-400">{category.articles} articles</span>
              </div>
            </div>
            <p className="text-zinc-400">{category.description}</p>
          </Link>
        );
      })}
    </div>
  );
}