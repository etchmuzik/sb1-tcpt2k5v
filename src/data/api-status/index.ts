import { TrendingUp, Clock, Server } from 'lucide-react';

export type ServiceStatus = 'operational' | 'degraded' | 'down';

export interface Service {
  name: string;
  status: ServiceStatus;
}

export const services: Service[] = [
  { name: 'API', status: 'operational' },
  { name: 'Dashboard', status: 'operational' },
  { name: 'Authentication', status: 'operational' },
  { name: 'Database', status: 'operational' }
];

export interface Metric {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative' | 'neutral';
}

export const metrics: Metric[] = [
  {
    icon: TrendingUp,
    label: 'Success Rate',
    value: '99.99%',
    trend: '+0.01%',
    trendType: 'positive'
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: '45ms',
    trend: '-5ms',
    trendType: 'positive'
  },
  {
    icon: Server,
    label: 'Uptime',
    value: '99.99%',
    trend: '30 days',
    trendType: 'neutral'
  }
];

export interface Incident {
  id: number;
  date: string;
  title: string;
  status: 'resolved' | 'ongoing';
  duration: string;
  description: string;
}

export const incidents: Incident[] = [
  {
    id: 1,
    date: '2024-03-15',
    title: 'API Performance Degradation',
    status: 'resolved',
    duration: '23 minutes',
    description: 'Temporary latency increase in API responses. Issue was identified and resolved.'
  },
  {
    id: 2,
    date: '2024-03-10',
    title: 'Database Maintenance',
    status: 'resolved',
    duration: '45 minutes',
    description: 'Scheduled maintenance to optimize database performance.'
  }
];