import React from 'react';

const ProhibitedFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M16.4527 15.2739C17.6283 13.8374 18.3337 12.001 18.3337 9.99996C18.3337 5.39758 14.6027 1.66663 10.0003 1.66663C7.99927 1.66663 6.16294 2.37193 4.72638 3.5475L16.4527 15.2739ZM3.54787 4.72602C2.3723 6.16258 1.66699 7.9989 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333C12.0014 18.3333 13.8377 17.628 15.2742 16.4524L3.54787 4.72602Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ProhibitedFill;
