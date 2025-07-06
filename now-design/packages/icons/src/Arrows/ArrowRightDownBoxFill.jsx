import React from 'react';

const ArrowRightDownBoxFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.33333 2.5C2.8731 2.5 2.5 2.8731 2.5 3.33333V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333ZM13.3334 13.3326H6.32155L9.23825 10.4159L6.07748 7.25518L7.25598 6.07666L10.4167 9.23742L13.3334 6.32074V13.3326Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightDownBoxFill;
