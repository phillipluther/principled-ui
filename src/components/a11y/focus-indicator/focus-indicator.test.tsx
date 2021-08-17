/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import FocusIndicator from './focus-indicator';
 
describe('<FocusIndicator />', () => {
  test('defaults to underline', () => {
    const rendered = render(<FocusIndicator />);
    const el = rendered.getByTestId('pui-focus-underline');

    expect(el).toBeInTheDocument();
  });

  test('has an outline variant', () => {
    const rendered = render(<FocusIndicator outline />);
    const el = rendered.getByTestId('pui-focus-outline');

    expect(el).toBeInTheDocument();
  });
});
 