import React from 'react';

const CornerUpLeftLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.8334 8.33344L15.8336 15.8334H14.1669L14.1668 10.0001L5.69028 10L8.98175 13.2915L7.8032 14.47L2.4999 9.16669L7.8032 3.8634L8.98175 5.04191L5.69023 8.33336L15.8334 8.33344Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default CornerUpLeftLine;
