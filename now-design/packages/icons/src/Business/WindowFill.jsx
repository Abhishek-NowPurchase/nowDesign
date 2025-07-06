import React from 'react';

const WindowFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V16.6667C18.3334 17.1269 17.9603 17.5 17.5001 17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5ZM16.6667 8.33333H3.33341V15.8333H16.6667V8.33333ZM4.16675 5V6.66667H5.83341V5H4.16675ZM7.50008 5V6.66667H9.16675V5H7.50008Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default WindowFill;
