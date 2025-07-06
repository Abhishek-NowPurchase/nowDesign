import React from 'react';

const ChatPollLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5001 2.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37925L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001ZM16.6667 4.16667H3.33341V15.3208L4.80286 14.1667H16.6667V4.16667ZM10.8334 5.83333V12.5H9.16675V5.83333H10.8334ZM14.1667 7.5V12.5H12.5001V7.5H14.1667ZM7.50008 9.16667V12.5H5.83341V9.16667H7.50008Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatPollLine;
