import React from 'react';

const ArrowDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8334 13.4764L15.3034 9.00637L16.4819 10.1849L10.0001 16.6667L3.51827 10.1849L4.69678 9.00637L9.16675 13.4764V3.33337H10.8334V13.4764Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowDownLine;
