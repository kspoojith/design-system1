export interface ToastProps {
  title: string;
  description: string;
  status: 'info' | 'success' | 'error' | 'warning';
  onClose: () => void;
} 