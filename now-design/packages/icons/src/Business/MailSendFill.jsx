import React from 'react';

const MailSendFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.66667 4.58333V3.32783C1.66667 2.87063 2.04609 2.5 2.49317 2.5H17.5068C17.9633 2.5 18.3333 2.87079 18.3333 3.32783V16.6722C18.3333 17.1293 17.9539 17.5 17.5068 17.5H2.49317C2.03671 17.5 1.66667 17.1292 1.66667 16.6722V15.8333H16.6667V6.08333L10 12.0833L1.66667 4.58333ZM0 8.33333H4.16667V10H0V8.33333ZM0 12.5H6.66667V14.1667H0V12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailSendFill;
