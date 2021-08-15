import * as React from 'react';
import styled from 'styled-components';
import { FocusOutline } from '../focus-indicator';

const SkipToAnchor = styled(FocusOutline)`
`;

export interface SkipToProps {
  label?: string;
  id: string;
}

const SkipTo: React.FC<SkipToProps> = ({ label, id }) => (
  <a href={`#${id}`} data-testid="skipto">
    {label || `Skip to ${id}`}
  </a>
);

export default SkipTo;
