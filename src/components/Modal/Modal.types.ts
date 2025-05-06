import { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  actions?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showClose?: boolean;
}