import React from 'react';

const SkipRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 5V15H12.5V5H14.1667ZM10.8333 10L5.83334 15V5L10.8333 10Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipRightFill;
