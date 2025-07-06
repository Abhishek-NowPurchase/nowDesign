import React from 'react';

const ArrowRightLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.4763 9.16658L9.00634 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00634 15.3032L13.4763 10.8332H3.33334V9.16658H13.4763Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightLine;
