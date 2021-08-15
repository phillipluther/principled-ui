import * as React from 'react';
import styled from 'styled-components';
import { extendedPalette } from '../../theme';

const FocusOutline = styled.button`
  outline: none;
  outline-offset: 4px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.linkColor};
  }
`;

FocusOutline.defaultProps = {
  theme: {
    colors: {
      linkColor: 'blue',
    },
  },
};

export default FocusOutline;
