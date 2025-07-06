import React from 'react';

const ArrowLeftWideLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M6.97375 9.99997L10.9302 2.52673L12.4032 3.30655L8.85959 9.99997L12.4032 16.6934L10.9302 17.4732L6.97375 9.99997Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftWideLine;
