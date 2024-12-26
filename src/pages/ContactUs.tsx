import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

export default function ContactUs() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="We'd love to hear from you"
          theme="dark"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-zinc-400">
                  <Phone className="h-5 w-5 mr-3" />
                  <a href="tel:+971581232600" className="hover:text-white transition-colors">
                    +971 581232600
                  </a>
                </div>
                <div className="flex items-center text-zinc-400">
                  <Mail className="h-5 w-5 mr-3" />
                  <a href="mailto:hesham@beyondmngmt.com" className="hover:text-white transition-colors">
                    hesham@beyondmngmt.com
                  </a>
                </div>
                <div className="flex items-center text-zinc-400">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-zinc-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-zinc-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-zinc-700"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-2 rounded-lg hover:bg-zinc-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}