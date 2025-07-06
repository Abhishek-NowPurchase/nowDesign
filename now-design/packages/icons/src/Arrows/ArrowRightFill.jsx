import React from 'react';

const ArrowRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99999 10.8334H3.33333V9.16671H9.99999V3.33337L16.6667 10L9.99999 16.6667V10.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightFill;
