import React from 'react';

const DivideFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M3 9H17V11H3V9ZM10 6C9.1716 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.1716 3 10 3C10.8284 3 11.5 3.67157 11.5 4.5C11.5 5.32843 10.8284 6 10 6ZM10 17C9.1716 17 8.5 16.3284 8.5 15.5C8.5 14.6716 9.1716 14 10 14C10.8284 14 11.5 14.6716 11.5 15.5C11.5 16.3284 10.8284 17 10 17Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default DivideFill;
