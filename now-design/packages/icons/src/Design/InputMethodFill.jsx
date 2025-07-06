import React from 'react';

const InputMethodFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5H16.6667C17.1269 2.5 17.5 2.8731 17.5 3.33333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5ZM8.22404 12.5H11.7759L12.459 14.1667H14.3056L10.8333 5.83333H9.16667L5.69444 14.1667H7.54098L8.22404 12.5ZM8.90708 10.8333L10 8.16667L11.0929 10.8333H8.90708Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InputMethodFill;
