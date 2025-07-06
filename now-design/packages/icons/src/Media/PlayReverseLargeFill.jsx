import React from 'react';

const PlayReverseLargeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.9996 16.8297V3.17012C14.9996 2.51559 14.2797 2.11655 13.7246 2.46345L2.79694 9.29327C2.27472 9.61961 2.27472 10.3802 2.79694 10.7066L13.7246 17.5364C14.2796 17.8833 14.9996 17.4843 14.9996 16.8297Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayReverseLargeFill;
