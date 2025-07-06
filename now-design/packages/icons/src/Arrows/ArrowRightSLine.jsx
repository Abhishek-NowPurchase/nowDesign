import React from 'react';

const ArrowRightSLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.9764 10.0006L6.85159 5.87577L8.03011 4.69727L13.3334 10.0006L8.03011 15.3038L6.85159 14.1253L10.9764 10.0006Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowRightSLine;
