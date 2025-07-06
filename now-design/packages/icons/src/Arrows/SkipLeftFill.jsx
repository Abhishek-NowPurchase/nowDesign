import React from 'react';

const SkipLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83333 15V5H7.49999V15H5.83333ZM9.16666 10L14.1667 5V15L9.16666 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipLeftFill;
