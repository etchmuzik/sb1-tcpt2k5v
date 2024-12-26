import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../common/Button';
import FormField from './form/FormField';
import ServiceCheckboxes from './form/ServiceCheckboxes';
import BudgetSelect from './form/BudgetSelect';
import ContactPreferences from './form/ContactPreferences';
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
  planId?: string;
  planName?: string;
  billingInterval?: 'month' | 'year';
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
  const location = useLocation();
  const { planId, planName, interval } = location.state || {};
  
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    planId,
    planName,
    billingInterval: interval
  });
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      addNotification('Quote request submitted successfully! Our team will contact you shortly.', 'success');
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
      {planId && (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
          <p className="text-zinc-400">
            Requesting quote for: <span className="text-white">{planName}</span>
            {interval && <span className="text-zinc-400"> ({interval}ly billing)</span>}
          </p>
        </div>
      )}

      {/* Rest of the form remains the same */}
      {/* ... existing form fields ... */}
    </form>
  );
}