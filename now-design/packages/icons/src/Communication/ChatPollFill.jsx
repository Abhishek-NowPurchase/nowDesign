import React from 'react';

const ChatPollFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5001 2.5C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37925L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001ZM10.8334 5.83333H9.16675V12.5H10.8334V5.83333ZM14.1667 7.5H12.5001V12.5H14.1667V7.5ZM7.50008 9.16667H5.83341V12.5H7.50008V9.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatPollFill;
