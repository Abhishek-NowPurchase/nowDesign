import React from 'react';

const TentLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M18.4195 15.8334L10.7216 2.50018C10.6485 2.3735 10.5432 2.2683 10.4166 2.19516C10.018 1.96504 9.50831 2.1016 9.27823 2.50018L1.5803 15.8334H0.833313V17.5C6.94442 17.5 13.0556 17.5 19.1666 17.5V15.8334H18.4195ZM6.33324 15.8335H3.50471L9.9999 4.58352L16.4951 15.8335H13.6667L9.99998 9.16671L6.33324 15.8335ZM9.99998 12.6251L11.7646 15.8334H8.23543L9.99998 12.6251Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TentLine;
