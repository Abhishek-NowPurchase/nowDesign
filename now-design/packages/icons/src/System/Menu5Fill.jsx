import React from 'react';

const Menu5Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 15V16.6667H5V15H15ZM17.5 9.16671V10.8334H2.5V9.16671H17.5ZM15 3.33337V5.00004H5V3.33337H15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Menu5Fill;
