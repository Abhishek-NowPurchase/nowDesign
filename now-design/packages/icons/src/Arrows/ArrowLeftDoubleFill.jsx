import React from 'react';

const ArrowLeftDoubleFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M4.02985 9.99997L9.20241 15.1726L10.3809 13.9941L6.38686 9.99997L10.3809 6.0059L9.20241 4.82739L4.02985 9.99997ZM8.73808 9.99997L13.9107 15.1726L15.0892 13.9941L11.0951 9.99997L15.0892 6.0059L13.9107 4.82739L8.73808 9.99997Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ArrowLeftDoubleFill;
