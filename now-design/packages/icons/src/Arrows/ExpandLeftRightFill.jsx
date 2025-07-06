import React from 'react';

const ExpandLeftRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.5 5L2.5 10L7.5 15V5ZM12.5 15L17.5 10L12.5 5V15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandLeftRightFill;
