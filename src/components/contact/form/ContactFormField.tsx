import React from 'react';

interface ContactFormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

export default function ContactFormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  error
}: ContactFormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-zinc-400 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white
            placeholder-zinc-600 focus:outline-none focus:border-teal transition-colors"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white
            placeholder-zinc-600 focus:outline-none focus:border-teal transition-colors"
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}