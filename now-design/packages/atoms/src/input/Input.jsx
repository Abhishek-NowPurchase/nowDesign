import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  value = '',
  placeholder,
  icon,
  iconColor,
  className,
  onChange,
  onFocus,
  onBlur,
  showPlaceholder = false,
  disabled = false,
  status, // 'error' | 'success' | 'warning' | undefined
  type = 'text',
  inputMode,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const lastInteractionWasKeyboardRef = useRef(false);

  const getInputClasses = () => {
    const baseClass = 'input';
    const focusedClass = isFocused ? 'input--focused' : '';
    const filledClass = value ? 'input--filled' : '';
    const hasIconClass = icon ? 'input--has-icon' : '';
    const showPlaceholderClass = showPlaceholder ? 'input--show-placeholder' : '';
    const disabledClass = disabled ? 'input--disabled' : '';
    const statusClass = status ? `input--${status}` : '';
    const focusVisibleClass = isFocusVisible ? 'input--focus-visible' : '';

    return [baseClass, focusedClass, filledClass, hasIconClass, showPlaceholderClass, disabledClass, statusClass, focusVisibleClass, className]
      .filter(Boolean)
      .join(' ');
  };

  const getTextClasses = () => {
    return 'input__text regular-bodyLarge';
  };

  const getIconClasses = () => {
    return 'input__icon';
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    setIsFocusVisible(lastInteractionWasKeyboardRef.current);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setIsFocusVisible(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleKeyDown = (e) => {
    // Mark focus as keyboard-initiated only on Tab navigation
    if (e.key === 'Tab') {
      lastInteractionWasKeyboardRef.current = true;
    }
  };

  const handleMouseDown = () => {
    lastInteractionWasKeyboardRef.current = false;
  };

  const renderIcon = () => {
    if (!icon) return null;

    return (
      <div className={getIconClasses()} style={{ color: iconColor }}>
        {icon}
      </div>
    );
  };

  return (
    <div className={getInputClasses()} onMouseDown={handleMouseDown}>
      <input
        type={type}
        className={getTextClasses()}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        inputMode={inputMode}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        {...props}
      />
      {renderIcon()}
    </div>
  );
};

Input.propTypes = {
  /** Current value of the input */
  value: PropTypes.string,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Optional icon component */
  icon: PropTypes.node,
  /** Color for the icon */
  iconColor: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func,
  /** Focus handler */
  onFocus: PropTypes.func,
  /** Blur handler */
  onBlur: PropTypes.func,
  /** Whether to always show placeholder (overrides focus behavior) */
  showPlaceholder: PropTypes.bool,
  /** Validation status */
  status: PropTypes.oneOf(['error', 'success', 'warning']),
  /** HTML input type */
  type: PropTypes.oneOf(['text','email','number','password','tel','url']),
  /** Mobile keyboard hint */
  inputMode: PropTypes.oneOf(['text','email','numeric','tel','url','search','decimal']),
};

export default Input;
