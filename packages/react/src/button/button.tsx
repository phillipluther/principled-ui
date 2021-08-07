import * as React from 'react';
import {
  buttonStyles,
  primaryButtonStyles,
  blankButtonStyles,
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
  const buttonClasses = [className];

  if (primary) {
    buttonClasses.unshift(primaryButtonStyles);
  } else if (blank) {
    buttonClasses.unshift(blankButtonStyles);
  } else {
    buttonClasses.unshift(buttonStyles);
  }

  return (
    <button
      type={type}
      className={buttonClasses.join(' ')}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button;