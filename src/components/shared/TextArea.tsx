import React, { useState, useId } from 'react';

export interface TextAreaProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  rows?: number;
  className?: string;
  required?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  placeholder,
  disabled = false,
  value = '',
  onChange,
  onBlur,
  error,
  rows = 4,
  className = '',
  required = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };
  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className={`
            block font-semibold text-sm tracking-wide transition-colors duration-200
            ${isFocused 
              ? 'text-[#2A3729] dark:text-[#265143]' 
              : 'text-neutral-700 dark:text-neutral-300'
            }
            ${error ? 'text-red-600 dark:text-red-500' : ''}
          `}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative w-full">
        <textarea
          id={id}
          name={name}
          rows={rows}
          className={`
            w-full py-3 px-4 border-2 rounded-lg bg-white dark:bg-[#272831]
            text-neutral-800 dark:text-neutral-100
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            outline-none transition-all duration-200 ease-in-out
            ${isFocused 
              ? 'border-[#2A3729] dark:border-[#265143] shadow-lg ring-4 ring-[#2A3729]/10 dark:ring-[#265143]/10' 
              : 'border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500'
            }
            ${error ? 'border-red-400 dark:border-red-500' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50 dark:bg-neutral-800' : ''}
            resize-y
          `}
          placeholder={placeholder}
          value={internalValue}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      
      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm mt-1 pl-1 font-medium">{error}</p>
      )}
    </div>
  );
};