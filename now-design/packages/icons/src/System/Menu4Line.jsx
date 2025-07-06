import React from 'react';

const Menu4Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3333 15V16.6667H4.16667V15H13.3333ZM17.5 9.16671V10.8334H2.5V9.16671H17.5ZM15.8333 3.33337V5.00004H6.66667V3.33337H15.8333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Menu4Line;
