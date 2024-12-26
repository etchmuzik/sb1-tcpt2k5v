import React from 'react';
import BusinessInquiryHeader from '../components/business-inquiry/BusinessInquiryHeader';
import BusinessInquiryForm from '../components/forms/BusinessInquiryForm';
import BusinessInquirySidebar from '../components/business-inquiry/BusinessInquirySidebar';
import AIAgentButton from '../components/business-inquiry/AIAgentButton';

export default function BusinessInquiry() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BusinessInquiryHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* AI Agent Button */}
            <div className="mb-8">
              <AIAgentButton />
            </div>
            
            {/* Divider with text */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-zinc-500 bg-black">
                  or fill out the form below
                </span>
              </div>
            </div>

            <BusinessInquiryForm />
          </div>
          <div className="lg:col-span-1">
            <BusinessInquirySidebar />
          </div>
        </div>
      </div>
    </div>
  );
}