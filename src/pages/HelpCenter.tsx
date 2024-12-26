import React from 'react';
import SearchBar from '../components/docs/SearchBar';
import HelpCategories from '../components/help/HelpCategories';
import PopularArticles from '../components/help/PopularArticles';
import ContactSupport from '../components/help/ContactSupport';

export default function HelpCenter() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">How can we help?</h1>
          <SearchBar />
        </div>
        <HelpCategories />
        <PopularArticles />
        <ContactSupport />
      </div>
    </div>
  );
}