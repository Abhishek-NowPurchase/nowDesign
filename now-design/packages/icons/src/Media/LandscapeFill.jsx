import React from 'react';

const LandscapeFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.3337 17.5L9.36541 10.2248L12.5003 5L19.167 17.5H13.3337ZM6.66699 8.33333L11.667 17.5H1.66699L6.66699 8.33333ZM4.58366 6.66667C3.43307 6.66667 2.50033 5.73392 2.50033 4.58333C2.50033 3.43274 3.43307 2.5 4.58366 2.5C5.73425 2.5 6.66699 3.43274 6.66699 4.58333C6.66699 5.73392 5.73425 6.66667 4.58366 6.66667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default LandscapeFill;
