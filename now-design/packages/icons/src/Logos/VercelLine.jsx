import React from 'react';

const VercelLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M19.1663 18.04L9.99968 1.96008L0.833008 18.04H19.1663ZM16.2978 16.3733H3.70159L9.99968 5.32539L16.2978 16.3733Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default VercelLine;
