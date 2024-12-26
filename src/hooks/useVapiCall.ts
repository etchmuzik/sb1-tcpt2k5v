import { useState, useCallback, useEffect } from 'react';
import { getVapiClient } from '../lib/vapi/client';
import { useNotificationStore } from './useNotification';
import { playCallStart, playCallEnd } from '../lib/audio/sounds';

interface CallOptions {
  phoneNumber: string;
  context?: Record<string, any>;
}

export function useVapiCall() {
  const [status, setStatus] = useState<{
    id: string;
    status: 'connecting' | 'in-progress' | 'completed' | 'failed';
    duration?: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (status?.id) {
        try {
          const client = getVapiClient();
          client.removeAllListeners(`call.${status.id}.status`);
          client.removeAllListeners(`call.${status.id}.ended`);
          client.removeAllListeners(`call.${status.id}.error`);
        } catch (error) {
          console.warn('Cleanup error:', error);
        }
      }
    };
  }, [status?.id]);

  const makeCall = useCallback(async ({ phoneNumber, context }: CallOptions) => {
    setLoading(true);
    try {
      const client = getVapiClient();
      
      // Create outbound call with demo mode settings
      const call = await client.createCall({
        to: phoneNumber,
        options: {
          record: true,
          language: 'en-US',
          voice: 'nova',
          endCallOnSilence: true,
          silenceTimeoutSeconds: 5,
          demo: true
        },
        context: {
          ...context,
          type: 'sales_inquiry'
        }
      });

      if (!call?.id) {
        throw new Error('Failed to create call');
      }

      setStatus({
        id: call.id,
        status: 'connecting'
      });

      // Set up event listeners
      client.on(`call.${call.id}.status`, (update) => {
        setStatus(prev => {
          if (update.status === 'in-progress' && prev?.status !== 'in-progress') {
            playCallStart();
          }
          return prev ? {
            ...prev,
            status: update.status,
            duration: update.duration
          } : null;
        });
      });

      client.on(`call.${call.id}.ended`, () => {
        playCallEnd();
        setStatus(prev => prev ? { ...prev, status: 'completed' } : null);
        addNotification('Call completed successfully', 'success');
      });

      client.on(`call.${call.id}.error`, (error) => {
        console.error('Call error:', error);
        playCallEnd();
        setStatus(prev => prev ? { ...prev, status: 'failed' } : null);
        addNotification(error.message || 'Call failed. Please try again.', 'error');
      });

    } catch (error) {
      console.error('Call error:', error);
      playCallEnd();
      setStatus(null);
      addNotification('Failed to initiate call. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  }, [addNotification]);

  return {
    makeCall,
    status,
    loading
  };
}