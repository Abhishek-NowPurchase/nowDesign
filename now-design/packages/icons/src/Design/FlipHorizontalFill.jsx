import React from 'react';

const FlipHorizontalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16675 1.66663V18.3333H10.8334V1.66663H9.16675ZM5.83341 4.99996V15H3.33341V4.99996H5.83341ZM3.33341 3.33329C2.41294 3.33329 1.66675 4.07948 1.66675 4.99996V15C1.66675 15.9205 2.41294 16.6666 3.33341 16.6666H5.83341C6.75389 16.6666 7.50008 15.9205 7.50008 15V4.99996C7.50008 4.07948 6.75389 3.33329 5.83341 3.33329H3.33341ZM12.5001 4.99996C12.5001 4.07948 13.2462 3.33329 14.1667 3.33329H16.6667C17.5872 3.33329 18.3334 4.07948 18.3334 4.99996V15C18.3334 15.9205 17.5872 16.6666 16.6667 16.6666H14.1667C13.2462 16.6666 12.5001 15.9205 12.5001 15V4.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlipHorizontalFill;
