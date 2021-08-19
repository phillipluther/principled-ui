import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as ButtonTheme from './button.theme';
import FocusIndicator from '../a11y/focus-indicator';

const StyledButton = styled(FocusIndicator)`
  background-color: ${({ theme }) => theme.bg};
  border: ${({ theme }) => theme.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.color};
  padding: ${({ theme }) => theme.padding};

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
    border-color: ${({ theme }) => theme.borderColorHover};
  }
`;

export interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => undefined,
  primary,
  type = 'button',
  ...props
}) => {
  let activeTheme: ButtonTheme.Type = ButtonTheme.standard;

  if (primary) {
    activeTheme = ButtonTheme.primary;
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <StyledButton
        forwardedAs="button"
        type={type}
        onClick={onClick}
        outline
        {...props}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
