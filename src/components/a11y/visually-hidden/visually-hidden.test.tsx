/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import VisuallyHidden from './visually-hidden';

describe('<VisuallyHidden />', () => {
  test('is a SPAN by default', () => {
    const rendered = render(<VisuallyHidden>Test Text</VisuallyHidden>);
    const el = rendered.getByTestId('pui-visually-hidden');

    expect(el.nodeName).toEqual('SPAN');
  });

  test('renders as a specified tag', () => {
    const rendered = render(<VisuallyHidden as="h2">Test Text</VisuallyHidden>);
    const el = rendered.getByTestId('pui-visually-hidden');

    expect(el.nodeName).toEqual('H2');
  });
});
