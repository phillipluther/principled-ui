import * as React from 'react';
import classnames from 'classnames';
import { visuallyHiddenStyles } from '@principled/theme';

export interface VisuallyHiddenProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  as: TagName = 'span',
  className,
  children,
  ...props
}) => {
  const classes = classnames(visuallyHiddenStyles, className);

  return (
    <TagName
      data-testid="pui-visually-hidden"
      className={classes}
      {...props}
    >{children}</TagName>
  );
};

export default VisuallyHidden;
