import React from 'react';

const MenuAddFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15 12.5L14.9992 15H17.5V16.6667H14.9992L15 19.1667H13.3333L13.3325 16.6667H10.8333V15H13.3325L13.3333 12.5H15ZM9.16667 15V16.6667H2.5V15H9.16667ZM17.5 9.16671V10.8334H2.5V9.16671H17.5ZM17.5 3.33337V5.00004H2.5V3.33337H17.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuAddFill;
