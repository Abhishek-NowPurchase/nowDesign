import React from 'react';

const PlayList2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3337 15V16.6666H1.66699V15H18.3337ZM1.66699 2.91663L8.33366 7.08329L1.66699 11.25V2.91663ZM18.3337 9.16663V10.8333H10.0003V9.16663H18.3337ZM3.33366 5.92371V8.24288L5.189 7.08329L3.33366 5.92371ZM18.3337 3.33329V4.99996H10.0003V3.33329H18.3337Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PlayList2Line;
