import React from 'react';

const ChatUnreadFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M17.5001 5.83337C18.8808 5.83337 20.0001 4.71408 20.0001 3.33337C20.0001 1.95267 18.8808 0.833374 17.5001 0.833374C16.1193 0.833374 15.0001 1.95267 15.0001 3.33337C15.0001 4.71408 16.1193 5.83337 17.5001 5.83337ZM17.5001 7.50004C17.7855 7.50004 18.0642 7.47135 18.3334 7.41669V15C18.3334 15.4603 17.9603 15.8334 17.5001 15.8334H5.37887L1.66675 18.75V3.33337C1.66675 2.87314 2.03985 2.50004 2.50008 2.50004H13.4167C13.3621 2.7693 13.3334 3.04798 13.3334 3.33337C13.3334 5.63456 15.1989 7.50004 17.5001 7.50004Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ChatUnreadFill;
