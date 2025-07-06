import React from 'react';

const ReservedFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 12.5V15.8333H13.3333V17.5H6.66667V15.8333H9.16667V12.5H3.33333C2.8731 12.5 2.5 12.1269 2.5 11.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V11.6667C17.5 12.1269 17.1269 12.5 16.6667 12.5H10.8333ZM6.66667 6.66667V8.33333H13.3333V6.66667H6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ReservedFill;
