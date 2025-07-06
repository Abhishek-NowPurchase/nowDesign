import React from 'react';

const ArchiveStackLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 4.16667H16.6667V2.5H3.33333V4.16667ZM16.6667 7.5H3.33333V5.83333H16.6667V7.5ZM2.5 9.16667H8.33333V10.8333H11.6667V9.16667H17.5V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V9.16667ZM13.3333 10.8333V12.5H6.66667V10.8333H4.16667V15.8333H15.8333V10.8333H13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArchiveStackLine;
