import React from 'react';
// IMPORTANT: Ensure this import is present at the app entry point for tokens to work
// import 'now-design-tokens/dist/css/variables.css';

const directionMap = {
  up: 'rotate(0deg)',
  right: 'rotate(90deg)',
  down: 'rotate(180deg)',
  left: 'rotate(270deg)',
};

// Helper function to determine if a value should be treated as a token or direct value
const getTokenValue = (value, type = 'size') => {
  if (typeof value === 'number') {
    return type === 'size' ? `${value}px` : value;
  }
  if (typeof value === 'string') {
    // Check if it's a CSS color value (hex, rgb, hsl, etc.)
    if (type === 'color' && (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('hsl'))) {
      return value;
    }
    // Check if it's a pixel value
    if (type === 'size' && value.endsWith('px')) {
      return value;
    }
    // Otherwise treat as token name
    return `var(--${value})`;
  }
  return value;
};

// Helper function to validate and resolve icon component
const validateIcon = (icon) => {
  if (!icon) {
    return null;
  }
  
  if (typeof icon === 'string') {
    return null;
  }
  
  if (typeof icon !== 'function' && typeof icon !== 'object') {
    return null;
  }
  
  // Check if it's a valid React component
  if (typeof icon === 'function') {
    // It's a function component or class component
    return icon;
  }
  
  if (typeof icon === 'object') {
    // Check if it has a render method (class component) or $$typeof (React element)
    if (icon.render || icon.$$typeof) {
      return icon;
    }
    return null;
  }
  
  return icon;
};

/**
 * Generic icon atom that renders a provided SVG React component with token-aware sizing and color.
 * Includes conveniences for rotation, spinning animation, disabled state, and accessibility.
 *
 * @param {Object} props
 * @param {React.ComponentType|React.ReactElement} props.icon Required icon component or element to render.
 * @param {number|string} [props.size='icon-md'] Pixel number, 'NNpx', or token name for width/height.
 * @param {string} [props.color='icon-primary'] Token name or raw CSS color for `color`.
 * @param {string} [props.ariaLabel] Accessible label; if omitted, icon is marked aria-hidden.
 * @param {string} [props.title] Title attribute for native tooltips.
 * @param {string} [props.className] Additional wrapper classes.
 * @param {Object} [props.style={}] Inline style overrides for the wrapper.
 * @param {function(MouseEvent): void} [props.onClick] Click handler (disabled when `disabled`).
 * @param {number} [props.tabIndex] Tab index for keyboard navigation.
 * @param {'img'|'presentation'} [props.role='img'] Accessible role for the wrapper.
 * @param {boolean} [props.spin=false] Applies a CSS spinning animation.
 * @param {boolean} [props.disabled=false] Disables interactions and dims the icon.
 * @param {'up'|'right'|'down'|'left'} [props.direction] Rotates the icon to the given direction.
 * @param {number} [props.strokeWidth] Stroke width forwarded to the SVG.
 * @param {string} [props.fill] Fill color forwarded to the SVG.
 * @param {boolean} [props.focusable=false] Sets focusability attributes on wrapper and SVG.
 * @returns {JSX.Element} Span wrapper containing the rendered icon component.
 */
const IconAtom = ({
  icon: Icon,
  size = 'icon-md', // token name or value
  color = 'icon-primary', // token name or value
  ariaLabel,
  title,
  className,
  style = {},
  onClick,
  tabIndex,
  role = 'img',
  spin = false,
  disabled = false,
  direction,
  strokeWidth,
  fill,
  focusable = false,
  ...rest
}) => {
  // Validate the icon component
  const IconComponent = validateIcon(Icon);
  
  // If no valid icon component found, render a helpful placeholder
  if (!IconComponent) {
    return (
      <span
        role={role}
        aria-label={ariaLabel || 'Missing icon'}
        className={className}
        style={{
          border: '1px dashed #ccc',
          color: '#999',
          fontSize: '12px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: getTokenValue(size, 'size'),
          height: getTokenValue(size, 'size'),
        }}
        title="Icon component missing - check console for details"
      >
        ?
      </span>
    );
  }

  // The Icon component should be dimensionless - it just passes props to the SVG
  const iconStyle = {
    color: getTokenValue(color, 'color'),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    pointerEvents: disabled ? 'none' : undefined,
    opacity: disabled ? 0.5 : 1,
    transform: direction ? directionMap[direction] : undefined,
    animation: spin ? 'icon-spin 1s linear infinite' : undefined,
    ...style,
  };

  return (
    <span
      role={role}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      tabIndex={tabIndex}
      className={className}
      style={iconStyle}
      onClick={disabled ? undefined : onClick}
      title={title}
      focusable={focusable ? 'true' : 'false'}
      {...rest}
    >
      <IconComponent
        width={getTokenValue(size, 'size')}
        height={getTokenValue(size, 'size')}
        strokeWidth={strokeWidth}
        fill={fill}
        aria-hidden={ariaLabel ? undefined : 'true'}
        focusable={focusable ? 'true' : 'false'}
        data-testid={rest['data-testid']}
      />
      <style>{`
        @keyframes icon-spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  );
};

export default IconAtom; 