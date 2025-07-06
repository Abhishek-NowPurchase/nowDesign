import React from 'react';

const SignpostFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10 4.16663V1.66663H8.33333V4.16663H3.33333C2.8731 4.16663 2.5 4.53973 2.5 4.99996V11.6666C2.5 12.1269 2.8731 12.5 3.33333 12.5H14.5118L18.0892 8.92254C18.4147 8.59712 18.4147 8.06947 18.0892 7.74403L14.5118 4.16663H10ZM10 14.1666H8.33333V18.3333H10V14.1666Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SignpostFill;
