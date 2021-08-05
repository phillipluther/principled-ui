import { css } from '@emotion/css';
import { ResetSpacing, ResetText } from '../resets';

const Button = css`
  ${ResetSpacing};
  ${ResetText};
  padding: 0 16px;
  line-height: 48px;
  background: darkblue;
  color: white;
  white-space: nowrap;
`;

export default Button;
