import React, { useState, useEffect } from 'react';
import { Phone, Mic, X } from 'lucide-react';
import Button from '../common/Button';
import { useVapiCall } from '../../hooks/useVapiCall';
import { useNotificationStore } from '../../hooks/useNotification';
import { formatDuration } from '../../utils/time';

export default function AIVoiceCall() {
  const [showDialog, setShowDialog] = useState(false);
  const [duration, setDuration] = useState(0);
  const { makeCall, status, loading } = useVapiCall();
  const { addNotification } = useNotificationStore();

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (status?.status === 'in-progress') {
      timer = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    } else if (status?.status === 'completed' || status?.status === 'failed') {
      clearInterval(timer);
      setDuration(0);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [status?.status]);

  const handleStartCall = async () => {
    try {
      await makeCall({
        phoneNumber: '+12058405196', // Demo phone number
        context: {
          type: 'sales_inquiry',
          role: 'sales_agent',
          company: 'Beyond AI',
          location: 'Dubai'
        }
      });
      setShowDialog(true);
    } catch (error) {
      console.error('Call error:', error);
      addNotification('Failed to start call. Please try again.', 'error');
    }
  };

  const handleEndCall = () => {
    setShowDialog(false);
    setDuration(0);
  };

  return (
    <>
      <Button
        variant="primary"
        icon={Phone}
        onClick={handleStartCall}
        disabled={loading || status?.status === 'in-progress'}
        className="w-full"
      >
        {loading ? 'Connecting...' : 'Talk to an AI Agent'}
      </Button>

      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 max-w-md w-full">
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-light mb-4">
                  <Mic className={`h-8 w-8 text-teal ${
                    status?.status === 'in-progress' ? 'animate-pulse' : ''
                  }`} />
                </div>
                
                <div className="text-2xl font-bold text-white mb-2 font-mono">
                  {formatDuration(duration)}
                </div>

                <p className="text-zinc-400">
                  {status?.status === 'connecting' && 'Connecting...'}
                  {status?.status === 'in-progress' && 'Call in progress'}
                  {status?.status === 'completed' && 'Call ended'}
                  {status?.status === 'failed' && 'Call failed'}
                </p>
              </div>

              <Button
                variant="secondary"
                icon={X}
                onClick={handleEndCall}
                disabled={status?.status === 'in-progress'}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}