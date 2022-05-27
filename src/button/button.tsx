import * as React from 'react';
import classnames from 'classnames';
import styles from './button.module.css';

export interface DefaultButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const DefaultButton = ({
  type = 'button',
  className,
  children,
  ...restProps
}: DefaultButtonProps) => {
  return (
    <button
      className={classnames(styles.button, className)}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
