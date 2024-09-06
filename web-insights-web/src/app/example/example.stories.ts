import type { Meta, StoryObj } from '@storybook/angular';
import { ExampleComponent } from './example.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ExampleComponent> = {
  title: 'Test/Example',
  tags: ['autodocs'],
  component: ExampleComponent,
};

export default meta;

type Story = StoryObj<ExampleComponent>;

export const FirstExample: Story = {};

export const SecondExample: Story = {
  args: {
    text: 'Second Example',
  },
};
