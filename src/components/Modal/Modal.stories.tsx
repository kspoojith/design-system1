import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ModalProps } from './Modal.types';
import { Button } from '../ui/button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args: ModalProps) => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <p>This is the modal content.</p>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Modal Title',
    description: 'This is a description for the modal.',
    actions: (
      <>
        <Button variant="ghost">Cancel</Button>
        <Button>Confirm</Button>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => {
    const [open, setOpen] = useState<'sm' | 'md' | 'lg' | null>('sm');
    return (
      <div className="space-x-2">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Button key={size} onClick={() => setOpen(size)}>
            Open {size} modal
          </Button>
        ))}
        <Modal
          open={open !== null}
          onClose={() => setOpen(null)}
          size={open ?? 'md'}
          title={`${open} Modal`}
          description={`This is a ${open} sized modal.`}
          actions={<Button onClick={() => setOpen(null)}>Close</Button>}
        >
          <p>Content for {open} modal</p>
        </Modal>
      </div>
    );
  },
};
