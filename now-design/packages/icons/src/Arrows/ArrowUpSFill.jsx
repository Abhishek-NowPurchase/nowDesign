import React from 'react';

const ArrowUpSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 6.66663L15 11.6666H5L10 6.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpSFill;
