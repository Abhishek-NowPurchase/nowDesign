import React from 'react';

const ArrowLeftSLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.02367 10.0006L13.1485 14.1253L11.97 15.3038L6.66667 10.0006L11.97 4.69727L13.1485 5.87577L9.02367 10.0006Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftSLine;
