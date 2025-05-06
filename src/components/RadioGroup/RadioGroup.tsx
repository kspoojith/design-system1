import React from 'react';
import { RadioGroupProps } from './RadioGroup.types';
import clsx from 'clsx';

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  disabled = false,
  layout = 'vertical',
  size = 'md',
}) => {
  return (
    <div
      role="radiogroup"
      className={clsx('flex', {
        'flex-col gap-2': layout === 'vertical',
        'flex-row gap-4': layout === 'horizontal',
      })}
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          className={clsx('flex items-center gap-2 cursor-pointer', {
            'cursor-not-allowed opacity-60': disabled || opt.disabled,
          })}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            disabled={disabled || opt.disabled}
            onChange={() => onChange(opt.value)}
            className="peer hidden"
          />
          <span
            className={clsx(
              'w-4 h-4 rounded-full border flex items-center justify-center',
              sizeMap[size],
              {
                'border-gray-400': value !== opt.value,
                'border-blue-600': value === opt.value,
              }
            )}
          >
            {value === opt.value && <span className="w-2 h-2 bg-blue-600 rounded-full" />}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-tight">{opt.label}</span>
            {opt.description && (
              <span className="text-xs text-gray-500">{opt.description}</span>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

const sizeMap = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};