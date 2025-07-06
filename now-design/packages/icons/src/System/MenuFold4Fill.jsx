import React from 'react';

const MenuFold4Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 3.33337H5.83333V5.00004H17.5V3.33337ZM17.5 9.16671H9.16667V10.8334H17.5V9.16671ZM17.5 15H5.83333V16.6667H17.5V15ZM2.5 14.1667V5.83337L6.66667 9.99971L2.5 14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuFold4Fill;
