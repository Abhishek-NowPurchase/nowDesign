import React from 'react';

const Layout2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.16667 2.5V17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H9.16667ZM17.5 10.8333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H10.8333V10.8333H17.5ZM16.6667 2.5C17.1269 2.5 17.5 2.8731 17.5 3.33333V9.16667H10.8333V2.5H16.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Layout2Fill;
