import React from 'react';

const LogoutBoxRFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16732 18.3333C3.70708 18.3333 3.33398 17.9602 3.33398 17.5V2.49996C3.33398 2.03973 3.70708 1.66663 4.16732 1.66663H15.834C16.2942 1.66663 16.6673 2.03973 16.6673 2.49996V17.5C16.6673 17.9602 16.2942 18.3333 15.834 18.3333H4.16732ZM12.5007 13.3333L16.6673 9.99996L12.5007 6.66663V9.16662H7.50065V10.8333H12.5007V13.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LogoutBoxRFill;
