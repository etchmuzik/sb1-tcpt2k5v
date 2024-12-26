import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send } from 'lucide-react';
import Button from '../common/Button';
import FormField from './form/FormField';
import ServiceSelect from './form/ServiceSelect';
import BudgetSelect from './form/BudgetSelect';
import { useNotificationStore } from '../../hooks/useNotification';

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectDescription: string;
  timeline: string;
  budget: string;
  services: string[];
  additionalInfo: string;
}

const initialFormData: FormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  projectDescription: '',
  timeline: '',
  budget: '',
  services: [],
  additionalInfo: ''
};

export default function QuoteForm() {
  const location = useLocation();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      addNotification('Quote request submitted successfully!', 'success');
      setFormData(initialFormData);
    } catch (error) {
      addNotification('Failed to submit request. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <FormField
        label="Project Description"
        name="projectDescription"
        type="textarea"
        value={formData.projectDescription}
        onChange={handleChange}
        required
        minLength={100}
        placeholder="Please provide detailed information about your project requirements..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Expected Timeline"
          name="timeline"
          type="date"
          value={formData.timeline}
          onChange={handleChange}
          required
        />
        <BudgetSelect
          value={formData.budget}
          onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
        />
      </div>

      <ServiceSelect
        selected={formData.services}
        onChange={(services) => setFormData(prev => ({ ...prev, services }))}
      />

      <FormField
        label="Additional Information"
        name="additionalInfo"
        type="textarea"
        value={formData.additionalInfo}
        onChange={handleChange}
        placeholder="Any other details you'd like to share..."
      />

      <div className="text-sm text-zinc-400 bg-zinc-900/50 p-4 rounded-lg">
        By submitting this form, you agree to our Privacy Policy and consent to the processing of your information.
      </div>

      <Button
        type="submit"
        variant="primary"
        icon={Send}
        disabled={loading}
        className="w-full md:w-auto"
      >
        {loading ? 'Submitting...' : 'Request Quote'}
      </Button>
    </form>
  );
}