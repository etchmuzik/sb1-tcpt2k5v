import React from 'react';
import AIVoiceCall from '../contact/AIVoiceCall';

export default function AIAgentButton() {
  return (
    <div className="mb-8">
      <AIVoiceCall />
      <p className="text-sm text-zinc-400 text-center mt-2">
        Speak directly with our AI agent to get instant answers about our enterprise solutions
      </p>
    </div>
  );
}