import React from 'react';

const OpenbaseLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0003 2.5L1.66699 4.99667L2.50033 12.8833L10.0003 18.75L17.5003 12.8833L18.3337 4.99667L10.0003 2.5ZM16.5309 6.19643L10.0003 16.634L3.46971 6.19643L10.0003 4.23986L16.5309 6.19643Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default OpenbaseLine;
