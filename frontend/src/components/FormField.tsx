'use client';

import { ChangeEvent } from 'react';

interface Props {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

export function FormField({ id, label, value, placeholder, onChange, type = 'text', required = false }: Props) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
