import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import Button from '../common/Button';

export default function ContactSupport() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
        <p className="text-zinc-400">Our support team is here to help you 24/7</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal/10 rounded-lg">
              <MessageCircle className="h-6 w-6 text-teal" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
          <p className="text-zinc-400 mb-4">Chat with our support team</p>
          <Button variant="outline" icon={MessageCircle}>Start Chat</Button>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal/10 rounded-lg">
              <Mail className="h-6 w-6 text-teal" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
          <p className="text-zinc-400 mb-4">Get help via email</p>
          <Button variant="outline" icon={Mail}>Send Email</Button>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal/10 rounded-lg">
              <Phone className="h-6 w-6 text-teal" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
          <p className="text-zinc-400 mb-4">Talk to a support agent</p>
          <Button variant="outline" icon={Phone}>Call Support</Button>
        </div>
      </div>
    </div>
  );
}