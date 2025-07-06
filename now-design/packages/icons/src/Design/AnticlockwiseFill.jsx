import React from 'react';

const AnticlockwiseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5.00016 8.33333H7.50016L4.16683 12.5L0.833496 8.33333H3.3335V6.66667C3.3335 4.36548 5.19898 2.5 7.50016 2.5H10.8335V4.16667H7.50016C6.11945 4.16667 5.00016 5.28596 5.00016 6.66667V8.33333ZM9.16683 7.5H17.5002C17.9604 7.5 18.3335 7.8731 18.3335 8.33333V16.6667C18.3335 17.1269 17.9604 17.5 17.5002 17.5H9.16683C8.70658 17.5 8.3335 17.1269 8.3335 16.6667V8.33333C8.3335 7.8731 8.70658 7.5 9.16683 7.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default AnticlockwiseFill;
