import React from 'react';

const FlipHorizontal2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333ZM8.33333 6.66667V9.16667H11.6667V6.66667L15 10L11.6667 13.3333V10.8333H8.33333V13.3333L5 10L8.33333 6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FlipHorizontal2Fill;
