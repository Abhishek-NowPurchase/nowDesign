import React from 'react';

const ArrowLeftUpBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333ZM6.66667 6.66667H13.6785L10.7618 9.58333L13.9226 12.7441L12.7441 13.9226L9.58333 10.7618L6.66667 13.6785V6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftUpBoxFill;
