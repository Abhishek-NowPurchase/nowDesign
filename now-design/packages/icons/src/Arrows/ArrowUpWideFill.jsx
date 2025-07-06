import React from 'react';

const ArrowUpWideFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 6.97375L17.4733 10.9301L16.6934 12.4031L10 8.85956L3.30658 12.4031L2.52676 10.9301L10 6.97375Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpWideFill;
