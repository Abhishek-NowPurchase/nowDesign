import React from 'react';

const PauseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 4.16663H6.66667V15.8333H5V4.16663ZM13.3333 4.16663H15V15.8333H13.3333V4.16663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PauseFill;
