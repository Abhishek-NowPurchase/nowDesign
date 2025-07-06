import React from 'react';

const LayoutHorizontalLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16667 15.8333H15.8333V4.16667H4.16667V15.8333ZM2.5 3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333ZM5.83333 7.5H14.1667V5.83333H5.83333V7.5ZM14.1667 10.8333H5.83333V9.16667H14.1667V10.8333ZM5.83333 14.1667H14.1667V12.5H5.83333V14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LayoutHorizontalLine;
