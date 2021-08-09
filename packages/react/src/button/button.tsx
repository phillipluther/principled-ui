import * as React from 'react';
import classnames from 'classnames';
import {
  buttonStyles,
  primaryButtonStyles,
  blankButtonStyles,
  useKeyboardNavClassHook,
} from '@principled/theme';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  blank?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  primary,
  blank,
  className,
  children,
  ...buttonProps
}) => {
  React.useEffect(useKeyboardNavClassHook);

  const buttonClasses = classnames({
    [primaryButtonStyles]: primary,
    [blankButtonStyles]: blank,
    [buttonStyles]: !primary && !blank,
  }, className);

  return (
    <button
      data-testid="pui-button"
      type={type}
      className={buttonClasses}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button;
