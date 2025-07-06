import React from 'react';

const CursorFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.5912 10.3002L14.1674 17.3781L11.8182 18.2331L9.242 11.1553L5.76514 13.7851L7.00741 1.36096L15.9452 10.0799L11.5912 10.3002Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CursorFill;
