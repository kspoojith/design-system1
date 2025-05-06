import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './RadioGroup.types';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args: RadioGroupProps) => {
    const [value, setValue] = useState(args.value);
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  },
  args: {
    name: 'plans',
    value: 'starter',
    options: [
      { label: 'Starter', value: 'starter', description: 'Basic features' },
      { label: 'Pro', value: 'pro', description: 'Advanced tools' },
      { label: 'Enterprise', value: 'enterprise', description: 'Custom solution' },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    name: 'layout',
    value: '1',
    layout: 'horizontal',
    options: [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
    ],
    onChange: () => {},
  },
};
