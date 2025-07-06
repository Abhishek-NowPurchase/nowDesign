import React from 'react';

const ArrowUpDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 6.66667H6.6675L6.66667 16.6667H5V6.66667H1.66667L5.83333 2.5L10 6.66667ZM18.3333 13.3333L14.1667 17.5L10 13.3333H13.3333V3.33333H15V13.3333H18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpDownFill;
