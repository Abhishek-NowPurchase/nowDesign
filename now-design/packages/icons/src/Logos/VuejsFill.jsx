import React from 'react';

const VuejsFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M0.833984 2.5H4.16732L10.0007 12.5L15.834 2.5H19.1673L10.0007 18.3333L0.833984 2.5ZM8.0562 2.5L10.0007 5.83333L11.9451 2.5H15.3077L10.0007 11.6667L4.69363 2.5H8.0562Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VuejsFill;
