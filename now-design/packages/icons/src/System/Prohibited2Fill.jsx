import React from 'react';

const Prohibited2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.54787 15.2739C2.37229 13.8374 1.66699 12.001 1.66699 9.99996C1.66699 5.39758 5.39795 1.66663 10.0003 1.66663C12.0014 1.66663 13.8377 2.37193 15.2742 3.5475L3.54787 15.2739ZM16.4527 4.72602C17.6283 6.16258 18.3337 7.9989 18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333C7.99927 18.3333 6.16294 17.628 4.72638 16.4524L16.4527 4.72602Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Prohibited2Fill;
