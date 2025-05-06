import { ReactNode } from 'react';

export interface TabItem {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  initialActive?: number;
}