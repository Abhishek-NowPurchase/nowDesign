import React from 'react';

const NumbersFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.5 15H3.33333V8.33329H7.5V15ZM12.5 15H8.33333V4.99996H12.5V15ZM17.5 15H13.3333V1.66663H17.5V15ZM18.3333 18.3333H2.5V16.6666H18.3333V18.3333Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default NumbersFill;
