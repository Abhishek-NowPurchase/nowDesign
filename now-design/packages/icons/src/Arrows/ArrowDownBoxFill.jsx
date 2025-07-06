import React from 'react';

const ArrowDownBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333ZM9.99967 14.7133L5.0415 9.75517H9.16633V5.28524H10.833V9.75517H14.9578L9.99967 14.7133Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownBoxFill;
