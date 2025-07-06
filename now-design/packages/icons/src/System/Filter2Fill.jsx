import React from 'react';

const Filter2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33301 11.6667L3.33301 4.16667V2.5H16.6663V4.16667L11.6663 11.6667V16.6667L8.33301 18.3333V11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Filter2Fill;
