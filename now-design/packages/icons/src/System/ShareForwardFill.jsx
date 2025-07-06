import React from 'react';

const ShareForwardFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.8333 11.6667H9.16667C6.28502 11.6667 3.78294 13.2918 2.52699 15.6756C2.50911 15.4527 2.5 15.2274 2.5 15C2.5 10.3977 6.23096 6.66667 10.8333 6.66667V2.5L19.1667 9.16667L10.8333 15.8333V11.6667Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShareForwardFill;
