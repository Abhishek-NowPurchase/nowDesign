import React from 'react';

const CloseFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M9.99959 8.82208L14.1244 4.69727L15.3029 5.87577L11.1781 10.0006L15.3029 14.1253L14.1244 15.3038L9.99959 11.1791L5.87481 15.3038L4.69629 14.1253L8.82109 10.0006L4.69629 5.87577L5.87481 4.69727L9.99959 8.82208Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CloseFill;
