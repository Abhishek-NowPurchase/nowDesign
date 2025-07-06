import React from 'react';

const SignpostLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 4.16663H14.5118L18.0892 7.74403C18.4147 8.06947 18.4147 8.59712 18.0892 8.92254L14.5118 12.5H10V18.3333H8.33333V12.5H3.33333C2.8731 12.5 2.5 12.1269 2.5 11.6666V4.99996C2.5 4.53973 2.8731 4.16663 3.33333 4.16663H8.33333V1.66663H10V4.16663ZM13.8215 10.8333L16.3215 8.33329L13.8215 5.83329H4.16667V10.8333H13.8215Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SignpostLine;
