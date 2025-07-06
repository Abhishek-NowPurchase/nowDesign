import React from 'react';

const ArrowUpLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8334 6.52373V16.6667H9.16675V6.52373L4.69678 10.9937L3.51826 9.81521L10.0001 3.33337L16.4819 9.81521L15.3034 10.9937L10.8334 6.52373Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpLine;
