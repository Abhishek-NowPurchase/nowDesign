import React from 'react';

const SkipUpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 5.83337H15V7.50004H5V5.83337ZM10 9.16671L5 14.1667H15L10 9.16671Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipUpFill;
