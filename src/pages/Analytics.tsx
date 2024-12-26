import React from 'react';
import { Phone, Clock, Calendar, Users, TrendingUp } from 'lucide-react';
import CallMetrics from '../components/analytics/CallMetrics';
import TimelineChart from '../components/analytics/TimelineChart';
import LeadTable from '../components/analytics/LeadTable';
import MetricCard from '../components/analytics/MetricCard';

export default function Analytics() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          <div className="flex gap-4">
            <select className="bg-zinc-900 text-white border border-zinc-800 rounded-lg px-4 py-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Calls"
            value="1,234"
            change="+12.3%"
            icon={Phone}
            trend="up"
          />
          <MetricCard
            title="Avg. Call Duration"
            value="4m 32s"
            change="-2.1%"
            icon={Clock}
            trend="down"
          />
          <MetricCard
            title="Meetings Booked"
            value="89"
            change="+8.7%"
            icon={Calendar}
            trend="up"
          />
          <MetricCard
            title="Lead Conversion"
            value="23.4%"
            change="+5.2%"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        {/* Call Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Call Performance</h2>
            <TimelineChart />
          </div>
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Call Metrics</h2>
            <CallMetrics />
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Leads</h2>
            <button className="text-zinc-400 hover:text-white transition-colors">
              View All
            </button>
          </div>
          <LeadTable />
        </div>
      </div>
    </div>
  );
}