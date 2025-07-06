import React from 'react';

const CornerDownLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8334 11.6666L15.8335 4.16665L14.1668 4.16663L14.1668 9.9999L5.69025 9.99998L8.98167 6.70852L7.80319 5.53001L2.49989 10.8333L7.80319 16.1367L8.98167 14.9581L5.69022 11.6667L15.8334 11.6666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerDownLeftLine;
