import * as React from 'react';
import classnames from 'classnames';
import { visuallyHiddenStyles } from '@principled/theme';

export interface VisuallyHiddenProps {
  as?: string;
  className?: string;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  as,
  className,
  children,
  ...props
}) => {
  const Tag = as || 'span';
  const classes = classnames(visuallyHiddenStyles, className);

  return (
    <Tag className={classes} {...props}>{children}</Tag>
  );
};

export default VisuallyHidden;
