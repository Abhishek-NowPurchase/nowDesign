import React from 'react';

const FocusFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.0001 1.66663C14.6001 1.66663 18.3334 5.39996 18.3334 9.99996C18.3334 14.6 14.6001 18.3333 10.0001 18.3333C5.40008 18.3333 1.66675 14.6 1.66675 9.99996C1.66675 5.39996 5.40008 1.66663 10.0001 1.66663ZM10.0001 8.33329C9.08341 8.33329 8.33341 9.08329 8.33341 9.99996C8.33341 10.9166 9.08341 11.6666 10.0001 11.6666C10.9167 11.6666 11.6667 10.9166 11.6667 9.99996C11.6667 9.08329 10.9167 8.33329 10.0001 8.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default FocusFill;
