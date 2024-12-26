import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useNotificationStore } from './useNotification';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleAuthError = (error: any) => {
    const message = error?.message || 'Authentication failed';
    addNotification(message, 'error');
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      if (error) throw error;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signInWithGithub = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      if (error) throw error;
    } catch (error) {
      handleAuthError(error);
    }
  };

  return {
    signInWithGoogle,
    signInWithGithub,
    loading
  };
}