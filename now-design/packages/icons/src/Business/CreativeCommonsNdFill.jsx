import React from 'react';

const CreativeCommonsNdFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99996 1.66663C14.6023 1.66663 18.3333 5.39758 18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39758 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39758 5.39758 1.66663 9.99996 1.66663ZM13.3333 10.8333H6.66663V12.5H13.3333V10.8333ZM13.3333 7.49996H6.66663V9.16662H13.3333V7.49996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CreativeCommonsNdFill;
