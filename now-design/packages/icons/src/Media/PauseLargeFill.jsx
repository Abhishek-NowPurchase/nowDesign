import React from 'react';

const PauseLargeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 2.5H6.66667V17.5H5V2.5ZM13.3333 2.5H15V17.5H13.3333V2.5Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default PauseLargeFill;
