/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  const getRendered = (props = {}) => {
    const { getByTestId } = render(<Button {...props}>Button</Button>);
    return getByTestId('pui-button');
  };

  it('defaults to type="button"', () => {
    const button = getRendered();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('takes a specified type', () => {
    const button = getRendered({ type: 'submit' });
    expect(button).toHaveAttribute('type', 'submit');
  });
});
