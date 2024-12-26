import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import AIChatAssistant from './AIChatAssistant';

export default function AIAssistants() {
  const [showChat, setShowChat] = React.useState(false);

  const handleVoiceCall = () => {
    window.open('https://calendly.com/beyondtech-eg/30min', '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Voice Call Assistant */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-teal/10 rounded-lg">
            <Bot className="h-6 w-6 text-teal" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">AI Voice Assistant</h3>
            <p className="text-sm text-zinc-400">Schedule a call with our AI expert</p>
          </div>
        </div>
        <Button
          variant="minimal"
          onClick={handleVoiceCall}
          className="w-full"
        >
          Schedule Call
        </Button>
      </div>

      {/* Chat Assistant */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-teal/10 rounded-lg">
            <MessageSquare className="h-6 w-6 text-teal" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">AI Chat Assistant</h3>
            <p className="text-sm text-zinc-400">Get instant answers to your questions</p>
          </div>
        </div>
        <Button
          variant="minimal"
          onClick={() => setShowChat(true)}
          className="w-full"
        >
          Start Chat
        </Button>
      </div>

      {/* Chat Interface */}
      {showChat && <AIChatAssistant onClose={() => setShowChat(false)} />}
    </div>
  );
}