import React, { useEffect, useRef } from 'react';

export interface DialogProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  preventClose?: boolean;
  className?: string;
  action1Text?: string;
  action1Function?: () => void;
  action1Variant?: 'primary' | 'secondary' | 'danger';
  action2Text?: string;
  action2Function?: () => void;
  action2Variant?: 'primary' | 'secondary' | 'danger';
}

const sizeMap = {
  sm: 'sm:w-[420px] w-[95%]',
  md: 'sm:w-[640px] w-[95%]',
  lg: 'sm:w-[880px] w-[95%]',
  xl: 'sm:w-[1200px] w-[95%]',
  full: 'w-[95%]'
};

const buttonVariants = {
  primary: 'bg-[#2A3729] hover:bg-[#061717] text-white',
  secondary: 'bg-white hover:bg-neutral-50 text-[#2A3729] border border-[#2A3729]',
  danger: 'bg-red-600 hover:bg-red-700 text-white'
};

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  preventClose = false,
  className = '',
  action1Text,
  action1Function,
  action1Variant = 'secondary',
  action2Text,
  action2Function,
  action2Variant = 'primary'
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (preventClose || !onClose) return;
    const rect = dialogRef.current?.getBoundingClientRect();
    if (rect && (
      e.clientX < rect.left || 
      e.clientX > rect.right ||
      e.clientY < rect.top || 
      e.clientY > rect.bottom
    )) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      className={`
        fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        max-w-full max-h-[90vh] rounded-lg
        backdrop:bg-black/50 backdrop:backdrop-blur-sm
        transition-all duration-300 shadow-xl
        border border-neutral-200/50 dark:border-neutral-700/50
        bg-white/95 dark:bg-[#272831]/95 backdrop-blur-sm
        ${sizeMap[size]}
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        ${className}
      `}
    >      <div className="flex flex-col max-h-[90vh] relative">
        {(title || onClose) && (
          <div className="sticky z-10 -top-1 left-0 right-0 px-8 py-6 border-b border-neutral-200/50 dark:border-neutral-700/50 flex items-center justify-between rounded-t-lg bg-white/90 dark:bg-[#272831]/90 backdrop-blur-sm">
            {title && <h2 className="text-2xl font-bold text-[#2A3729] dark:text-white tracking-tight">{title}</h2>}
            {onClose && !preventClose && (
              <button
                onClick={onClose}
                className="p-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-all duration-200 focus:outline-none hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="p-8 overflow-y-auto flex-grow text-neutral-700 dark:text-neutral-300">
          {children}
        </div>

        {(action1Text || action2Text) && (
          <div className="px-8 py-6 border-t border-neutral-200/50 dark:border-neutral-700/50 flex justify-end space-x-4 bg-neutral-50/50 dark:bg-neutral-800/50 rounded-b-lg backdrop-blur-sm">
            {action1Text && action1Function && (
              <button 
                onClick={action1Function} 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${buttonVariants[action1Variant]}`}
              >
                {action1Text}
              </button>
            )}
            {action2Text && action2Function && (
              <button 
                onClick={action2Function} 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${buttonVariants[action2Variant]}`}
              >
                {action2Text}
              </button>
            )}
          </div>
        )}
      </div>
    </dialog>
  );
};