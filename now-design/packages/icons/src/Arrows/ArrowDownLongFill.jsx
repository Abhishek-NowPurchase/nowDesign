import React from 'react';

const ArrowDownLongFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 1.6665L9.16667 1.66638V12.9882H4.65485L10 18.3334L15.3452 12.9882H10.8333L10.8333 1.6665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownLongFill;
