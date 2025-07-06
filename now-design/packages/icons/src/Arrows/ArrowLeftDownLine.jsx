import React from 'react';

const ArrowLeftDownLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M7.5 11.3241L14.6722 4.15198L15.8507 5.33049L8.6785 12.5026H15V14.1693H5.83333V5.00266H7.5V11.3241Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftDownLine;
