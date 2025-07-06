import React from 'react';

const CornerLeftUpFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33342 15.8334L15.8333 15.8336V14.1669L10.0001 14.1668L10 7.84505H14.5118L9.16667 2.49988L3.82149 7.84505H8.33334L8.33342 15.8334Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerLeftUpFill;
