import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children,
  variant = 'primary',
  state = 'default',
  iconLeft,
  iconRight,
  disabled = false,
  ...props
}) => {
  const classNames = [
    'nd-button',
    `nd-button--${variant}`,
    `nd-button--${state}`,
    disabled ? 'nd-button--disabled' : '',
    iconLeft ? 'nd-button--icon-left' : '',
    iconRight ? 'nd-button--icon-right' : '',
    !children ? 'nd-button--icon-only' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || state === 'disabled'}
      aria-disabled={disabled || state === 'disabled'}
      tabIndex={disabled || state === 'disabled' ? -1 : 0}
      {...props}
    >
      {iconLeft && <span className="nd-button__icon nd-button__icon--left">{iconLeft}</span>}
      {children && <span className="nd-button__label">{children}</span>}
      {iconRight && <span className="nd-button__icon nd-button__icon--right">{iconRight}</span>}
    </button>
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