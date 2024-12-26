import React from 'react';
import Hero from '../components/blog/Hero';
import Features from '../components/blog/Features';
import Benefits from '../components/blog/Benefits';
import Pricing from '../components/blog/Pricing';
import WorkflowSection from '../components/blog/WorkflowSection';
import Testimonials from '../components/blog/Testimonials';
import FAQ from '../components/blog/FAQ';
import CTASection from '../components/blog/CTASection';

export default function Blog() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <WorkflowSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
}