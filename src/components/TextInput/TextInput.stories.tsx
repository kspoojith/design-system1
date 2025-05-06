import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A reusable, accessible text input field with label, helper, and error messaging.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    helperText: 'This will appear on your profile.',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: true,
    errorMessage: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Disabled field',
    disabled: true,
  },
};

export const DarkModePreview: Story = {
  render: (args) => (
    <div className="dark bg-gray-900 p-4 rounded-md">
      <TextInput {...args} />
    </div>
  ),
  args: {
    label: 'Dark Mode Email',
    placeholder: 'you@example.com',
    helperText: 'Dark theme enabled',
  },
};
