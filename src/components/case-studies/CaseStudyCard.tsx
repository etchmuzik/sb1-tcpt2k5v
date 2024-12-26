import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  id: string;
  title: string;
  company: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
}

export default function CaseStudyCard({ 
  id, 
  title, 
  company, 
  description, 
  metrics, 
  image 
}: CaseStudyCardProps) {
  return (
    <Link 
      to={`/case-studies/${id}`}
      className="block bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-teal transition-colors"
    >
      <img 
        src={image} 
        alt={company} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-sm text-zinc-400">{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center text-teal">
          <span className="mr-2">Read Case Study</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}