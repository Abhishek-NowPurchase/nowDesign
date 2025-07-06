import React from 'react';

const ExpandDiagonalS2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83333 7.0118V9.99996H4.16666V4.16663H10V5.83329H7.01184L14.1667 12.9881V9.99996H15.8333V15.8333H10V14.1666H12.9882L5.83333 7.0118Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonalS2Line;
