import React from 'react';

const CornerUpLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8334 8.33347L15.8336 15.8334H14.1669L14.1668 10.0001L7.84507 10V14.5119L2.49989 9.16672L7.84507 3.82153V8.33338L15.8334 8.33347Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerUpLeftFill;
