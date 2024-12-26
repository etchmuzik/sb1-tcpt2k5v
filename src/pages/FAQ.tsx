import React from 'react';
import FAQHeader from '../components/faq/FAQHeader';
import FAQSection from '../components/faq/FAQSection';
import FAQSearch from '../components/faq/FAQSearch';
import { faqData } from '../data/faq';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredFAQs = faqData.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.questions.some(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQHeader />
        <FAQSearch value={searchQuery} onChange={setSearchQuery} />
        
        <div className="mt-12 space-y-12">
          {filteredFAQs.map((section) => (
            <FAQSection key={section.id} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}