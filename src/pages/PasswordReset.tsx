import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Button from '../components/common/Button';
import { useNotificationStore } from '../hooks/useNotification';

export default function PasswordReset() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, call your password reset API
      await new Promise(resolve => setTimeout(resolve, 1000));
      addNotification('Password reset instructions sent to your email.', 'success');
      setEmail('');
    } catch (error) {
      addNotification('Failed to send reset instructions. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white text-center">Reset Password</h2>
          <p className="mt-2 text-center text-zinc-400">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-zinc-500" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 bg-zinc-900 border border-zinc-800 rounded-lg 
                  px-3 py-2 text-white placeholder-zinc-500 focus:outline-none 
                  focus:border-teal transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="minimal"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Instructions'}
          </Button>
        </form>
      </div>
    </div>
  );
}