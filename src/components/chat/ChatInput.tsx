import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useChatStore } from '../../hooks/useChat';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const { addMessage } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage(message, 'user');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}