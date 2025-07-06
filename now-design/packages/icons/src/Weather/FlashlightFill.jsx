import React from 'react';

const FlashlightFill = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.834 8.33337H16.6673L9.16732 19.1667V11.6667H3.33398L10.834 0.833374V8.33337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlashlightFill;
