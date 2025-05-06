import React from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';

export interface ToastProps {
  title: string;
  description: string;
  status: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

const typeStyles: Record<string, string> = {
  success: 'bg-green-100 text-green-800 border-green-300',
  error: 'bg-red-100 text-red-800 border-red-300',
  info: 'bg-blue-100 text-blue-800 border-blue-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
};

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  status = 'info',
  onClose,
}) => {
  return (
    <div
      className={clsx(
        'w-full max-w-sm border rounded-md shadow-lg p-4 flex items-start gap-4 animate-fade-in-up',
        typeStyles[status]
      )}
      role="alert"
    >
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
      <button
        onClick={onClose}
        className="mt-1 text-inherit hover:text-black focus:outline-none"
        aria-label="Close toast"
      >
        <X size={16} />
      </button>
    </div>
  );
};
