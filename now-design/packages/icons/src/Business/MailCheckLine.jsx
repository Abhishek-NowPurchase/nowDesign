import React from 'react';

const MailCheckLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3333 11.6667H16.6666V6.0316L10.0598 11.9483L3.33329 6.01328V15.8333H11.6666V17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V11.6667ZM3.75951 4.16667L10.0515 9.71833L16.2508 4.16667H3.75951ZM15.8333 18.3333L12.887 15.3871L14.0655 14.2086L15.8333 15.9763L18.7795 13.03L19.958 14.2086L15.8333 18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailCheckLine;
