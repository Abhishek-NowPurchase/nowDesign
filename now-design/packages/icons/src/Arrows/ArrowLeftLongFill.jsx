import React from 'react';

const ArrowLeftLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3336 10.8333L18.3337 9.16672H7.01183V4.65491L1.66666 10.0001L7.01183 15.3452V10.8334L18.3336 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftLongFill;
