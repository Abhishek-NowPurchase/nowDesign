import React from 'react';

const CornerLeftUpLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33343 15.8334L15.8333 15.8335V14.1668L10.0001 14.1668L10 5.69025L13.2914 8.98167L14.47 7.80318L9.16668 2.49988L3.86337 7.80318L5.04189 8.98167L8.33335 5.69021L8.33343 15.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerLeftUpLine;
