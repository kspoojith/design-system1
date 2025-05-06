import React, { useEffect, useRef } from 'react';
import { CheckboxProps } from './Checkbox.types';
import { Check, Minus } from 'lucide-react';
import clsx from 'clsx';

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  indeterminate = false,
  disabled = false,
  label,
  labelPosition = 'right',
  size = 'md',
  id,
  name,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={clsx('inline-flex items-center gap-2 cursor-pointer', {
      'cursor-not-allowed opacity-60': disabled,
      'flex-row-reverse': labelPosition === 'left',
    })}>
      <input
        id={id}
        name={name}
        ref={ref}
        type="checkbox"
        className={clsx(
          'peer hidden',
        )}
        checked={checked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
      />
      <span
        className={clsx(
          'flex items-center justify-center border rounded transition-colors',
          sizeStyles[size],
          {
            'bg-blue-600 border-blue-600 text-white': checked || indeterminate,
            'border-gray-400': !checked && !indeterminate,
            'bg-white': !checked && !indeterminate,
            'text-white': checked || indeterminate,
          }
        )}
      >
        {indeterminate ? <Minus size={14} /> : checked ? <Check size={14} /> : null}
      </span>
      {label && <span className="select-none text-sm">{label}</span>}
    </label>
  );
};

const sizeStyles = {
  sm: 'w-4 h-4 text-xs',
  md: 'w-5 h-5 text-sm',
  lg: 'w-6 h-6 text-base',
};
