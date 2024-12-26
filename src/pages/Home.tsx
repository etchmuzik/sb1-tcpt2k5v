import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AgencyWorkflow from '../components/agency/AgencyWorkflow';
import IntegrationsShowcase from '../components/integrations/IntegrationsShowcase';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Meetings from '../components/Meetings';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AgencyWorkflow />
      <IntegrationsShowcase />
      <HowItWorks />
      <Testimonials />
      <Meetings />
      <CallToAction />
    </>
  );
}