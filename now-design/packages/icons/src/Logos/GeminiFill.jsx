import React from 'react';

const GeminiFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.9997 10.0196C14.6354 10.3431 10.3428 14.6358 10.0193 20H9.98017C9.65667 14.6358 5.36408 10.3431 0 10.0196V9.98042C5.36408 9.65692 9.65667 5.36433 9.98017 0H10.0193C10.3428 5.36433 14.6354 9.65692 19.9997 9.98042V10.0196Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default GeminiFill;
