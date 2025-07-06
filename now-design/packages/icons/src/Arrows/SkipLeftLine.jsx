import React from 'react';

const SkipLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.5952 9.99997L15.5893 6.0059L14.4108 4.82739L9.23817 9.99997L14.4108 15.1726L15.5893 13.9941L11.5952 9.99997ZM5.83334 15V4.99998H7.5V15H5.83334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SkipLeftLine;
