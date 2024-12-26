import React from 'react';
import { BookOpen, FileText, Video, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: BookOpen,
    link: '/docs',
  },
  {
    title: 'Case Studies',
    description: 'Real success stories from our clients',
    icon: FileText,
    link: '/case-studies',
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step guides and best practices',
    icon: Video,
    link: '/tutorials',
  },
  {
    title: 'Downloads',
    description: 'Tools, templates, and resources',
    icon: Download,
    link: '/downloads',
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Resources
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to succeed with Beyond AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.title}
                to={resource.link}
                className="group bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 dark:bg-blue-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional sections can be added here */}
      </div>
    </div>
  );
}