import React from 'react';

const ArrowUpSLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99991 9.02363L5.87516 13.1485L4.69666 11.97L9.99991 6.66663L15.3032 11.97L14.1247 13.1485L9.99991 9.02363Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowUpSLine;
