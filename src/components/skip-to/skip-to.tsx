import * as React from 'react';
import { css, jsx } from '@emotion/react';

export interface SkipToProps {
  label?: string;
  id: string;
}

const SkipTo: React.FC<SkipToProps> = ({ label, id }) => (
  <a
    href={`#${id}`}
    css={css`
      font-size: 1.2rem;
      color: green;
      text-decoration: none;
    `}
  >
    {label || `Skip to ${id}`}
  </a>
);

export default SkipTo;
