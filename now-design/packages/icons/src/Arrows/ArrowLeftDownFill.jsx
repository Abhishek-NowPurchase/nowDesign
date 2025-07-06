import React from 'react';

const ArrowLeftDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.3007 10.8763L14.4254 15.0011H4.99736V5.57302L9.12217 9.69779L13.8362 4.98376L15.0147 6.16227L10.3007 10.8763Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftDownFill;
