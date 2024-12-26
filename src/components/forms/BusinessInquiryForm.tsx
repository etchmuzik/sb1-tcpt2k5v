import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../common/Button';
import FormField from './FormField';
import ServiceCheckboxes from './ServiceCheckboxes';
import BudgetSelect from './BudgetSelect';
import ContactPreferences from './ContactPreferences';
import { useNotificationStore } from '../../hooks/useNotification';

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectDescription: string;
  deadline: string;
  budget: string;
  services: string[];
  contactMethod: 'email' | 'phone' | 'whatsapp';
  bestTimeToContact: string;
  referralSource: string;
  additionalComments: string;
}

const initialFormData: FormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  projectDescription: '',
  deadline: '',
  budget: '',
  services: [],
  contactMethod: 'email',
  bestTimeToContact: '',
  referralSource: '',
  additionalComments: ''
};

export default function BusinessInquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      addNotification('Quote request submitted successfully!', 'success');
      setFormData(initialFormData);
    } catch (error) {
      addNotification('Failed to submit request. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
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

      {/* Project Details */}
      <div>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Desired Timeline/Deadline"
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
        <BudgetSelect
          value={formData.budget}
          onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
        />
      </div>

      {/* Services and Contact Preferences */}
      <ServiceCheckboxes
        selected={formData.services}
        onChange={(services) => setFormData(prev => ({ ...prev, services }))}
      />

      <ContactPreferences
        contactMethod={formData.contactMethod}
        bestTimeToContact={formData.bestTimeToContact}
        onChange={(preferences) => setFormData(prev => ({ ...prev, ...preferences }))}
      />

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="How did you hear about us?"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
        />
        <FormField
          label="Additional Comments"
          name="additionalComments"
          type="textarea"
          value={formData.additionalComments}
          onChange={handleChange}
          placeholder="Any additional information or specific requirements..."
        />
      </div>

      {/* Privacy Notice */}
      <div className="text-sm text-zinc-400 bg-zinc-900/50 p-4 rounded-lg">
        By submitting this form, you agree to our Privacy Policy and consent to the processing of your information. 
        We'll only use your details to respond to your inquiry and provide relevant information about our services.
      </div>

      {/* Submit Button */}
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