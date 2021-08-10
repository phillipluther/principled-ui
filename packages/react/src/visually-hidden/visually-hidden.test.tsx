/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import VisuallyHidden from './visually-hidden';

describe('VisuallyHidden', () => {
  const getRendered = (props = {}) => {
    const { getByTestId } = render(<VisuallyHidden {...props}>Visually Hidden</VisuallyHidden>);
    return getByTestId('pui-visually-hidden');
  };

  it('renders as a SPAN by default', () => {
    const rendered = getRendered();
    expect(rendered.tagName).toEqual('SPAN')
  });

  it('renders as a specified HTML tag', () => {
    const rendered = getRendered({ as: 'h2' });
    expect(rendered.tagName).toEqual('H2');
  });

  it('includes visually hidden text', () => {
    render(<VisuallyHidden>Visually Hidden</VisuallyHidden>);
    const vhElement = screen.getByText('Visually Hidden');

    expect(vhElement).toBeInTheDocument();
  });
});
