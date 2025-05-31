import React, { useState, useId } from 'react';

export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  required?: boolean;
}

const inputSizeMap = {
  xs: '20%',
  sm: '30%',
  md: '40%',
  lg: '100%',
};

export const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  disabled = false,
  type = 'text',
  value = '',
  onChange,
  onBlur,
  error,
  size = 'lg',
  className = '',
  icon,
  required = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const id = useId();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <div 
      style={{ width: inputSizeMap[size] }}
      className={`space-y-3 ${className}`}
    >
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
      
      <div className={`
        group relative rounded-lg flex items-center w-full overflow-hidden
        border-2 transition-all duration-300 ease-out backdrop-blur-sm
        ${error 
          ? 'border-red-400 dark:border-red-500 bg-red-50/50 dark:bg-red-900/20' 
          : isFocused 
            ? 'border-[#2A3729] dark:border-[#265143] bg-white dark:bg-[#272831] shadow-lg ring-4 ring-[#2A3729]/10 dark:ring-[#265143]/10' 
            : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-[#272831] hover:border-neutral-400 dark:hover:border-neutral-500'
        }
        ${disabled 
          ? 'opacity-60 cursor-not-allowed bg-neutral-100 dark:bg-neutral-800' 
          : 'shadow-inner hover:shadow-lg'
        }
      `}>        {icon && (
          <div className="flex items-center justify-center pl-4">
            <span className={`
              transition-colors duration-200
              ${error 
                ? 'text-red-500 dark:text-red-400' 
                : isFocused 
                  ? 'text-[#2A3729] dark:text-[#265143]' 
                  : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
              }
            `}>
              {icon}
            </span>
          </div>
        )}
        
        <input
          id={id}
          name={name}
          className={`
            w-full py-4 px-4 bg-transparent 
            text-neutral-900 dark:text-neutral-100
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            focus:text-neutral-900 dark:focus:text-neutral-50
            outline-none transition-all duration-200 font-medium
            ${icon ? 'pl-2' : ''}
            ${error ? 'text-red-700 dark:text-red-300' : ''}
          `}
          type={type === 'password' ? (visible ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={internalValue}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {type === 'password' && (
          <button 
            type="button"
            onClick={() => setVisible(!visible)} 
            className="flex items-center justify-center w-12 h-12 mr-2 rounded-lg transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#2A3729]/20 dark:focus:ring-[#265143]/20"
          >
            <span className="w-5 h-5 transition-colors duration-200 text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
              {!visible ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                </svg>
              )}
            </span>
          </button>
        )}
      </div>
      
      {error && (
        <p className="text-red-600 dark:text-red-400 text-sm mt-2 pl-2 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};