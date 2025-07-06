import React from 'react';

const LoginCircleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33255 9.16662H1.70703C2.12513 4.95553 5.67809 1.66663 9.99926 1.66663C14.6016 1.66663 18.3326 5.39758 18.3326 9.99996C18.3326 14.6023 14.6016 18.3333 9.99926 18.3333C5.67809 18.3333 2.12513 15.0444 1.70703 10.8333H8.33255V13.3333L12.4993 9.99996L8.33255 6.66663V9.16662Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LoginCircleFill;
