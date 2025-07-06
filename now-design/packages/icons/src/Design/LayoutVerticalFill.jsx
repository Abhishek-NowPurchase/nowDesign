import React from 'react';

const LayoutVerticalFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333ZM5.83327 14.1666V5.83327H7.49994V14.1666H5.83327ZM9.16658 5.83327H10.8333V14.1666H9.16658V5.83327ZM12.4999 5.83327H14.1666V14.1666H12.4999V5.83327Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LayoutVerticalFill;
