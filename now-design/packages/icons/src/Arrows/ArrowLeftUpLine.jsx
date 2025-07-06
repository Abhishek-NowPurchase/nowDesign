import React from 'react';

const ArrowLeftUpLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.84518 6.66667L15.0173 13.8388L13.8388 15.0173L6.66667 7.84518V14.1667H5V5H14.1667V6.66667H7.84518Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftUpLine;
