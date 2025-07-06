import React from 'react';

const ExpandDiagonalSLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.9882 5.83329H10V4.16663H15.8333V9.99996H14.1667V7.0118L7.01184 14.1666H10V15.8333H4.16667V9.99996H5.83333V12.9881L12.9882 5.83329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonalSLine;
