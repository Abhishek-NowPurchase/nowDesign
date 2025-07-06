import React from 'react';

const PlayLargeLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.66667 15.3262V4.67366L15.1887 9.99994L6.66667 15.3262ZM5 3.17012V16.8297C5 17.4843 5.71996 17.8833 6.275 17.5364L17.2027 10.7066C17.7249 10.3802 17.7249 9.61961 17.2027 9.29327L6.275 2.46345C5.71996 2.11655 5 2.51559 5 3.17012Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayLargeLine;
