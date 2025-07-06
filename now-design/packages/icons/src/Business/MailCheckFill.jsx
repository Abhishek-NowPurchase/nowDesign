import React from 'react';

const MailCheckFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.3333 11.1178C17.812 10.9336 17.251 10.8333 16.6666 10.8333C13.9052 10.8333 11.6666 13.0719 11.6666 15.8333C11.6666 16.4178 11.7669 16.9787 11.9511 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V11.1178ZM10.0505 9.73575L4.70598 5.19808L3.62728 6.46858L10.0609 11.9309L16.3786 6.46347L15.288 5.2032L10.0505 9.73575ZM15.8333 18.3333L12.887 15.3871L14.0655 14.2086L15.8333 15.9763L18.7795 13.03L19.958 14.2086L15.8333 18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailCheckFill;
