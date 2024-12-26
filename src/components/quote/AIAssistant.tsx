import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import Button from '../common/Button';

export default function AIAssistant() {
  const handleAIChat = () => {
    // In a real app, this would open the AI chat interface
    console.log('Opening AI chat...');
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-teal/10 rounded-lg">
          <Bot className="h-6 w-6 text-teal" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">AI Quote Assistant</h3>
          <p className="text-sm text-zinc-400">Get instant quotes and answers to your questions</p>
        </div>
      </div>
      <Button
        variant="secondary"
        icon={MessageSquare}
        onClick={handleAIChat}
        className="w-full"
      >
        Chat with AI Assistant
      </Button>
    </div>
  );
}