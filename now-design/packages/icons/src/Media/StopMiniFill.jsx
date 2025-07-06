import React from 'react';

const StopMiniFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 5.83333V14.1667C5 14.6269 5.3731 15 5.83333 15H14.1667C14.6269 15 15 14.6269 15 14.1667V5.83333C15 5.3731 14.6269 5 14.1667 5H5.83333C5.3731 5 5 5.3731 5 5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default StopMiniFill;
