import React from 'react';
import clsx from 'clsx';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  helperText,
  error,
  errorMessage,
  className,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const describedById = error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error}
        aria-describedby={describedById}
        className={clsx(
          'w-full px-3 py-2 border rounded-md shadow-sm outline-none transition',
          'text-sm bg-white dark:bg-gray-900 dark:text-white',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
          'focus:ring-1',
          props.disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && errorMessage && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500">
          {errorMessage}
        </p>
      )}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
};
