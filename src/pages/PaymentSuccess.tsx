import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../components/common/Button';
import { useNotificationStore } from '../hooks/useNotification';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    addNotification('Payment successful! Welcome aboard.', 'success');
  }, [addNotification]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 
            rounded-full bg-teal/10 mb-8">
            <Check className="h-8 w-8 text-teal" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-zinc-400 mb-8">
            Thank you for subscribing. Your account has been activated and you can now 
            access all features.
          </p>

          <div className="space-y-4">
            <Button
              variant="minimal"
              className="w-full"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate('/settings')}
            >
              Configure Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}