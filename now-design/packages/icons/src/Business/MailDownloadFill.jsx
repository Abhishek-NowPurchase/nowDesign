import React from 'react';

const MailDownloadFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3333 10.6689C17.5979 10.2435 16.744 10 15.8333 10C13.0719 10 10.8333 12.2386 10.8333 15C10.8333 15.9108 11.0768 16.7646 11.5022 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V10.6689ZM10.0505 9.73575L4.70598 5.19808L3.62728 6.46858L10.0609 11.9309L16.3786 6.46347L15.288 5.2032L10.0505 9.73575ZM16.6666 15H19.1666L15.8333 18.3333L12.5 15H15V11.6667H16.6666V15Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailDownloadFill;
