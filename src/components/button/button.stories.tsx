import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Standard: Story<ButtonProps> = () => (
  <Button>A Standard Button</Button>
);

export const PrimaryButton: Story<ButtonProps> = () => (
  <Button primary>A Primary Button</Button>
);
