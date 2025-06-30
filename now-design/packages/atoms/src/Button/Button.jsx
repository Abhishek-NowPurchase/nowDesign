import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    'simple-token-button',
    `simple-token-button--${variant}`,
    `simple-token-button--${size}`,
    disabled ? 'simple-token-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 