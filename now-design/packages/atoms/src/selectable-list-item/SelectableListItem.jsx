import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import './SelectableListItem.css';
import { SystemAddFill } from 'now-design-icons';

/**
 * SelectableListItem Atom
 * Props:
 * - icon: React component (optional, defaults to SystemAddFill)
 * - label: string (required)
 * - selected: boolean (required)
 * - onSelect: function (required)
 * - disabled: boolean (optional)
 * - className: string (optional)
 * - style: object (optional)
 */
const SelectableListItem = ({ icon, label, selected, onSelect, disabled = false, className = '', style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Determine colors based on state
  const getIconColor = () => {
    if (disabled) return 'var(--normal-icon-disabled)';
    if (selected) return 'var(--normal-icon-action)'; // Selected takes priority
    if (isActive) return 'var(--normal-icon-action)';
    if (isHovered) return 'var(--normal-icon-hover)';
    return 'var(--normal-icon-iconPrimary)';
  };

  const getTextColor = () => {
    if (disabled) return 'var(--normal-typography-disabled)';
    if (selected) return 'var(--normal-typography-action)'; // Selected takes priority
    if (isActive) return 'var(--normal-typography-action)';
    if (isHovered) return 'var(--normal-typography-hover)';
    return 'var(--normal-typography-bodySecondary)';
  };

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onSelect}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => !disabled && setIsActive(false)}
      onTouchStart={() => !disabled && setIsActive(true)}
      onTouchEnd={() => !disabled && setIsActive(false)}
      className={`selectable-list-item ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        color: getTextColor(),
        transition: 'color 0.2s ease',
        ...style
      }}
    >
      {/* Left side - Icon */}
    
       <Icon icon={icon} size={20} style={{ color: getIconColor() }} />

      {/* Center - Label text */}
      <div 
        className={`regular-bodyLarge ${isHovered || selected ? 'bold-bodyLarge' : ''}`}
        style={{ color: getTextColor() }}
      >
        {label}
      </div>
    </button>
  );
};

SelectableListItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SelectableListItem; 