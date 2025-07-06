import React from 'react';

const ArrowLeftUpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.3007 9.12233L15.0147 13.8364L13.8362 15.0149L9.12217 10.3008L4.99736 14.4257V4.99756H14.4254L10.3007 9.12233Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftUpFill;
