import { css } from '@emotion/css';

const pseudoElementBase = css`
  content: '';
  position: absolute;
  top: -4px;
  right: -4px;
  bottom: -4px;
  left: -4px;
`;

// TODO: figure out how to interpolate the KB_NAV_CLASS var from use-keyboard-nav-class-hook.js;
// a straight up template literal interpolation doesn't seem to work ${KB_NAV_CLASS}
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
