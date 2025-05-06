import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(args.checked);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    checked: false,
    label: 'Accept Terms',
  },
};

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    return (
      <Checkbox
        checked={checked}
        indeterminate={indeterminate}
        onChange={(val: boolean) => {
          setChecked(val);
          setIndeterminate(false);
        }}
        label="Partially selected"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled Checkbox',
  },
};
