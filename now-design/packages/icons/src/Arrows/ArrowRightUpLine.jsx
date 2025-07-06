import React from 'react';

const ArrowRightUpLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3364 7.84518L6.16426 15.0173L4.98576 13.8388L12.1579 6.66667H5.83644V5H15.0031V14.1667H13.3364V7.84518Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightUpLine;
