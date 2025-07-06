import React from 'react';

const SliceFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M11.4732 10.1906L13.241 11.9584C9.41083 15.7886 4.69676 16.9671 1.75049 16.3778L14.7141 3.41418L16.4819 5.18195L11.4732 10.1906Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default SliceFill;
