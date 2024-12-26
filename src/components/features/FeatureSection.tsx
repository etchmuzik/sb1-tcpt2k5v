import React from 'react';
import { PhoneOutgoing, Calendar, MessageSquare, Database, Bot, Shield, Globe, Zap } from 'lucide-react';
import FeatureCard from '../common/FeatureCard';

const features = [
  {
    title: 'AI-Powered Calling',
    description: 'Intelligent conversation handling with natural language processing',
    icon: Bot,
  },
  {
    title: 'Smart Scheduling',
    description: 'Automated appointment booking with calendar integration',
    icon: Calendar,
  },
  {
    title: 'Multi-Channel Support',
    description: 'Seamless communication across voice, email, and messaging',
    icon: Globe,
  },
  {
    title: 'Real-time Analytics',
    description: 'Comprehensive insights and performance tracking',
    icon: Zap,
  },
  {
    title: 'CRM Integration',
    description: 'Connect with your existing tools and workflows',
    icon: Database,
  },
  {
    title: 'Enterprise Security',
    description: 'Advanced security and compliance features',
    icon: Shield,
  },
];

export default function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} theme="dark" />
      ))}
    </div>
  );
}