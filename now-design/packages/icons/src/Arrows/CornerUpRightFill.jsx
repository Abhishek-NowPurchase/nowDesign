import React from 'react';

const CornerUpRightFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.16657 8.33347L4.16647 15.8334H5.83313L5.83322 10.0001L12.1549 10V14.5119L17.5001 9.16672L12.1549 3.82153V8.33338L4.16657 8.33347Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerUpRightFill;
