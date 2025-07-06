import React from 'react';

const Menu2Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.5 3.33337H17.5V5.00004H2.5V3.33337ZM2.5 9.16671H12.5V10.8334H2.5V9.16671ZM2.5 15H17.5V16.6667H2.5V15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Menu2Line;
