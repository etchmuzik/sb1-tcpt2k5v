import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
        <div className="space-y-4">
          <a href="tel:+971581232600" className="flex items-center text-zinc-400 hover:text-[#47bda4] transition-colors">
            <Phone className="h-5 w-5 mr-3 text-[#47bda4]" />
            +971 581232600
          </a>
          <a href="mailto:contact@example.com" className="flex items-center text-zinc-400 hover:text-[#47bda4] transition-colors">
            <Mail className="h-5 w-5 mr-3 text-[#47bda4]" />
            contact@example.com
          </a>
          <div className="flex items-center text-zinc-400">
            <MapPin className="h-5 w-5 mr-3 text-[#47bda4]" />
            Dubai, UAE
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
        <div className="space-y-2 text-zinc-400">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 text-[#47bda4]" />
            <div>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
        <SocialLinks />
      </div>
    </div>
  );
}