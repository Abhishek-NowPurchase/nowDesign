import React from 'react';

const CornerLeftDownFill = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M8.33341 4.16661L15.8333 4.1665V5.83317L10.0001 5.83325L10 12.155H14.5118L9.16666 17.5001L3.82148 12.155H8.33333L8.33341 4.16661Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerLeftDownFill;
