import React from 'react';

const ArrowDropLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.5 9.99996L10.8333 6.66663V13.3333L7.5 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropLeftFill;
