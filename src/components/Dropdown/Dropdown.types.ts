export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  onChange: (value: string) => void;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
}
