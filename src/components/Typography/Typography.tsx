import React from 'react';
import clsx from 'clsx';

export type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'label' | 'caption' | 'helper';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const baseStyles: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  label: 'text-sm font-medium',
  caption: 'text-xs text-gray-500',
  helper: 'text-sm text-gray-400',
};

export const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const Component = variant === 'p' || variant === 'helper' || variant === 'caption' || variant === 'label' ? 'span' : variant;

  return (
    <Component className={clsx(baseStyles[variant], className)}>
      {children}
    </Component>
  );
};
