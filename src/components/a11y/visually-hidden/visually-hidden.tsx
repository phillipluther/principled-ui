import * as React from 'react';
import { css } from '@emotion/react';

export interface VisuallyHiddenProps {
  as?: keyof JSX.IntrinsicElements;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  as: TagName = 'span',
  children,
  ...props
}) => (
  <TagName
    data-testid="pui-visually-hidden"
    {...props}
  >{children}</TagName>
);

export default VisuallyHidden;
