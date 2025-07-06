import React from 'react';

const GridFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6667 8.33333V11.6667H8.33333V8.33333H11.6667ZM13.3333 8.33333H17.5V11.6667H13.3333V8.33333ZM11.6667 17.5H8.33333V13.3333H11.6667V17.5ZM13.3333 17.5V13.3333H17.5V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H13.3333ZM11.6667 2.5V6.66667H8.33333V2.5H11.6667ZM13.3333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V6.66667H13.3333V2.5ZM6.66667 8.33333V11.6667H2.5V8.33333H6.66667ZM6.66667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V13.3333H6.66667V17.5ZM6.66667 2.5V6.66667H2.5V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GridFill;
