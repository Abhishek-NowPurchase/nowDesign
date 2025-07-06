import React from 'react';

const MailOpenLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M1.86898 5.71194L9.57454 1.09048C9.83846 0.932188 10.1682 0.932247 10.432 1.09063L18.131 5.71192C18.2565 5.78723 18.3333 5.92284 18.3333 6.06917V16.6666C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6666V6.06927C1.66663 5.92288 1.74344 5.78724 1.86898 5.71194ZM3.33329 6.77716V15.8333H16.6666V6.77676L10.003 2.77696L3.33329 6.77716ZM10.0497 11.4152L14.463 7.69608L15.537 8.97056L10.0616 13.5847L4.46997 8.9764L5.52995 7.69023L10.0497 11.4152Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MailOpenLine;
