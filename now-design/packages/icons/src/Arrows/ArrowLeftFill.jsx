import React from 'react';

const ArrowLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99999 10.8334V16.6667L3.33333 10L9.99999 3.33337V9.16671H16.6667V10.8334H9.99999Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftFill;
