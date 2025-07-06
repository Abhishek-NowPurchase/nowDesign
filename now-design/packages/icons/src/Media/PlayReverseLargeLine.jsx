import React from 'react';

const PlayReverseLargeLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3329 15.3262V4.67366L4.81093 9.99994L13.3329 15.3262ZM14.9996 3.17012V16.8297C14.9996 17.4843 14.2796 17.8833 13.7246 17.5364L2.79694 10.7066C2.27472 10.3802 2.27472 9.61961 2.79694 9.29327L13.7246 2.46345C14.2797 2.11655 14.9996 2.51559 14.9996 3.17012Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayReverseLargeLine;
