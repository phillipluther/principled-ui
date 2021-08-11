import { css } from '@emotion/css';
import { borderBox, resetText } from '../helpers/resets';
import { focusRing } from '../helpers/focus-indicators';

const inputStyles = css`
  ${borderBox};
  ${resetText};
  display: block;
  width: 100%;
  border: 1px solid darkblue;
`;
