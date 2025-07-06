import React from 'react';

const ArrowRightLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66644 10.8333L1.66632 9.16672H12.9882V4.65491L18.3333 10.0001L12.9882 15.3452V10.8334L1.66644 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightLongFill;
