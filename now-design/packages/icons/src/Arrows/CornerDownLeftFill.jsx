import React from 'react';

const CornerDownLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8334 11.6665L15.8335 4.16665L14.1668 4.16663L14.1667 9.99988L7.84504 9.99996V5.48813L2.49988 10.8333L7.84504 16.1785V11.6666L15.8334 11.6665Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerDownLeftFill;
