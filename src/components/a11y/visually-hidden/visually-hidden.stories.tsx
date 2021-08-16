import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import VisuallyHidden, { VisuallyHiddenProps } from './visually-hidden';

export default {
  title: 'Components/A11y/Visually Hidden',
  component: VisuallyHidden,
} as Meta;

export const Default: Story<VisuallyHiddenProps> = () => (
  <VisuallyHidden>This text is visually hidden.</VisuallyHidden>
);

export const CustomTag: Story<VisuallyHiddenProps> = () => (
  <VisuallyHidden as="h2">This H2 is visually hidden.</VisuallyHidden>
);
