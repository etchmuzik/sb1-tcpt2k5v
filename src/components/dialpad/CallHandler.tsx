import React from 'react';
import { Phone } from 'lucide-react';
import { useVapiCall } from '../../hooks/useVapiCall';

interface CallHandlerProps {
  phoneNumber: string;
  onCallStart?: () => void;
  onCallEnd?: () => void;
}

export default function CallHandler({ 
  phoneNumber, 
  onCallStart, 
  onCallEnd 
}: CallHandlerProps) {
  const { makeCall, status, loading } = useVapiCall();

  const handleCall = async () => {
    if (!phoneNumber) return;
    
    onCallStart?.();
    await makeCall({ phoneNumber });
  };

  React.useEffect(() => {
    if (status?.status === 'completed') {
      onCallEnd?.();
    }
  }, [status, onCallEnd]);

  return (
    <button
      onClick={handleCall}
      disabled={loading || !phoneNumber}
      className="flex items-center justify-center p-4 rounded-lg
        bg-white text-black hover:bg-black hover:text-white
        border border-white transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
}