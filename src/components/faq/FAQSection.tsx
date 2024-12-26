import React from 'react';
import FAQItem from './FAQItem';
import { FAQSection as FAQSectionType } from '../../data/faq';

export default function FAQSection({ title, questions }: FAQSectionType) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <FAQItem key={index} {...question} />
        ))}
      </div>
    </div>
  );
}