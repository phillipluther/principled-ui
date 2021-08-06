import { css } from '@emotion/css';
import { resetText } from '../resets';
import { focusRing } from './focus-outline';
import { KB_ACTIVE_CLASS } from '../handle-keyboard-nav';

const buttonBase = css`
  ${resetText};
  ${focusRing};
  margin: 0;
  padding: 0 16px;
  line-height: 46px;
  border: 1px solid transparent;
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
