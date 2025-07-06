import React from 'react';

const Window2Fill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M2.49996 2.5H17.5C17.9602 2.5 18.3333 2.8731 18.3333 3.33333V16.6667C18.3333 17.1269 17.9602 17.5 17.5 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V3.33333C1.66663 2.8731 2.03973 2.5 2.49996 2.5ZM16.6666 8.33333H3.33329V15.8333H16.6666V8.33333ZM12.5 5V6.66667H15.8333V5H12.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default Window2Fill;
