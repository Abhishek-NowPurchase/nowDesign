import React from 'react';

const ArrowDropUpLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 9.857L7.64295 12.2141L6.46443 11.0355L10 7.5L13.5355 11.0355L12.357 12.2141L10 9.857Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropUpLine;
