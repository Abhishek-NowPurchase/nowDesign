import React from 'react';

const TodoFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.1667 1.66667H16.6667C17.1269 1.66667 17.5 2.03977 17.5 2.5V17.5C17.5 17.9603 17.1269 18.3333 16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9603 2.5 17.5V2.5C2.5 2.03977 2.8731 1.66667 3.33333 1.66667H5.83333V0H7.5V1.66667H12.5V0H14.1667V1.66667ZM5.83333 6.66667V8.33333H14.1667V6.66667H5.83333ZM5.83333 10V11.6667H14.1667V10H5.83333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TodoFill;
