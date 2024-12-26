import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {isOpen ? (
        <div className="w-80 bg-black border border-zinc-800 rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            <h3 className="text-white font-semibold">Chat Support</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="icon-hover text-zinc-400"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-96 p-4 overflow-y-auto">
            {/* Chat messages would go here */}
          </div>

          <div className="p-4 border-t border-zinc-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-zinc-900 text-white rounded-lg px-3 py-2
                  border border-zinc-700 focus:border-[#00FF00] outline-none"
              />
              <button className="icon-hover text-zinc-400">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-black rounded-full shadow-lg support-button-hover"
        >
          <MessageSquare className="h-6 w-6 text-[#00FF00]" />
        </button>
      )}
    </div>
  );
}