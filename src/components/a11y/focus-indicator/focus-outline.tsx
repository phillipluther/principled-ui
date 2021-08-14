import * as React from 'react';
import styled from '@emotion/styled';
import { extendedPalette } from '../../theme';

const FocusOutline = styled.button`
  outline: none;
  outline-offset: 4px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme ? theme.linkColorActive : extendedPalette.linkColorActive};
  }
`;

export default FocusOutline;
