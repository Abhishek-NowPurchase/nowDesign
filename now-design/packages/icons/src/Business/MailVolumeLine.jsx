import React from 'react';

const MailVolumeLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.6666 12.0833V19.5833L13.8891 17.5H11.6666V14.1667H13.8891L16.6666 12.0833ZM17.5 2.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V10.8333H16.6666V6.03083L10.0598 11.9483L3.33329 6.0125V15.8333H9.99996V17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5H17.5ZM17.5 14.1667C18.4205 14.1667 19.1666 14.9128 19.1666 15.8333C19.1666 16.712 18.4867 17.4318 17.6244 17.4954L17.5 17.5V14.1667ZM16.25 4.16667H3.75913L10.0508 9.71833L16.25 4.16667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailVolumeLine;
