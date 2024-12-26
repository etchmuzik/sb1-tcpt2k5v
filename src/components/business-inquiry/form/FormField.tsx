import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  minLength?: number;
  placeholder?: string;
}

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  minLength,
  placeholder
}: FormFieldProps) {
  const inputClasses = `
    w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white
    focus:outline-none focus:border-teal transition-colors
  `;

  return (
    <div>
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
          minLength={minLength}
          placeholder={placeholder}
          rows={4}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
}