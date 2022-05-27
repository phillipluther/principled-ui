import * as React from 'react';
import styled from 'styled-components';
import { extendedPalette } from '../../theme';

const commonTransition = 'transition: transform 120ms ease-in, opacity 120ms';

const FocusIndicatorBase = styled.a`
  position: relative;
  color: inherit;
  font: inherit;
  text-decoration: none;

  &,
  &:focus {
    outline: none;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    opacity: 0;
    ${commonTransition};
  }
`;

const FocusOutline = styled(FocusIndicatorBase)`
  &::before {
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme.colors.linkColor};
    transform: scale3d(1.05, 1.05, 1);
    ${commonTransition + ', border-width 0ms ease 120ms'};
  }

  &:focus::before {
    transform: scale3d(1, 1, 1);
    opacity: 1;
    border-width: 2px;
    ${commonTransition};
  }
`;

const FocusUnderline = styled(FocusIndicatorBase)`
  &::before {
    top: 100%;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-bottom: 2px solid ${(props) => props.theme.colors.linkColor};
    transform: scaleX(0);
  }

  &:focus::before {
    transform: scaleX(1);
    opacity: 1;
  }
`;

export interface FocusIndicatorProps {
  as?: keyof JSX.IntrinsicElements;
  outline?: boolean;
  theme?: any;
  href?: string;
}

const FocusIndicator: React.FC<FocusIndicatorProps> = ({ children, outline, ...props }) => {
  const IndicatorType = outline ? FocusOutline : FocusUnderline;
  const testId = outline ? 'pui-focus-outline' : 'pui-focus-underline';

  return (
    <IndicatorType data-testid={testId} {...props}>
      {children}
    </IndicatorType>
  );
};

export default FocusIndicator;

FocusIndicator.defaultProps = {
  theme: {
    colors: extendedPalette,
  },
};
