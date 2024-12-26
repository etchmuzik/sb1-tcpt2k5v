import React from 'react';
import { aboutContent } from '../data/about';
import TeamMember from '../components/about/TeamMember';
import Stats from '../components/about/Stats';
import Vision from '../components/about/Vision';
import SectionHeading from '../components/common/SectionHeading';

export default function About() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Beyond AI"
          subtitle="Revolutionizing Business Communication"
          theme="dark"
        />

        <Vision />
        
        <div className="my-24">
          <Stats stats={aboutContent.stats} />
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}