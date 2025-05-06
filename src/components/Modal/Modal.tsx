import React, { useEffect, useRef } from 'react';
import { ModalProps } from './Modal.types';
import { X } from 'lucide-react';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showClose = true,
  actions,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const previousFocus = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      return () => previousFocus?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={`bg-white rounded-lg shadow-lg w-full max-w-${sizeMap[size]} p-6 relative focus:outline-none`}
        tabIndex={-1}
      >
        {showClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        )}
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <div className="mb-4">{children}</div>
        {actions && <div className="flex justify-end gap-2">{actions}</div>}
      </div>
    </div>
  );
};

const sizeMap = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};
