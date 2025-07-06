import React from 'react';

const MailDownloadLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6667 6.0316L10.0599 11.9483L3.33341 6.01328V15.8333H10.8334V17.5H2.50008C2.03985 17.5 1.66675 17.1269 1.66675 16.6667V3.33333C1.66675 2.8731 2.03985 2.5 2.50008 2.5H17.5001C17.9603 2.5 18.3334 2.8731 18.3334 3.33333V10H16.6667V6.0316ZM16.2509 4.16667H3.75963L10.0517 9.71833L16.2509 4.16667ZM16.6667 15H19.1667L15.8334 18.3333L12.5001 15H15.0001V11.6667H16.6667V15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailDownloadLine;
