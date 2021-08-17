import * as React from 'react';
import styled from 'styled-components';
import FocusIndicator from '../focus-indicator';
import { extendedPalette, spacers } from '../../theme';

export interface SkipToProps {
  label?: string;
  id: string;
  // TODO: fix theme typing
  theme?: any;
}

const Styled = styled(FocusIndicator)`
  background-color: ${({ theme }) => theme.colors.primaryBg};
  padding: ${({ theme }) => theme.padding.sm}

  &:not(:focus) {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
  }
`;

const SkipTo: React.FC<SkipToProps> = ({ label, id }) => (
  <Styled outline href={`#${id}`} data-testid="pui-skipto">
    {label || `Skip to ${id}`}
  </Styled>
);

export default SkipTo;

SkipTo.defaultProps = {
  theme: {
    colors: extendedPalette,
    padding: spacers,
  },
};

