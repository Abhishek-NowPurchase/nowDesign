import React from 'react';

const ArrowDownWideFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 13.0262L17.4732 9.06981L16.6934 7.5968L10 11.1404L3.30658 7.5968L2.52676 9.06981L10 13.0262Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownWideFill;
