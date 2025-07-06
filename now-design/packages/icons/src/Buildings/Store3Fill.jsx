import React from 'react';

const Store3Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5 10.8333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33335C2.87312 17.5 2.50002 17.1269 2.50002 16.6667V10.8333H1.66669V9.16667L2.50002 5H17.5L18.3334 9.16667V10.8333H17.5ZM4.16669 10.8333V15.8333H15.8334V10.8333H4.16669ZM5.00002 11.6667H11.6667V14.1667H5.00002V11.6667ZM2.50002 2.5H17.5V4.16667H2.50002V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Store3Fill;
