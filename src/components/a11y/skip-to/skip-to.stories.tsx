import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import SkipTo, { SkipToProps } from './skip-to';

export default {
  title: 'Components/A11y/Skip-To',
  component: SkipTo,
} as Meta;

const Template: Story<SkipToProps> = (args) => <SkipTo {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  id: 'skipNav',
  label: 'Skip-To Link',
};
