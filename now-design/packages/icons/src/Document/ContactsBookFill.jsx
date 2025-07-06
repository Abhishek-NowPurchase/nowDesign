import React from 'react';

const ContactsBookFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.83333 1.66663V18.3333H2.5V1.66663H5.83333ZM7.5 1.66663H15.8374C16.7557 1.66663 17.5 2.41513 17.5 3.32563V16.6743C17.5 17.5905 16.7562 18.3333 15.8374 18.3333H7.5V1.66663ZM18.3333 4.99996H20V8.33329H18.3333V4.99996ZM18.3333 9.99996H20V13.3333H18.3333V9.99996ZM12.5 9.99996C13.4205 9.99996 14.1667 9.25379 14.1667 8.33329C14.1667 7.41282 13.4205 6.66663 12.5 6.66663C11.5795 6.66663 10.8333 7.41282 10.8333 8.33329C10.8333 9.25379 11.5795 9.99996 12.5 9.99996ZM10 13.3333H15C15 11.9525 13.8807 10.8333 12.5 10.8333C11.1192 10.8333 10 11.9525 10 13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContactsBookFill;
