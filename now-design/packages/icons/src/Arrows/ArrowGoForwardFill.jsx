import React from 'react';

const ArrowGoForwardFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 5.83337H9.16667C6.40524 5.83337 4.16667 8.07195 4.16667 10.8334C4.16667 13.5948 6.40524 15.8334 9.16667 15.8334H16.6667V17.5H9.16667C5.48477 17.5 2.5 14.5153 2.5 10.8334C2.5 7.15147 5.48477 4.16671 9.16667 4.16671H13.3333V0.833374L18.3333 5.00004L13.3333 9.16671V5.83337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowGoForwardFill;
