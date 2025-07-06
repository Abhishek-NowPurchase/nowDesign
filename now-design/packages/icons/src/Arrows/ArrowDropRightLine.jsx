import React from 'react';

const ArrowDropRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.1431 10.0004L7.78605 7.64336L8.96458 6.46484L12.5001 10.0004L8.96458 13.5359L7.78605 12.3574L10.1431 10.0004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropRightLine;
