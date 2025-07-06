import React from 'react';

const PlayLargeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 16.8297V3.17012C5 2.51559 5.71996 2.11655 6.275 2.46345L17.2027 9.29327C17.7249 9.61961 17.7249 10.3802 17.2027 10.7066L6.275 17.5364C5.71996 17.8833 5 17.4843 5 16.8297Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayLargeFill;
