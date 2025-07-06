import React from 'react';

const ArrowDropDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99999 11.6667L6.66666 8.33337H13.3333L9.99999 11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropDownFill;
