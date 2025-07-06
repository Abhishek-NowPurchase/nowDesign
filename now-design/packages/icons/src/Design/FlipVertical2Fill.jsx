import React from 'react';

const FlipVertical2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333ZM6.66667 8.33333L10 5L13.3333 8.33333H10.8333V11.6667H13.3333L10 15L6.66667 11.6667H9.16667V8.33333H6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlipVertical2Fill;
