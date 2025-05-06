import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import type { TypographyVariant } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'helper'],
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Typography component for headings, paragraphs, labels, and helper texts with theming and accessibility support.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

const sampleText = 'The quick brown fox jumps over the lazy dog.';

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2">
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'helper'] as TypographyVariant[]).map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant.toUpperCase()}: {sampleText}
        </Typography>
      ))}
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'p',
    children: sampleText,
  },
};
