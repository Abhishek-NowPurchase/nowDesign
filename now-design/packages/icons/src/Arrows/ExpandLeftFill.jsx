import React from 'react';

const ExpandLeftFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33327 4.16663V9.16664L13.3335 9.16689V10.8336L8.33327 10.8333V15.8333L2.49994 10.0001L8.33327 4.16663ZM15.0001 15.8335V4.16678H16.6667V15.8335H15.0001Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ExpandLeftFill;
