import React from 'react';

const CollapseDiagonalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.0833 9.16675H10.8333V2.91673L13.3691 5.45247L16.0774 2.74414L17.2559 3.92265L14.5476 6.63098L17.0833 9.16675ZM2.91673 10.8333H9.16675V17.0833L6.63098 14.5476L3.92265 17.2559L2.74414 16.0774L5.45247 13.3691L2.91673 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CollapseDiagonalFill;
