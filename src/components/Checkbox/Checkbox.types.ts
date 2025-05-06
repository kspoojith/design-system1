export interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    indeterminate?: boolean;
    disabled?: boolean;
    label?: string;
    labelPosition?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    id?: string;
    name?: string;
  }
  