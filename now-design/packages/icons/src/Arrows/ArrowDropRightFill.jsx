import React from 'react';

const ArrowDropRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 9.99996L8.33333 13.3333V6.66663L11.6667 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropRightFill;
