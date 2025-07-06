import React from 'react';

const ArrowDropLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.857 10.0004L12.2141 12.3574L11.0355 13.5359L7.5 10.0004L11.0355 6.46484L12.2141 7.64336L9.857 10.0004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropLeftLine;
