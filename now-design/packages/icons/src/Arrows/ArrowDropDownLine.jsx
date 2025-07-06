import React from 'react';

const ArrowDropDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 12.5005L6.46445 8.96504L7.64296 7.7865L10 10.1435L12.357 7.7865L13.5355 8.96504L10 12.5005Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDropDownLine;
