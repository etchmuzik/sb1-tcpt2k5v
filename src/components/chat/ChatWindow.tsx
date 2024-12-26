import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../../hooks/useChat';

export default function ChatWindow() {
  const { messages } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-[400px] overflow-y-auto p-4 bg-white dark:bg-zinc-900 rounded-lg">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 ${
            message.sender === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <div
            className={`inline-block p-3 rounded-lg ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-zinc-100 dark:bg-zinc-800 dark:text-white'
            }`}
          >
            <p>{message.text}</p>
            <span className="text-xs opacity-75">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}