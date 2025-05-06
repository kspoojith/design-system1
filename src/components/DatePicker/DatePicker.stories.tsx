import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { DatePickerProps } from './DatePicker.types';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args: DatePickerProps) => {
    const [value, setValue] = useState(args.value);
    return <DatePicker {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: '2025-01-01',
  },
};