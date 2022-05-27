import * as React from 'react';
import classnames from 'classnames';
import styles from './button.module.css';

export interface DefaultButtonProps {
  className?: string;
  children?: React.ReactNode;
  primary?: boolean;
  hollow?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const DefaultButton = ({
  type = 'button',
  className,
  children,
  primary,
  hollow,
  disabled,
  ...restProps
}: DefaultButtonProps) => (
  <button
    className={classnames(
      styles.common,
      {
        [styles.default]: !(primary || hollow || disabled),
        [styles.primary]: primary,
        [styles.hollow]: hollow,
        [styles.disabled]: disabled,
      },
      className,
    )}
    type={type}
    {...restProps}
  >
    {children}
  </button>
);

export default DefaultButton;
