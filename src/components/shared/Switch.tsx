import React, { useState } from 'react';

export interface SwitchProps {
  name: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  reverse?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  name,
  label,
  disabled = false,
  checked = false,
  onChange,
  className = '',
  reverse = false
}) => {
  const [internalChecked, setInternalChecked] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      const newValue = !internalChecked;
      setInternalChecked(newValue);
      onChange?.(newValue);
    }
  };
  return (
    <div className={`flex flex-col ${reverse ? 'items-end' : 'items-start'} ${className}`}>
      {label && (
        <label className="font-medium text-[#2A3729] dark:text-neutral-300 mb-2 text-sm">
          {label}
        </label>
      )}
      
      <div
        onClick={handleToggle}
        className={`
          w-12 h-6 relative rounded-full cursor-pointer transition-all duration-200 shadow-md
          ${disabled 
            ? "bg-neutral-300 cursor-not-allowed" 
            : internalChecked 
              ? "bg-[#2A3729] dark:bg-[#265143] shadow-lg" 
              : "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-500"
          }
        `}
      >
        <span
          className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full 
            transition-all duration-200 shadow-sm
            ${internalChecked ? "translate-x-6" : "translate-x-0"}
          `}
        />
      </div>
    </div>
  );
};