import React from 'react';

const DoorFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14.9983 2.5C15.4586 2.5 15.8317 2.8731 15.8317 3.33333V16.6667C15.8317 17.1269 15.4586 17.5 14.9983 17.5H4.99837C4.53813 17.5 4.16504 17.1269 4.16504 16.6667V3.33333C4.16504 2.8731 4.53813 2.5 4.99837 2.5H14.9983ZM11.665 9.16667C11.2048 9.16667 10.8317 9.53975 10.8317 10C10.8317 10.4602 11.2048 10.8333 11.665 10.8333C12.1252 10.8333 12.4983 10.4602 12.4983 10C12.4983 9.53975 12.1252 9.16667 11.665 9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DoorFill;
