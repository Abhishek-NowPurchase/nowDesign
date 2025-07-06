import React from 'react';

const VercelFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.1663 18.04H0.833008L9.99968 1.96008L19.1663 18.04Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VercelFill;
