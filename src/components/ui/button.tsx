import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'primary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'px-4 py-2 rounded-md font-medium transition-colors',
        variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'ghost' && 'hover:bg-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}); 