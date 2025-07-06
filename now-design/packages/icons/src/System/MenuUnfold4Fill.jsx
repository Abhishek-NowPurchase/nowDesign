import React from 'react';

const MenuUnfold4Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 3.33337H2.5V5.00004H14.1667V3.33337ZM10.8333 9.16671H2.5V10.8334H10.8333V9.16671ZM14.1667 15H2.5V16.6667H14.1667V15ZM17.5 14.1667V5.83337L13.3333 9.99971L17.5 14.1667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuUnfold4Fill;
