import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'rounded font-medium focus:outline-none transition-all',
        baseStyles[variant],
        sizeStyles[size],
        {
          'opacity-50 cursor-not-allowed': disabled,
        }
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const baseStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
};

const sizeStyles = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};