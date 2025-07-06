import React from 'react';

const ExpandDiagonalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 2.5H11.25L13.7857 5.03574L11.0774 7.74407L12.2559 8.92258L14.9642 6.21426L17.5 8.75V2.5ZM2.5 17.5H8.75L6.21426 14.9642L8.92258 12.2559L7.74407 11.0774L5.03574 13.7857L2.5 11.25V17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonalFill;
