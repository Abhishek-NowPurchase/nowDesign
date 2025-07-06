import React from 'react';

const ChatCheckFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.37887 15.8333L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37887ZM9.41083 10.1011L7.34843 8.03871L6.16992 9.21725L9.41083 12.4581L14.1248 7.74407L12.9463 6.56557L9.41083 10.1011Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatCheckFill;
