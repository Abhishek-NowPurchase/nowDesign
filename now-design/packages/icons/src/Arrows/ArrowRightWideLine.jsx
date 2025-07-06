import React from 'react';

const ArrowRightWideLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M13.0262 9.99997L9.06983 2.52673L7.59685 3.30655L11.1404 9.99997L7.59685 16.6934L9.06983 17.4732L13.0262 9.99997Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightWideLine;
