import React from 'react';

const Layout3Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 17.5C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333ZM6.66667 8.33333H4.16667V15.8333H6.66667V8.33333ZM15.8333 8.33333H8.33333V15.8333H15.8333V8.33333ZM15.8333 4.16667H4.16667V6.66667H15.8333V4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Layout3Line;
