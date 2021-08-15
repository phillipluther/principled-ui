import * as React from 'react';
import styled from 'styled-components';
import { extendedPalette } from '../../theme';

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
    transition: transform 360ms ease-both, border 240ms;
  }
`;

const FocusOutline = styled(FocusIndicatorBase)`
  &::before {
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    border-radius: 4px;
    border: 0;
    transform: scale3d(0.8, 0.8, 1);
  }

  &:focus::before {
    transform: scale3d(1, 1, 1);
    border: 2px solid ${(props) => props.theme.colors.linkColor};
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
  }
`;

export interface FocusIndicatorProps {
  as?: keyof JSX.IntrinsicElements;
  outline?: boolean;
  theme?: any;
}

const FocusIndicator: React.FC<FocusIndicatorProps> = ({ as, children, outline, ...props }) => {
  const IndicatorType = outline ? FocusOutline : FocusUnderline;

  return (
    <IndicatorType {...props}>
      {children}
    </IndicatorType>
  );
}

export default FocusIndicator;

FocusIndicator.defaultProps = {
  theme: {
    colors: extendedPalette,
  },
};

