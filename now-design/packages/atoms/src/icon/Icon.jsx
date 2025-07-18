import React from 'react';
// IMPORTANT: Ensure this import is present at the app entry point for tokens to work
// import 'now-design-tokens/dist/css/variables.css';

const directionMap = {
  up: 'rotate(0deg)',
  right: 'rotate(90deg)',
  down: 'rotate(180deg)',
  left: 'rotate(270deg)',
};

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
  const computedStyle = {
    color: `var(--${color})`,
    width: `var(--${size})`,
    height: `var(--${size})`,
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
      style={computedStyle}
      onClick={disabled ? undefined : onClick}
      title={title}
      focusable={focusable ? 'true' : 'false'}
      {...rest}
    >
      <Icon
        width="100%"
        height="100%"
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