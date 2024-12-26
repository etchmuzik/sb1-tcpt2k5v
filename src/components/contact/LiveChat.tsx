import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {isOpen ? (
        <div className="w-80 bg-black border border-zinc-800 rounded-lg shadow-xl">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            <div>
              <h3 className="text-white font-semibold">Live Chat</h3>
              <div className="flex items-center text-sm">
                <span className="h-2 w-2 bg-teal rounded-full mr-2"></span>
                <span className="text-zinc-400">Online - Ready to help</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-teal">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat content */}
          <div className="h-96 p-4 overflow-y-auto">
            {/* Chat messages would go here */}
          </div>

          {/* Chat input */}
          <div className="p-4 border-t border-zinc-800">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white 
                focus:outline-none focus:border-teal"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-teal rounded-full shadow-lg hover:bg-teal-hover transition-colors"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </button>
      )}
    </div>
  );
}