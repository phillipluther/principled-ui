import { css } from '@emotion/css';
import { borderBox, resetText } from '../helpers/resets';
import { focusRing } from '../helpers/focus-indicators';

const buttonBase = css`
  ${borderBox};
  ${resetText};
  ${focusRing};
  margin: 0;
  padding: 0 16px;
  line-height: 44px;
  border: 2px solid transparent;
  white-space: nowrap;
  outline: 0;
`;

export const primaryButtonStyles = css`
  ${buttonBase};
  background: darkblue;
  color: white;
`;

export const buttonStyles = css`
  ${buttonBase};
  background: lightgray;
  color: black;
`;

export const blankButtonStyles = css`
  ${buttonBase};
  background: none;
  color: inherit;  
`;
