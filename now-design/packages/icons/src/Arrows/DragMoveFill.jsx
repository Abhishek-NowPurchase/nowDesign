import React from 'react';

const DragMoveFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99999 18.3333L6.66666 15H13.3333L9.99999 18.3333ZM9.99999 1.66663L13.3333 4.99996H6.66666L9.99999 1.66663ZM9.99999 11.6666C9.07949 11.6666 8.33332 10.9205 8.33332 9.99996C8.33332 9.07946 9.07949 8.33329 9.99999 8.33329C10.9205 8.33329 11.6667 9.07946 11.6667 9.99996C11.6667 10.9205 10.9205 11.6666 9.99999 11.6666ZM1.66666 9.99996L4.99999 6.66663V13.3333L1.66666 9.99996ZM18.3333 9.99996L15 13.3333V6.66663L18.3333 9.99996Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DragMoveFill;
