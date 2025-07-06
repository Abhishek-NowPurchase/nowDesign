import React from 'react';

const MailLockLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6666 6.0316L10.0598 11.9483L3.33329 6.01328V15.8333H10.8333V17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V9.16667H16.6666V6.0316ZM16.2508 4.16667H3.75951L10.0515 9.71833L16.2508 4.16667ZM18.3333 14.1667H19.1666V18.3333H12.5V14.1667H13.3333V13.3333C13.3333 11.9526 14.4525 10.8333 15.8333 10.8333C17.214 10.8333 18.3333 11.9526 18.3333 13.3333V14.1667ZM16.6666 14.1667V13.3333C16.6666 12.8731 16.2935 12.5 15.8333 12.5C15.373 12.5 15 12.8731 15 13.3333V14.1667H16.6666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailLockLine;
