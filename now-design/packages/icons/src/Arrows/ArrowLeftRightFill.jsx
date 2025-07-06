import React from 'react';

const ArrowLeftRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 13.3333V9.99996L17.5 14.1666L13.3333 18.3333V15H3.33333V13.3333H13.3333ZM6.66667 1.66663V4.99913L16.6667 4.99996V6.66663H6.66667V9.99996L2.5 5.83329L6.66667 1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftRightFill;
