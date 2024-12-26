import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../../common/Button';
import ContactFormField from './ContactFormField';
import ServiceSelect from './ServiceSelect';
import BudgetSelect from './BudgetSelect';
import TimelineSelect from './TimelineSelect';
import { useNotificationStore } from '../../../hooks/useNotification';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  services: string[];
  budget: string;
  timeline: string;
  projectDescription: string;
  existingTools: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  services: [],
  budget: '',
  timeline: '',
  projectDescription: '',
  existingTools: '',
  additionalInfo: ''
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      addNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactFormField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
        />
        
        <ContactFormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
        />
        
        <ContactFormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+971 58 123 4567"
        />
        
        <ContactFormField
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          placeholder="Your Company Name"
        />

        <ContactFormField
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Your Role"
        />
      </div>

      {/* Project Requirements */}
      <ServiceSelect
        selected={formData.services}
        onChange={(services) => setFormData(prev => ({ ...prev, services }))}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BudgetSelect
          value={formData.budget}
          onChange={(budget) => setFormData(prev => ({ ...prev, budget }))}
        />
        
        <TimelineSelect
          value={formData.timeline}
          onChange={(timeline) => setFormData(prev => ({ ...prev, timeline }))}
        />
      </div>

      <ContactFormField
        label="Project Description"
        name="projectDescription"
        type="textarea"
        value={formData.projectDescription}
        onChange={handleChange}
        required
        placeholder="Please describe your project requirements and objectives..."
      />

      <ContactFormField
        label="Existing Tools & Systems"
        name="existingTools"
        type="textarea"
        value={formData.existingTools}
        onChange={handleChange}
        placeholder="List any existing tools, CRM, or systems you're using..."
      />

      <ContactFormField
        label="Additional Information"
        name="additionalInfo"
        type="textarea"
        value={formData.additionalInfo}
        onChange={handleChange}
        placeholder="Any other details you'd like to share..."
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          We'll get back to you within 24-48 hours
        </p>
        <Button
          type="submit"
          variant="minimal"
          icon={Send}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}