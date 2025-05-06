import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Home', content: <div>This is the Home tab</div> },
      { label: 'Profile', content: <div>This is the Profile tab</div> },
      { label: 'Settings', content: <div>This is the Settings tab</div> },
    ],
  },
};
