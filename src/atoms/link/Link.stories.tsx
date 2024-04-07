import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta: Meta<typeof Link> = {
    component: Link
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        href: '#',
        text: 'Hello world!',
        theme: 'normal'
    }
};
