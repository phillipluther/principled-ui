import { css } from '@emotion/css';

const pseudoElementBase = css`
  content: '';
  position: absolute;
  top: -4px;
  right: -4px;
  bottom: -4px;
  left: -4px;
`;

export const focusRing = css`
  position: relative;

  &::before {
    ${pseudoElementBase};
    border: 0px solid black;
    border-radius: 4px;
    transition: border 240ms ease;
  }

  .kb-active &:focus {
    &::before {
      border-width: 2px;
    }
  }
`;
