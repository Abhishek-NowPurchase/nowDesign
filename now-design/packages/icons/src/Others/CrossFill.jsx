import React from 'react';

const CrossFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.6663 1.66663H8.33301V6.66663H3.33301V9.99996H8.33301V18.3333H11.6663V9.99996H16.6663V6.66663H11.6663V1.66663Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CrossFill;
