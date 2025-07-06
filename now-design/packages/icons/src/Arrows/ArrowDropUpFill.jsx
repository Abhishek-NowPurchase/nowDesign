import React from 'react';

const ArrowDropUpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 8.33337L13.3333 11.6667H6.66666L10 8.33337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropUpFill;
