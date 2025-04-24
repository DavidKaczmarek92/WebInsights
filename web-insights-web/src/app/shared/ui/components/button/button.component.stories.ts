import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent & { text: string }> = {
  title: 'UI/Button',
  tags: ['autodocs'],
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    fullWidth: false,
    text: 'Button',
  },
  render: args => ({
    props: args,
    template: `<wi-button
      [variant]="variant"
      [size]="size"
      [type]="type"
      [disabled]="disabled"
      [fullWidth]="fullWidth">{{text}}</wi-button>`,
  }),
};

export default meta;

type Story = StoryObj<ButtonComponent & { text: string }>;

export const Default: Story = {
  args: {
    text: 'Default Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    text: 'Full Width Button',
  },
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col items-start gap-4">
        <wi-button size="sm">Small Button</wi-button>
        <wi-button size="md">Medium Button</wi-button>
        <wi-button size="lg">Large Button</wi-button>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-4">
        <wi-button variant="primary">Primary</wi-button>
        <wi-button variant="secondary">Secondary</wi-button>
        <wi-button variant="danger">Danger</wi-button>
        <wi-button variant="success">Success</wi-button>
        <wi-button variant="warning">Warning</wi-button>
      </div>
    `,
  }),
};

export const AllDisabledVariants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-4">
        <wi-button variant="primary" disabled="true">Primary</wi-button>
        <wi-button variant="secondary" disabled="true">Secondary</wi-button>
        <wi-button variant="danger" disabled="true">Danger</wi-button>
        <wi-button variant="success" disabled="true">Success</wi-button>
        <wi-button variant="warning" disabled="true">Warning</wi-button>
      </div>
    `,
  }),
};
