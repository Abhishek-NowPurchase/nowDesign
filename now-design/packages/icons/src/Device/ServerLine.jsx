import React from 'react';

const ServerLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 9.16667H15.8333V4.16667H4.16667V9.16667ZM17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333ZM15.8333 10.8333H4.16667V15.8333H15.8333V10.8333ZM5.83333 12.5H8.33333V14.1667H5.83333V12.5ZM5.83333 5.83333H8.33333V7.5H5.83333V5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ServerLine;
