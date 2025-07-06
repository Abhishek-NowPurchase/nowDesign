import React from 'react';

const CollapseDiagonal2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.91673 9.16675H9.16675V2.91673L6.63098 5.45247L3.92265 2.74414L2.74414 3.92265L5.45247 6.63098L2.91673 9.16675ZM17.0833 10.8333H10.8333V17.0833L13.3691 14.5476L16.0774 17.2559L17.2559 16.0774L14.5476 13.3691L17.0833 10.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CollapseDiagonal2Fill;
