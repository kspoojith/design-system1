import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';
import clsx from 'clsx';

export const Tabs: React.FC<TabsProps> = ({ tabs, initialActive = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActive);
  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={clsx(
              'px-4 py-2 text-sm font-medium -mb-px border-b-2',
              activeIndex === index ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            )}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
