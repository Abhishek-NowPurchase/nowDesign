import React from 'react';

const ArrowDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 10H16.6667L10 16.6667L3.33333 10H9.16667V3.33337H10.8333V10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownFill;
