import React from 'react';

const DiscussFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.9999 15.8333L11.6666 18.75L9.33325 15.8333H4.99992C4.53969 15.8333 4.16659 15.4602 4.16659 15V5.91876C4.16659 5.45853 4.53969 5.08543 4.99992 5.08543H18.3333C18.7935 5.08543 19.1666 5.45853 19.1666 5.91876V15C19.1666 15.4602 18.7935 15.8333 18.3333 15.8333H13.9999ZM1.66659 1.66663H15.8333V3.33329H2.49992V12.5H0.833252V2.49996C0.833252 2.03973 1.20635 1.66663 1.66659 1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DiscussFill;
