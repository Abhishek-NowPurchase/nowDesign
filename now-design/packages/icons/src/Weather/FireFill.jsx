import React from 'react';

const FireFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 19.1667C6.54822 19.1667 3.75 16.3684 3.75 12.9167C3.75 11.1218 4.50655 9.50375 5.71816 8.36383C6.83669 7.31146 9.58333 5.41626 9.16667 1.25C14.1667 4.58333 16.6667 7.91667 11.6667 12.9167C12.5 12.9167 13.75 12.9167 15.8333 10.858C16.0581 11.5027 16.25 12.1954 16.25 12.9167C16.25 16.3684 13.4517 19.1667 10 19.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FireFill;
