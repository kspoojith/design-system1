import React from 'react';
import { DatePickerProps } from './DatePicker.types';
import { format } from 'date-fns';

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, disabled = false }) => {
  return (
    <input
      type="date"
      value={value ? format(new Date(value), 'yyyy-MM-dd') : ''}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
    />
  );
};
