import React from 'react';

const ServerFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V9.16667H2.5V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM2.5 10.8333H17.5V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V10.8333ZM5.83333 13.3333V15H8.33333V13.3333H5.83333ZM5.83333 5V6.66667H8.33333V5H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ServerFill;
