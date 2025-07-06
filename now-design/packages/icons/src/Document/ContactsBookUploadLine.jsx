import React from 'react';

const ContactsBookUploadLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8374 1.66663C16.7557 1.66663 17.5 2.41513 17.5 3.32563V16.6743C17.5 17.5905 16.7562 18.3333 15.8374 18.3333H2.5V1.66663H15.8374ZM5.83333 3.33329H4.16667V16.6666H5.83333V3.33329ZM15.8333 3.33329H7.5V16.6666H15.8333V3.33329ZM11.6667 6.66663L15 9.99996H12.5V13.3333H10.8333V9.99996H8.33333L11.6667 6.66663ZM20 9.99996V13.3333H18.3333V9.99996H20ZM20 4.99996V8.33329H18.3333V4.99996H20Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ContactsBookUploadLine;
