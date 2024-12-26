import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import Button from '../common/Button';

interface AIChatAssistantProps {
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  options?: string[];
}

const welcomeMessage: Message = {
  id: '1',
  text: "👋 Hi! I'm your Beyond AI Assistant.\n\nI can help you:\n\n" +
    "• Explore our AI automation solutions\n" +
    "• Get custom pricing information\n" +
    "• Schedule a consultation\n" +
    "• Learn about integrations\n" +
    "• Understand implementation process\n\n" +
    "What would you like to know about?",
  sender: 'assistant',
  timestamp: new Date(),
  options: [
    'Automation Solutions',
    'Custom Pricing',
    'Schedule Demo',
    'Implementation Process'
  ]
};

export default function AIChatAssistant({ onClose }: AIChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand you're interested in learning more. Let me help you with that. Would you like to schedule a consultation with one of our experts?",
        sender: 'assistant',
        timestamp: new Date(),
        options: ['Schedule Consultation', 'Learn More', 'Talk to Sales']
      };

      setMessages(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);
  };

  const handleQuickReply = (option: string) => {
    handleSend(option);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 p-6 max-w-2xl w-full mx-4 h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal/10 rounded-lg">
              <Bot className="h-6 w-6 text-teal" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Beyond AI Assistant</h3>
              <p className="text-sm text-zinc-400">Your automation solutions expert</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-zinc-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-6 p-4 bg-black rounded-lg border border-zinc-800">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user' 
                      ? 'bg-teal text-black' 
                      : 'bg-zinc-800 text-white'
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <span className="text-xs opacity-75 mt-1 block">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                {msg.options && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {msg.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleQuickReply(option)}
                        className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 
                          rounded-full text-sm transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 text-white rounded-lg p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputMessage);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white
              focus:outline-none focus:border-teal transition-colors"
          />
          <Button
            type="submit"
            variant="minimal"
            icon={Send}
            disabled={loading || !inputMessage.trim()}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}