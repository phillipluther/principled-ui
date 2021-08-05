import { css } from '@emotion/css';
import { resetText } from '../resets';
import { KB_ACTIVE_CLASS } from '../handle-keyboard-nav';

const buttonBase = css`
  ${resetText};
  margin: 0;
  padding: 0 16px;
  line-height: 46px;
  border: 1px solid transparent;
  white-space: nowrap;
  outline: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  &:hover,
  .kb-active &:focus {
    &::before {
      border: 2px solid black;
    }
  }
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
