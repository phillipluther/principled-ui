/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Button, { ButtonProps } from './button';

describe('Button', () => {
  let props: ButtonProps;

  const renderComponent = () => render(<Button {...props}>Button</Button>);

  it('should default to type="button"', () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId('pui-button');

    expect(button).toHaveAttribute('type', 'button');
  });
});
