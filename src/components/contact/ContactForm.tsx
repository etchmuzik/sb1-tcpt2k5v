import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../common/Button';
import { useNotificationStore } from '../../hooks/useNotification';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  message: ''
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      addNotification('Message sent successfully!', 'success');
      setFormData(initialFormData);
    } catch (error) {
      addNotification('Failed to send message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-zinc-400 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white 
              focus:outline-none focus:border-teal transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white 
              focus:outline-none focus:border-teal transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white 
              focus:outline-none focus:border-teal transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white 
            focus:outline-none focus:border-teal transition-colors"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        icon={Send}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}