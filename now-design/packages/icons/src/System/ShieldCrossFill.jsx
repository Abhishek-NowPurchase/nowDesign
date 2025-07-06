import React from 'react';

const ShieldCrossFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3.15256 2.3549L10 0.833252L16.8474 2.3549C17.2287 2.43964 17.5 2.77781 17.5 3.16839V11.4907C17.5 13.1624 16.6645 14.7236 15.2735 15.6509L10 19.1666L4.7265 15.6509C3.33551 14.7236 2.5 13.1624 2.5 11.4907V3.16839C2.5 2.77781 2.77128 2.43964 3.15256 2.3549ZM9.16667 8.33325H6.66667V9.99992H9.16667V12.4999H10.8333V9.99992H13.3333V8.33325H10.8333V5.83325H9.16667V8.33325Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShieldCrossFill;
