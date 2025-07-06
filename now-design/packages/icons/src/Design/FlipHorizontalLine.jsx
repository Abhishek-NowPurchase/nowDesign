import React from 'react';

const FlipHorizontalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16675 1.66663V18.3333H10.8334V1.66663H9.16675ZM1.66675 4.99996C1.66675 4.07948 2.41294 3.33329 3.33341 3.33329H5.83341C6.75389 3.33329 7.50008 4.07948 7.50008 4.99996V15C7.50008 15.9205 6.75389 16.6666 5.83341 16.6666H3.33341C2.41294 16.6666 1.66675 15.9205 1.66675 15V4.99996ZM16.6667 4.99996V15H14.1667V4.99996H16.6667ZM14.1667 3.33329C13.2462 3.33329 12.5001 4.07948 12.5001 4.99996V15C12.5001 15.9205 13.2462 16.6666 14.1667 16.6666H16.6667C17.5872 16.6666 18.3334 15.9205 18.3334 15V4.99996C18.3334 4.07948 17.5872 3.33329 16.6667 3.33329H14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlipHorizontalLine;
