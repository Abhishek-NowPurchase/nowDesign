import React from 'react';

const MenuFold4Line = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5002 3.33337H5.83355V5.00004H17.5002V3.33337ZM17.5002 9.16671H9.1669V10.8334H17.5002V9.16671ZM17.5002 15H5.83355V16.6667H17.5002V15ZM1.6582 7.34514L2.83671 6.16662L6.66688 9.99679L2.83671 13.827L1.6582 12.6485L4.30985 9.99679L1.6582 7.34514Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MenuFold4Line;
