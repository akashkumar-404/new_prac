import React, { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, error, ...rest }) => (
  <div>
    <label htmlFor={rest.id}>{label}</label>
    <input {...rest} />
    {error && <span className="error">{error}</span>}
  </div>
);

export default FormInput;
