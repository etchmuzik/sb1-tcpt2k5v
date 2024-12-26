import React from 'react';
import { openPositions } from '../data/careers';
import JobCard from '../components/careers/JobCard';
import CareerBenefits from '../components/careers/CareerBenefits';
import SectionHeading from '../components/common/SectionHeading';

export default function Careers() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Join Our Team"
          subtitle="Help shape the future of AI automation"
          theme="dark"
        />
        <CareerBenefits />
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <JobCard key={position.id} {...position} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}