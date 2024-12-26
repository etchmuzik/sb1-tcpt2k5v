import React from 'react';
import { caseStudies } from '../data/case-studies';
import CaseStudyCard from '../components/case-studies/CaseStudyCard';
import SectionHeading from '../components/common/SectionHeading';

export default function CaseStudies() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Success Stories"
          subtitle="See how businesses are transforming with Beyond AI"
          theme="dark"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
}