import React, { useState } from 'react';
import { DropdownProps, DropdownOption } from './Dropdown.types';
import { ChevronDown } from 'lucide-react';

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  placeholder = 'Select an option',
  disabled = false,
  error,
  onChange,
  value,
  size = 'md',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: DropdownOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full mb-6 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}

      <button
        type="button"
        className={`
          w-full flex justify-between items-center border rounded-md bg-white text-left transition
          ${error ? 'border-red-500' : 'border-gray-300'} 
          ${size === 'sm' ? 'text-sm px-3 py-1.5' : size === 'lg' ? 'text-lg px-4 py-3' : 'px-3 py-2'}
        `}
        onClick={toggleDropdown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? '' : 'text-gray-400'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <ul
          className="absolute left-0 right-0 mt-1 max-h-60 overflow-auto border border-gray-300 rounded-md bg-white shadow-lg z-50"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};
