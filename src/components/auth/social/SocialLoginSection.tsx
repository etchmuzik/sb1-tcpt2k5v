import React from 'react';
import { Github, Mail } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import SocialButton from './SocialButton';
import { useAuth } from '../../../hooks/useAuth';

export default function SocialLoginSection() {
  const { signInWithGoogle, signInWithGithub, loading } = useAuth();

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-800"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 text-sm text-zinc-500 bg-zinc-900">or continue with</span>
        </div>
      </div>

      <div className="space-y-3">
        <SocialButton
          icon={FcGoogle}
          provider="Google"
          onClick={signInWithGoogle}
          disabled={loading}
        />
        <SocialButton
          icon={Github}
          provider="GitHub"
          onClick={signInWithGithub}
          disabled={loading}
        />
        <SocialButton
          icon={Mail}
          provider="Email"
          onClick={() => window.location.href = '/signup'}
          disabled={loading}
        />
      </div>
    </div>
  );
}