import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import AuthForm from '../components/auth/AuthForm';
import SocialAuth from '../components/auth/SocialAuth';

export default function Login() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
      linkText="Don't have an account?"
      linkHref="/signup"
    >
      <AuthForm mode="login" />
      <div className="mt-6">
        <SocialAuth />
      </div>
    </AuthLayout>
  );
}