import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const testimonials = [
  {
    name: 'David Miller',
    role: 'Sales Director, TechCorp',
    content: 'Our sales team saves hours every day with this AI Assistant!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    name: 'Emily Chen',
    role: 'CEO, GrowthX',
    content: "It's like having an extra employee who never takes a break.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Clients Say" theme="dark" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black p-8 rounded-lg border border-zinc-800">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-zinc-400 text-lg italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}