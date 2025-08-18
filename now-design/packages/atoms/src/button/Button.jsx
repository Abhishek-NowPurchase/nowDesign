import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button Atom Component
 * 
 * A flexible button component with automatic state handling.
 * States (hover, focus, disabled) are handled automatically via CSS pseudo-classes.
 * 
 * @param {string} variant - Button variant: 'primary', 'secondary', 'transparent'
 * @param {string} state - Button state: 'default', 'error', 'success'
 * @param {boolean} disabled - Whether button is disabled
 * @param {React.ReactNode} leftIcon - Icon to display on the left
 * @param {React.ReactNode} rightIcon - Icon to display on the right
 * @param {string} children - Button text content
 * @param {function} onClick - Click handler
 * @param {string} type - Button type: 'button', 'submit', 'reset'
 * @param {string} className - Additional CSS classes
 * @param {object} style - Additional inline styles
 * @param {object} ...props - Additional HTML button props
 */
const Button = ({
  variant = 'primary',
  state = 'default',
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const getButtonClasses = () => {
    const baseClass = 'button';
    const variantClass = `button--${variant}`;
    const stateClass = state !== 'default' ? `button--${state}` : '';
    
    return [
      baseClass,
      variantClass,
      stateClass,
      className
    ].filter(Boolean).join(' ');
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <span className="button__icon button__icon--left">
          {leftIcon}
        </span>
      )}
      
      {children && (
        <span className="button__text bold-h3">
          {children}
        </span>
      )}
      
      {rightIcon && (
        <span className="button__icon button__icon--right">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  state: PropTypes.oneOf(['default', 'error', 'success']),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button; 