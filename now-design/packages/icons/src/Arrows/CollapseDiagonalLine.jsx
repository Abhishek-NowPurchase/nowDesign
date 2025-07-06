import React from 'react';

const CollapseDiagonalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M12.5 3.3334H10.8333V9.16675H16.6667V7.50007H13.6785L17.2559 3.92265L16.0774 2.74414L12.5 6.32155V3.3334ZM3.3334 12.5H6.32155L2.74414 16.0774L3.92265 17.2559L7.50007 13.6785V16.6667H9.16675V10.8333H3.3334V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CollapseDiagonalLine;
