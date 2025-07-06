import React from 'react';

const ChatHeartFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.37887 15.8333L1.66675 18.75V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V15C18.3334 15.4602 17.9603 15.8333 17.5001 15.8333H5.37887ZM10.0149 12.2498L12.8138 9.45083C13.5461 8.71858 13.5461 7.53141 12.8138 6.79917C12.0816 6.06694 10.8944 6.06694 10.1622 6.79917L10.0149 6.94649L9.86758 6.79917C9.13533 6.06694 7.94816 6.06694 7.21592 6.79917C6.48369 7.53141 6.48369 8.71858 7.21592 9.45083L10.0149 12.2498Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatHeartFill;
