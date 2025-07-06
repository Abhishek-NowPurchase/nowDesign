import React from 'react';

const ArrowLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.5237 9.16658H16.6667V10.8332H6.5237L10.9937 15.3032L9.81518 16.4817L3.33334 9.99992L9.81518 3.51807L10.9937 4.69657L6.5237 9.16658Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftLine;
