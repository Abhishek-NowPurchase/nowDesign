import React from 'react';

const InboxArchiveFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33329 2.5H16.6666L18.3333 5.83333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V5.83627L3.33329 2.5ZM10.8333 11.6667V8.33333H9.16662V11.6667H6.66663L9.99996 15L13.3333 11.6667H10.8333ZM16.4699 5.83333L15.6365 4.16667H4.36376L3.53116 5.83333H16.4699Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InboxArchiveFill;
