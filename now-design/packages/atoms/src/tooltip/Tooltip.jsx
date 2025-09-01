import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'now-design-theme';
import { SystemInformation2Line } from 'now-design-icons';
import './Tooltip.css';

/**
 * Accessible tooltip atom with hover/click/focus triggers and auto-positioning.
 * Adjusts position to avoid viewport overflow and supports custom trigger content.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] Optional custom trigger; if not provided an info icon is rendered.
 * @param {string|React.ReactNode} props.content Tooltip body content.
 * @param {'top'|'bottom'|'left'|'right'|'top-left'|'top-right'|'bottom-left'|'bottom-right'} [props.position='top'] Preferred tooltip position.
 * @param {'hover'|'click'|'focus'} [props.trigger='hover'] Trigger interaction mode.
 * @param {boolean} [props.disabled=false] Disables showing the tooltip.
 * @param {number} [props.delay=0] Delay in ms before showing when using hover/focus.
 * @param {React.ReactNode} [props.icon] Custom icon for default trigger.
 * @param {string} [props.iconColor='#E3E3E3'] Color for the default info icon.
 * @param {string} [props.className=''] Additional class names for the tooltip surface.
 * @returns {JSX.Element} Tooltip container with trigger and content.
 */
const Tooltip = ({
  children,
  content,
  position = 'top',
  trigger = 'hover',
  disabled = false,
  delay = 0,
  icon,
  iconColor = '#E3E3E3',
  className = '',
  ...props
}) => {
  // Use ThemeContext directly so Tooltip doesn't hard-require a ThemeProvider
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'light';
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    if (disabled) return;
    
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      hideTooltip();
    }
  };

  // Auto-positioning logic to prevent tooltip from going off-screen
  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      let newPosition = position;

      // Check if tooltip goes off-screen and adjust position
      if (position === 'top' && triggerRect.top - tooltipRect.height < 0) {
        newPosition = 'bottom';
      } else if (position === 'bottom' && triggerRect.bottom + tooltipRect.height > viewport.height) {
        newPosition = 'top';
      } else if (position === 'left' && triggerRect.left - tooltipRect.width < 0) {
        newPosition = 'right';
      } else if (position === 'right' && triggerRect.right + tooltipRect.width > viewport.width) {
        newPosition = 'left';
      }

      setActualPosition(newPosition);
    }
  }, [isVisible, position]);

  const getTriggerProps = () => {
    const props = {
      ref: triggerRef,
      'aria-describedby': isVisible ? 'tooltip' : undefined,
    };

    if (trigger === 'hover') {
      props.onMouseEnter = showTooltip;
      props.onMouseLeave = hideTooltip;
      props.onFocus = showTooltip;
      props.onBlur = hideTooltip;
    } else if (trigger === 'click') {
      props.onClick = () => isVisible ? hideTooltip() : showTooltip();
    } else if (trigger === 'focus') {
      props.onFocus = showTooltip;
      props.onBlur = hideTooltip;
    }

    props.onKeyDown = handleKeyDown;

    return props;
  };

  const getTooltipClasses = () => {
    const baseClass = 'tooltip';
    const positionClass = `tooltip--${actualPosition}`;
    const visibleClass = isVisible ? 'tooltip--visible' : '';
    
    return [
      baseClass,
      positionClass,
      visibleClass,
      className
    ].filter(Boolean).join(' ');
  };

  // Default icon if none provided
  const defaultIcon = (
    <SystemInformation2Line
      width={20}
      height={20}
      style={{ color: iconColor }}
    />
  );

  return (
    <div className="tooltip-container" {...props}>
      {/* Trigger Element */}
      <div {...getTriggerProps()} className="tooltip-trigger">
        {children || (
          <div className="tooltip-icon">
            {icon || defaultIcon}
          </div>
        )}
      </div>

      {/* Tooltip Content */}
      {isVisible && (
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className={getTooltipClasses()}
          aria-hidden={!isVisible}
        >
          <div className="tooltip-content">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  position: PropTypes.oneOf([
    'top', 'bottom', 'left', 'right',
    'top-left', 'top-right', 'bottom-left', 'bottom-right'
  ]),
  trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
  disabled: PropTypes.bool,
  delay: PropTypes.number,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  className: PropTypes.string
};

export default Tooltip;
