import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import fontSizes from '@now-design/tokens/typography/font-sizes.json';
import lineHeights from '@now-design/tokens/typography/line-heights.json';
import fontFamilies from '@now-design/tokens/typography/font-families.json';
import spacings from '@now-design/tokens/scale/responsive-spacing.json';
import colors from '@now-design/tokens/color/alias.json';

const breakpoints = {
  tablet: '768px',
  mobile: '480px',
};

const variantStyles = {
  primary: {
    background: colors.primary?.value || '#0070f3',
    color: colors.onPrimary?.value || '#fff',
  },
  secondary: {
    background: colors.secondary?.value || '#fff',
    color: colors.onSecondary?.value || '#0070f3',
  },
  transparent: {
    background: 'transparent',
    color: colors.primary?.value || '#0070f3',
  },
};

const StyledButton = styled.button`
  font-family: ${fontFamilies['font-family'].body.value}, sans-serif;
  font-size: ${fontSizes['font-size'].bodyLarge.desktop}px;
  line-height: ${lineHeights['line-height'].bodyLarge.desktop}px;
  padding: ${spacings.gapSpacing['400'].desktop || '12px 24px'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ $variant }) => variantStyles[$variant]?.background};
  color: ${({ $variant }) => variantStyles[$variant]?.color};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${fontSizes['font-size'].bodyLarge.tablet || fontSizes['font-size'].bodyLarge.desktop}px;
    line-height: ${lineHeights['line-height'].bodyLarge.tablet || lineHeights['line-height'].bodyLarge.desktop}px;
    padding: ${spacings.gapSpacing['400'].tablet || spacings.gapSpacing['400'].desktop};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fontSizes['font-size'].bodyLarge.mobile || fontSizes['font-size'].bodyLarge.tablet || fontSizes['font-size'].bodyLarge.desktop}px;
    line-height: ${lineHeights['line-height'].bodyLarge.mobile || lineHeights['line-height'].bodyLarge.tablet || lineHeights['line-height'].bodyLarge.desktop}px;
    padding: ${spacings.gapSpacing['400'].mobile || spacings.gapSpacing['400'].tablet || spacings.gapSpacing['400'].desktop};
  }

  ${({ $iconOnly }) =>
    $iconOnly &&
    css`
      padding-left: 12px;
      padding-right: 12px;
      justify-content: center;
    `}
`;

const Button = ({
  children,
  variant = 'primary',
  state = 'default',
  iconLeft,
  iconRight,
  disabled = false,
  ...props
}) => {
  const iconOnly = !children;
  return (
    <StyledButton
      $variant={variant}
      $disabled={disabled || state === 'disabled'}
      $iconOnly={iconOnly}
      disabled={disabled || state === 'disabled'}
      aria-disabled={disabled || state === 'disabled'}
      tabIndex={disabled || state === 'disabled' ? -1 : 0}
      {...props}
    >
      {iconLeft && <span className="nd-button__icon nd-button__icon--left">{iconLeft}</span>}
      {children && <span className="nd-button__label">{children}</span>}
      {iconRight && <span className="nd-button__icon nd-button__icon--right">{iconRight}</span>}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  state: PropTypes.oneOf(['default', 'hover', 'disabled', 'focus', 'error', 'success']),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  disabled: PropTypes.bool,
};

export default Button; 