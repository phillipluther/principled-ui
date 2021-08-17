import * as React from 'react';
import styled from 'styled-components';

export interface VisuallyHiddenProps {
  as?: keyof JSX.IntrinsicElements;
}

const Styled = styled.span`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
`;

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  ...props
}) => (
  <Styled
    data-testid="pui-visually-hidden"
    {...props}
  >{children}</Styled>
);

export default VisuallyHidden;
