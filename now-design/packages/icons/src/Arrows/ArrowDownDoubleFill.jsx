import React from 'react';

const ArrowDownDoubleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 15.9702L15.1726 10.7976L13.9941 9.61913L10 13.6132L6.00593 9.61913L4.82742 10.7976L10 15.9702ZM10 11.262L15.1726 6.0894L13.9941 4.91089L10 8.90496L6.00593 4.91089L4.82742 6.0894L10 11.262Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownDoubleFill;
