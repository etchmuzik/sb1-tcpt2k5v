import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent("Hello! I'd like to learn more about your services.");
    window.open(`https://wa.me/971581232600?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-teal rounded-full shadow-lg 
        hover:bg-teal-hover transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </button>
  );
}