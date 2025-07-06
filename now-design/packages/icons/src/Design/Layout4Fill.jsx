import React from 'react';

const Layout4Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 10.8333V17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V10.8333H9.16667ZM10.8333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H10.8333V2.5ZM2.5 3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H9.16667V9.16667H2.5V3.33333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Layout4Fill;
