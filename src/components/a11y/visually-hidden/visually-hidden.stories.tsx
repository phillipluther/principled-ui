import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import VisuallyHidden, { VisuallyHiddenProps } from './visually-hidden';

export default {
  title: 'Components/A11y/Visually Hidden',
  component: VisuallyHidden,
} as Meta;

const Template: Story<VisuallyHiddenProps> = (args) => <VisuallyHidden {...args} />;

export const Default = Template.bind({});
export const CustomTag = Template.bind({});

CustomTag.args = {
  as: 'h2',
};
