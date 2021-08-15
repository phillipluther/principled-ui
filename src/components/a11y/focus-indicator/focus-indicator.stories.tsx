import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import FocusIndicator from './focus-indicator';

export default {
  title: 'Components/A11y/Focus Indicator',
  component: FocusIndicator,
} as Meta;

export const Underline = () => (
  <FocusIndicator tabIndex="0">Focus Indicator Underline</FocusIndicator>
);

export const Outline = () => (
  <FocusIndicator tabIndex="0" outline>Focus Indicator Outline</FocusIndicator>
);
