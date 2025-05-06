import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Default: Story = {
  render: (args: DropdownProps) => {
    const [value, setValue] = useState('');
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Dropdown Label',
    options: sampleOptions,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Dropdown',
    options: sampleOptions,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Dropdown with Error',
    options: sampleOptions,
    error: 'This field is required',
  },
};

export const Sizes: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-4">
        <Dropdown label="Small" size="sm" value={value} onChange={setValue} options={sampleOptions} />
        <Dropdown label="Medium" size="md" value={value} onChange={setValue} options={sampleOptions} />
        <Dropdown label="Large" size="lg" value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
};
