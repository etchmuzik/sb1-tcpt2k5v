import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { JobPosition } from '../../data/careers';

export default function JobCard({
  id,
  title,
  department,
  location,
  type,
  description,
  requirements
}: JobPosition) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-teal transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>{department}</span>
            <span>•</span>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {type}
            </div>
          </div>
        </div>
      </div>

      <p className="text-zinc-400 mb-4">{description}</p>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-white mb-2">Requirements:</h4>
        <ul className="list-disc list-inside text-zinc-400">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <Link
        to={`/careers/${id}`}
        className="inline-flex items-center text-teal hover:text-teal-hover transition-colors"
      >
        <span className="mr-2">View Position</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}