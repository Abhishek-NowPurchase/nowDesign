import React from 'react';

const ArrowDownSLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99991 10.9762L14.1247 6.85144L15.3032 8.02995L9.99991 13.3333L4.69666 8.02995L5.87516 6.85144L9.99991 10.9762Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownSLine;
