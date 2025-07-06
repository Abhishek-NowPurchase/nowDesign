import React from 'react';

const LogoutBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16732 1.66663H15.834C16.2942 1.66663 16.6673 2.03973 16.6673 2.49996V17.5C16.6673 17.9602 16.2942 18.3333 15.834 18.3333H4.16732C3.70708 18.3333 3.33398 17.9602 3.33398 17.5V2.49996C3.33398 2.03973 3.70708 1.66663 4.16732 1.66663ZM7.50065 9.16662V6.66663L3.33398 9.99996L7.50065 13.3333V10.8333H12.5007V9.16662H7.50065Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LogoutBoxFill;
