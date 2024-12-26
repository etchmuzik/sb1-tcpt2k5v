import React from 'react';
import { Phone, Calendar, X } from 'lucide-react';

const leads = [
  {
    name: 'John Smith',
    phone: '+1 234 567 8900',
    status: 'Connected',
    duration: '4:32',
    date: '2024-03-15'
  },
  {
    name: 'Sarah Johnson',
    phone: '+1 234 567 8901',
    status: 'No Answer',
    duration: '-',
    date: '2024-03-15'
  },
  {
    name: 'Michael Brown',
    phone: '+1 234 567 8902',
    status: 'Connected',
    duration: '3:45',
    date: '2024-03-14'
  }
];

export default function LeadTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-zinc-400 border-b border-zinc-800">
            <th className="pb-4">Name</th>
            <th className="pb-4">Phone</th>
            <th className="pb-4">Status</th>
            <th className="pb-4">Duration</th>
            <th className="pb-4">Date</th>
            <th className="pb-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.phone} className="border-b border-zinc-800">
              <td className="py-4 text-white">{lead.name}</td>
              <td className="py-4 text-zinc-400">{lead.phone}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  lead.status === 'Connected' ? 'bg-emerald-500/20 text-emerald-500' :
                  lead.status === 'No Answer' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-red-500/20 text-red-500'
                }`}>
                  {lead.status}
                </span>
              </td>
              <td className="py-4 text-zinc-400">{lead.duration}</td>
              <td className="py-4 text-zinc-400">{lead.date}</td>
              <td className="py-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-zinc-800 rounded">
                    <Phone className="h-4 w-4 text-zinc-400" />
                  </button>
                  <button className="p-1 hover:bg-zinc-800 rounded">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}