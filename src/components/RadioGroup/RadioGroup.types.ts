export interface RadioOption {
    label: string;
    value: string;
    description?: string;
    disabled?: boolean;
  }
  
  export interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    value: string;
    onChange: (val: string) => void;
    disabled?: boolean;
    layout?: 'vertical' | 'horizontal';
    size?: 'sm' | 'md' | 'lg';
  }
  