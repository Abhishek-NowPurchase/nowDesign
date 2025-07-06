import React from 'react';

const ArrowRightSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 10L8.33334 15V5L13.3333 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightSFill;
