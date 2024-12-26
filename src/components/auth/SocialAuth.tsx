import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

export default function SocialAuth() {
  const { signInWithGoogle, loading } = useAuth();

  return (
    <div className="space-y-4">
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-800"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 text-sm text-zinc-500 bg-zinc-900">or continue with</span>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="flex justify-center items-center px-4 py-2 border border-zinc-800 rounded-lg
            hover:border-zinc-700 transition-colors bg-black"
        >
          <FcGoogle className="h-5 w-5" />
        </button>

        <button
          disabled={loading}
          className="flex justify-center items-center px-4 py-2 border border-zinc-800 rounded-lg
            hover:border-zinc-700 transition-colors bg-black"
        >
          <FaGithub className="h-5 w-5 text-white" />
        </button>

        <button
          disabled={loading}
          className="flex justify-center items-center px-4 py-2 border border-zinc-800 rounded-lg
            hover:border-zinc-700 transition-colors bg-black"
        >
          <FaLinkedin className="h-5 w-5 text-[#0A66C2]" />
        </button>
      </div>
    </div>
  );
}