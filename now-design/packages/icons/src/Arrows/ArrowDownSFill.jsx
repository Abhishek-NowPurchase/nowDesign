import React from 'react';

const ArrowDownSFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 13.3334L5 8.33337H15L10 13.3334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownSFill;
