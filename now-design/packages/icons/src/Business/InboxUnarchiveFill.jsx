import React from 'react';

const InboxUnarchiveFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6666 2.5L18.3333 5.83333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V5.83627L3.33329 2.5H16.6666ZM9.99996 8.33333L6.66663 11.6667H9.16662V15H10.8333V11.6667H13.3333L9.99996 8.33333ZM15.6366 4.16667H4.36329L3.53079 5.83333H16.47L15.6366 4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default InboxUnarchiveFill;
