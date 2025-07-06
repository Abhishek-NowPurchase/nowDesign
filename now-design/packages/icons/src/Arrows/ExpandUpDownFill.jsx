import React from 'react';

const ExpandUpDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 7.5L10 2.5L5 7.5H15ZM15 12.5L10 17.5L5 12.5H15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandUpDownFill;
