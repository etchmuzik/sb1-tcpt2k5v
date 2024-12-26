import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import AuthForm from '../components/auth/AuthForm';
import SocialAuth from '../components/auth/SocialAuth';

export default function Signup() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Get started with your free account"
      linkText="Already have an account?"
      linkHref="/login"
    >
      <AuthForm mode="signup" />
      <div className="mt-6">
        <SocialAuth />
      </div>
    </AuthLayout>
  );
}