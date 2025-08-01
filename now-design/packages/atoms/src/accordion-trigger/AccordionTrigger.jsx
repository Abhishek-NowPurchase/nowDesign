import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import './AccordionTrigger.css';
import {  ArrowsArrowDownSLine, ArrowsArrowUpSLine } from 'now-design-icons';

/**
 * AccordionTrigger Atom
 * Props:
 * - label: string (required)
 * - expanded: boolean (required)
 * - onToggle: function (required)
 * - icon: React component (optional, defaults to SystemAddFill)
 * - className: string (optional)
 * - style: object (optional)
 */
const AccordionTrigger = ({ label, expanded, onToggle, icon, className = '', style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Determine colors based on state
  const getIconColor = () => {
    if (isActive) return 'var(--normal-icon-iconActive)';
    if (isHovered) return 'var(--normal-icon-hover)';
    return 'var(--normal-icon-iconPrimary)';
  };

  const getTextColor = () => {
    if (isActive) return 'var(--normal-typography-headingPrimary)';
    if (isHovered) return 'var(--normal-typography-hover)';
    return 'var(--normal-typography-headingSecondary)';
  };

  const getChevronColor = () => {
    if (isActive) return 'var(--normal-icon-iconActive)';
    if (isHovered) return 'var(--normal-icon-hover)';
    return 'var(--normal-icon-iconPrimary)';
  };

  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-label={label}
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      className={`accordion-trigger ${className}`}
      style={{
        color: getTextColor(),
        transition: 'color 0.2s ease',
        ...style
      }}
    >
      {/* Left section - Icon + Label */}
      <div className="accordion-trigger-left-section">
        <div className="accordion-trigger-icon-container">
          <Icon icon={icon} size={20} style={{ color: getIconColor() }} />
        </div>
        <div
          className={`accordion-trigger-label regular-h4 ${isHovered || expanded ? 'bold-h4' : ''}`}
          style={{ color: getTextColor() }}
        >
          {label}
        </div>
      </div>

      {/* Right side - Chevron */}
      <div className="accordion-trigger-chevron" style={{ color: getChevronColor() }}>
        {expanded ? (
          <Icon icon={ArrowsArrowUpSLine} size={20} style={{ color: getChevronColor() }} />
        ) : (
          <Icon icon={ArrowsArrowDownSLine} size={20} style={{ color: getChevronColor() }} />
        )}
      </div>
    </button>
  );
};

AccordionTrigger.propTypes = {
  label: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AccordionTrigger; 