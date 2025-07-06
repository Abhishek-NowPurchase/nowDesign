import React from 'react';

const TentFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.7216 2.50018L18.4195 15.8334H19.1666V17.5H0.833313V15.8334H1.5803L9.27823 2.50018C9.50831 2.1016 10.018 1.96504 10.4166 2.19516C10.5432 2.2683 10.6485 2.3735 10.7216 2.50018ZM9.99998 10.7707L7.21556 15.8334H12.7845L9.99998 10.7707Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default TentFill;
