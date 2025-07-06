import React from 'react';

const ArrowUpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 10V16.6667H9.16667V10H3.33334L10 3.33337L16.6667 10H10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpFill;
