import React from 'react';

const MailOpenFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.86898 5.71194L9.57454 1.09048C9.83846 0.932188 10.1682 0.932247 10.432 1.09063L18.131 5.71192C18.2565 5.78723 18.3333 5.92284 18.3333 6.06917V16.6666C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6666V6.06927C1.66663 5.92288 1.74344 5.78724 1.86898 5.71194ZM15.288 6.86984L10.0505 11.4024L4.70598 6.86472L3.62728 8.13523L10.0609 13.5976L16.3786 8.13011L15.288 6.86984Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailOpenFill;
