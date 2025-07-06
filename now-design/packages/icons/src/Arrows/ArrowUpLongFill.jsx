import React from 'react';

const ArrowUpLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16674 18.3335L10.8333 18.3336V7.0118H15.3452L9.99999 1.66663L4.65479 7.0118H9.16666L9.16674 18.3335Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpLongFill;
