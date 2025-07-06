import React from 'react';

const ArrowLeftSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66666 10L11.6667 5V15L6.66666 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftSFill;
