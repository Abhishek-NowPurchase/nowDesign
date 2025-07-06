import React from 'react';

const ExpandDiagonal2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 2.5H8.75L6.21426 5.03574L8.92258 7.74407L7.74407 8.92258L5.03574 6.21426L2.5 8.75V2.5ZM17.5 17.5H11.25L13.7857 14.9642L11.0774 12.2559L12.2559 11.0774L14.9642 13.7857L17.5 11.25V17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandDiagonal2Fill;
